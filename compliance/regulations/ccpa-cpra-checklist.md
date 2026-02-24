# CCPA/CPRA — Checklist technique

> California Consumer Privacy Act (2018) + California Privacy Rights Act (2020, en vigueur 2023)

## Penalites: $2,500/violation (non intentionnelle), $7,500/violation (intentionnelle)

---

## Seuils d'application

L'entreprise est soumise au CCPA/CPRA si elle:
- [ ] CA annuel > $25M, OU
- [ ] Achete/vend/partage les donnees de > 100,000 consommateurs/foyers, OU
- [ ] Tire > 50% de son CA de la vente/partage de donnees personnelles

## Droits des consommateurs

### Droit de savoir (Art. 1798.100, 110)
- [ ] Informer quelles categories de donnees personnelles sont collectees
- [ ] Informer des finalites de collecte et d'utilisation
- [ ] Informer si les donnees sont vendues ou partagees
- [ ] Fournir les donnees specifiques sur demande
- [ ] Delai: 45 jours (extensible 45 jours supplementaires)

### Droit de suppression (Art. 1798.105)
- [ ] Supprimer les donnees personnelles sur demande
- [ ] Notifier les sous-traitants de supprimer egalement
- [ ] Exceptions: obligation legale, transactions, securite, recherche

### Droit d'opt-out (Art. 1798.120)
- [ ] Lien "Do Not Sell or Share My Personal Information" visible
- [ ] Respecter le signal GPC (Global Privacy Control)
- [ ] Pas de vente/partage pour les mineurs < 16 ans sans opt-in
- [ ] Mineurs < 13 ans: consentement parental requis

### Droit de correction (Art. 1798.106 — CPRA)
- [ ] Permettre la correction de donnees inexactes
- [ ] Processus de verification avant correction

### Droit de limiter l'utilisation de donnees sensibles (CPRA)
- [ ] Lien "Limit the Use of My Sensitive Personal Information"
- [ ] Donnees sensibles: SSN, financieres, geolocalisation precise, race, sante, orientation sexuelle, biometrie

## Implementation technique

### Liens obligatoires
```
Footer/navigation:
- "Do Not Sell or Share My Personal Information" → /opt-out
- "Limit the Use of My Sensitive Personal Information" → /limit-data (si applicable)
- "Privacy Policy" → /privacy
```

### GPC (Global Privacy Control)
```
Detection:
- Header: Sec-GPC: 1
- JS: navigator.globalPrivacyControl === true
Action: traiter comme opt-out de la vente/partage
```

### API de gestion des demandes
```
Endpoints:
- POST /api/ccpa/know     — Demande d'acces
- POST /api/ccpa/delete   — Demande de suppression
- POST /api/ccpa/opt-out  — Opt-out vente/partage
- POST /api/ccpa/correct  — Demande de correction

Verification: 2 etapes (email + confirmation)
Delai: 45 jours + 45 jours extension si justifie
Logs: audit de chaque demande
```

## Privacy Policy

La politique de confidentialite doit inclure:
- [ ] Categories de donnees collectees (12 derniers mois)
- [ ] Sources des donnees
- [ ] Finalites de collecte
- [ ] Categories de tiers avec qui les donnees sont partagees
- [ ] Droits des consommateurs et comment les exercer
- [ ] Contact pour les demandes
- [ ] Date de derniere mise a jour
- [ ] Mise a jour au moins annuelle

## Non-discrimination (Art. 1798.125)

- [ ] Pas de discrimination pour l'exercice des droits CCPA
- [ ] Pas de refus de service
- [ ] Pas de prix different
- [ ] Pas de qualite de service reduite
- [ ] Exception: programmes de fidelite avec consentement

## Sous-traitants

- [ ] Contrats avec clauses CCPA/CPRA
- [ ] Notification aux sous-traitants des demandes de suppression
- [ ] Audit de conformite des sous-traitants
