# Data Subject Requests (DSR) — Implementation Patterns

## Architecture

```
┌─────────────┐     ┌───────────────┐     ┌──────────────┐
│  User/Data   │────▶│  DSR API      │────▶│   DSR Queue  │
│  Subject     │     │  (Auth + Rate)│     │  (Async job) │
└─────────────┘     └───────────────┘     └──────────────┘
                                                  │
                          ┌───────────────────────┤
                          ▼                       ▼
                   ┌──────────────┐       ┌──────────────┐
                   │  Data Store  │       │ Sub-processor │
                   │  (Primary)   │       │ Notification  │
                   └──────────────┘       └──────────────┘
                          │
                          ▼
                   ┌──────────────┐
                   │  Audit Log   │
                   │ (Immutable)  │
                   └──────────────┘
```

## API Endpoints

```
POST /api/gdpr/access       — Droit d'acces (Art. 15)
POST /api/gdpr/delete       — Droit a l'effacement (Art. 17)
POST /api/gdpr/rectify      — Droit de rectification (Art. 16)
POST /api/gdpr/portability  — Droit a la portabilite (Art. 20)
POST /api/gdpr/restrict     — Droit a la limitation (Art. 18)
POST /api/gdpr/object       — Droit d'opposition (Art. 21)
GET  /api/gdpr/status/:id   — Statut de la demande
```

## Schema de base de donnees

```sql
CREATE TYPE dsr_type AS ENUM (
  'access', 'delete', 'rectify', 'portability', 'restrict', 'object'
);

CREATE TYPE dsr_status AS ENUM (
  'pending', 'verifying', 'processing', 'completed', 'rejected', 'extended'
);

CREATE TABLE dsr_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id),
  type dsr_type NOT NULL,
  status dsr_status NOT NULL DEFAULT 'pending',

  -- Details de la demande
  details JSONB, -- champs a rectifier, raison d'opposition, etc.

  -- Dates legales
  received_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  deadline_at TIMESTAMPTZ NOT NULL DEFAULT (NOW() + INTERVAL '30 days'),
  extended_deadline_at TIMESTAMPTZ, -- si extension (+60 jours)
  completed_at TIMESTAMPTZ,

  -- Verification
  identity_verified BOOLEAN DEFAULT false,
  verification_method VARCHAR(50), -- 'email', 'id_document', '2fa'

  -- Resultat
  result_url VARCHAR(500), -- lien de telechargement (acces/portabilite)
  result_expires_at TIMESTAMPTZ,
  rejection_reason TEXT,

  -- Audit
  processed_by VARCHAR(100), -- systeme ou operateur
  notes TEXT,

  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_dsr_user ON dsr_requests(user_id);
CREATE INDEX idx_dsr_status ON dsr_requests(status) WHERE status != 'completed';
CREATE INDEX idx_dsr_deadline ON dsr_requests(deadline_at) WHERE status = 'processing';
```

## Implementation API (Node.js/Express)

```typescript
// routes/gdpr.ts
import { Router } from "express";
import { requireAuth, rateLimit } from "../middleware";

const router = Router();

// Rate limiting: max 5 demandes par heure par utilisateur
router.use(rateLimit({ windowMs: 60 * 60 * 1000, max: 5 }));

// Authentification obligatoire
router.use(requireAuth);

// POST /api/gdpr/access — Droit d'acces
router.post("/access", async (req, res) => {
  const userId = req.user.id;

  // 1. Creer la demande
  const request = await createDSR(userId, "access");

  // 2. Lancer le job async d'export
  await queue.add("dsr-access", { requestId: request.id, userId });

  // 3. Audit log
  await auditLog("dsr_access_requested", { userId, requestId: request.id });

  res.status(202).json({
    id: request.id,
    status: "processing",
    message: "Votre demande est en cours. Vous recevrez un email dans les 30 jours.",
    deadline: request.deadline_at,
  });
});

// POST /api/gdpr/delete — Droit a l'effacement
router.post("/delete", async (req, res) => {
  const userId = req.user.id;

  // Verifier les exceptions (obligation legale, contrat en cours, etc.)
  const exceptions = await checkDeletionExceptions(userId);
  if (exceptions.length > 0) {
    return res.status(200).json({
      status: "partial",
      message: "Certaines donnees ne peuvent pas etre supprimees.",
      deletable: exceptions.filter((e) => e.deletable),
      retained: exceptions.filter((e) => !e.deletable),
    });
  }

  const request = await createDSR(userId, "delete");
  await queue.add("dsr-delete", { requestId: request.id, userId });
  await auditLog("dsr_delete_requested", { userId, requestId: request.id });

  res.status(202).json({
    id: request.id,
    status: "processing",
    message: "Votre demande de suppression est en cours.",
  });
});
```

