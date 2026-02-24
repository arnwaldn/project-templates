# Consent Management — Implementation Patterns

## Architecture

```
┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│   UI Layer   │────▶│ Consent API  │────▶│  Consent DB  │
│ (Banner/Prefs)│     │  (Server)    │     │  (Postgres)  │
└──────────────┘     └──────────────┘     └──────────────┘
                            │
                            ▼
                     ┌──────────────┐
                     │ Event System │
                     │ (Propagation)│
                     └──────────────┘
                            │
                     ┌──────┴──────┐
                     ▼             ▼
              ┌──────────┐  ┌──────────┐
              │ Analytics │  │ Marketing│
              │  Scripts  │  │  Scripts │
              └──────────┘  └──────────┘
```

## Schema de base de donnees

```sql
-- Table de consentement
CREATE TABLE consents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  -- Pour visiteurs non authentifies
  anonymous_id VARCHAR(64),

  -- Choix de consentement
  analytics BOOLEAN NOT NULL DEFAULT false,
  functional BOOLEAN NOT NULL DEFAULT false,
  marketing BOOLEAN NOT NULL DEFAULT false,

  -- Metadata
  consent_version VARCHAR(10) NOT NULL,
  ip_country VARCHAR(2),
  gpc_signal BOOLEAN DEFAULT false,

  -- Audit
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

  -- Index
  CONSTRAINT consent_user_or_anon CHECK (
    user_id IS NOT NULL OR anonymous_id IS NOT NULL
  )
);

CREATE INDEX idx_consents_user ON consents(user_id) WHERE user_id IS NOT NULL;
CREATE INDEX idx_consents_anonymous ON consents(anonymous_id) WHERE anonymous_id IS NOT NULL;

-- Historique des consentements (audit trail RGPD)
CREATE TABLE consent_history (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  consent_id UUID REFERENCES consents(id),
  action VARCHAR(20) NOT NULL, -- 'granted', 'revoked', 'updated'
  previous_choices JSONB,
  new_choices JSONB NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
```

## API endpoints

```
POST   /api/consent          — Enregistrer/mettre a jour le consentement
GET    /api/consent           — Recuperer le consentement actuel
DELETE /api/consent           — Revoquer tout consentement (reset)
GET    /api/consent/history   — Historique des consentements (audit)
```

### POST /api/consent

```typescript
// Request
{
  "analytics": true,
  "functional": false,
  "marketing": false,
  "gpc_signal": false
}

// Response
{
  "id": "uuid",
  "choices": {
    "necessary": true,
    "analytics": true,
    "functional": false,
    "marketing": false
  },
  "version": "1.0",
  "timestamp": "2026-01-15T10:30:00Z"
}
```

## Propagation du consentement

```typescript
// lib/consent-manager.ts

type ConsentEvent = {
  type: "consent_updated";
  choices: ConsentChoices;
  timestamp: string;
};

class ConsentManager {
  private listeners: ((event: ConsentEvent) => void)[] = [];

  subscribe(listener: (event: ConsentEvent) => void) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  }

  async updateConsent(choices: ConsentChoices): Promise<void> {
    // 1. Sauvegarder en DB via API
    await fetch("/api/consent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(choices),
    });

    // 2. Sauvegarder en localStorage (client-side cache)
    localStorage.setItem("cookie-consent", JSON.stringify({
      choices,
      timestamp: new Date().toISOString(),
      version: "1.0",
    }));

    // 3. Propager aux listeners
    const event: ConsentEvent = {
      type: "consent_updated",
      choices,
      timestamp: new Date().toISOString(),
    };
    this.listeners.forEach((l) => l(event));

    // 4. Appliquer immediatement
    this.applyConsent(choices);
  }

  private applyConsent(choices: ConsentChoices) {
    if (!choices.analytics) {
      // Desactiver et supprimer les cookies analytics
      this.removeAnalyticsCookies();
    }
    if (!choices.marketing) {
      // Desactiver et supprimer les cookies marketing
      this.removeMarketingCookies();
    }
  }

  private removeAnalyticsCookies() {
    // Supprimer les cookies Google Analytics
    document.cookie = "_ga=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "_gid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  }

  private removeMarketingCookies() {
    // Supprimer les cookies marketing
    document.cookie = "_fbp=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  }
}

export const consentManager = new ConsentManager();
```

## Integration avec GTM (Google Tag Manager)

```typescript
// Si vous utilisez GTM: pousser le consentement dans le dataLayer
function pushConsentToGTM(choices: ConsentChoices) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "consent_update",
    analytics_storage: choices.analytics ? "granted" : "denied",
    ad_storage: choices.marketing ? "granted" : "denied",
    functionality_storage: choices.functional ? "granted" : "denied",
    personalization_storage: choices.functional ? "granted" : "denied",
  });
}
```

## Checklist

- [ ] Consentement stocke cote serveur (preuve RGPD)
- [ ] Historique des consentements conserve (audit trail)
- [ ] Propagation immediate aux scripts tiers
- [ ] Suppression des cookies en cas de revocation
- [ ] GPC respecte comme opt-out
- [ ] Re-consentement si la version du CMP change
- [ ] API de consentement documentee
- [ ] Lien permanent "Gerer les cookies" dans le footer