## Job de suppression

```typescript
// jobs/dsr-delete.ts
async function processDeletion(userId: string, requestId: string) {
  const tx = await db.transaction();

  try {
    // 1. Anonymiser les donnees transactionnelles (obligation legale de conservation)
    await tx.query(`
      UPDATE orders SET
        customer_name = 'DELETED',
        customer_email = 'deleted@deleted.com',
        shipping_address = NULL
      WHERE user_id = $1
    `, [userId]);

    // 2. Supprimer les donnees personnelles
    await tx.query("DELETE FROM user_preferences WHERE user_id = $1", [userId]);
    await tx.query("DELETE FROM user_sessions WHERE user_id = $1", [userId]);
    await tx.query("DELETE FROM user_consents WHERE user_id = $1", [userId]);

    // 3. Anonymiser le compte
    await tx.query(`
      UPDATE users SET
        email = 'deleted-' || id || '@deleted.com',
        name = 'Deleted User',
        phone = NULL,
        avatar_url = NULL,
        deleted_at = NOW()
      WHERE id = $1
    `, [userId]);

    // 4. Notifier les sous-traitants
    await notifySubProcessors(userId, "delete");

    // 5. Mettre a jour le statut de la demande
    await tx.query(`
      UPDATE dsr_requests SET
        status = 'completed',
        completed_at = NOW()
      WHERE id = $1
    `, [requestId]);

    await tx.commit();

    // 6. Audit log
    await auditLog("dsr_delete_completed", { userId, requestId });

    // 7. Email de confirmation
    await sendDeletionConfirmation(userId);
  } catch (error) {
    await tx.rollback();
    throw error;
  }
}
```

## Job d'export (acces/portabilite)

```typescript
// jobs/dsr-access.ts
async function processAccess(userId: string, requestId: string) {
  // 1. Collecter toutes les donnees de l'utilisateur
  const userData = {
    profile: await db.query("SELECT * FROM users WHERE id = $1", [userId]),
    orders: await db.query("SELECT * FROM orders WHERE user_id = $1", [userId]),
    preferences: await db.query("SELECT * FROM user_preferences WHERE user_id = $1", [userId]),
    consents: await db.query("SELECT * FROM consents WHERE user_id = $1", [userId]),
    activity_log: await db.query("SELECT * FROM activity_logs WHERE user_id = $1", [userId]),
  };

  // 2. Generer les fichiers
  const jsonExport = JSON.stringify(userData, null, 2);
  const csvExport = convertToCSV(userData);

  // 3. Stocker temporairement (chiffre, lien avec expiration)
  const downloadUrl = await uploadEncrypted(
    `dsr-export-${requestId}.zip`,
    createZip({ "data.json": jsonExport, "data.csv": csvExport }),
    { expiresIn: "7d" }
  );

  // 4. Mettre a jour la demande
  await db.query(`
    UPDATE dsr_requests SET
      status = 'completed',
      completed_at = NOW(),
      result_url = $1,
      result_expires_at = NOW() + INTERVAL '7 days'
    WHERE id = $2
  `, [downloadUrl, requestId]);

  // 5. Notifier l'utilisateur
  await sendAccessReadyEmail(userId, downloadUrl);
}
```

## Delais legaux

| Regulation | Delai initial | Extension | Total max |
|-----------|--------------|-----------|-----------|
| RGPD | 30 jours | +60 jours (si justifie) | 90 jours |
| CCPA/CPRA | 45 jours | +45 jours | 90 jours |
| HIPAA | 30 jours | +30 jours | 60 jours |

## Exceptions a l'effacement (Art. 17 RGPD)

- Obligation legale de conservation (factures, comptabilite)
- Exercice ou defense de droits en justice
- Raisons d'interet public (sante publique)
- Archivage dans l'interet public

## Checklist

- [ ] API DSR authentifiee et rate-limitee
- [ ] Verification d'identite avant traitement
- [ ] Traitement async (queue) avec deadlines
- [ ] Export en JSON + CSV (portabilite)
- [ ] Anonymisation des donnees non-supprimables
- [ ] Notification aux sous-traitants
- [ ] Audit log de chaque demande et action
- [ ] Email de confirmation a l'utilisateur
- [ ] Lien de telechargement chiffre et temporaire
- [ ] Monitoring des deadlines (alerte si > 25 jours)
- [ ] Dashboard admin pour suivre les demandes
