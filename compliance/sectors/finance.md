# Finance Compliance Checklist

## Reglementations applicables
- PCI-DSS 4.0 (donnees de paiement)
- PSD2/PSD3 (services de paiement, EU)
- SOX (Sarbanes-Oxley, societes cotees US)
- MiFID II (instruments financiers, EU)
- RGPD (donnees clients)
- NIS2 (entite essentielle secteur finance)

---

## PCI-DSS 4.0

### Stockage et transmission
- [ ] JAMAIS de PAN en clair (tokenisation obligatoire)
- [ ] JAMAIS de CVV/CVC stocke (meme chiffre)
- [ ] TLS 1.2+ pour toute transmission de donnees cartes
- [ ] Chiffrement AES-256 at rest si PAN stocke (tokenise)

### Pages de paiement (Req 6.4)
- [ ] CSP strict: `script-src 'self' js.stripe.com`
- [ ] Inventaire des scripts tiers sur pages paiement
- [ ] Mecanisme de detection de modification (SRI, CSP reporting)
- [ ] WAF devant les endpoints de paiement

### Acces et monitoring
- [ ] MFA pour tout acces admin au CDE
- [ ] Logs d'audit pour acces aux donnees cartes
- [ ] Vulnerability scanning trimestriel (ASV)
- [ ] Penetration testing annuel

### SAQ
- [ ] Determiner le SAQ applicable (A, A-EP, D)
- [ ] SAQ A recommande: deleguer tout a Stripe/Adyen

## PSD2/PSD3

### SCA (Strong Customer Authentication)
- [ ] 2 facteurs parmi: connaissance, possession, inherence
- [ ] 3D Secure 2 active pour paiements online
- [ ] Exemptions correctement implementees:
  - Low value (< 30 EUR)
  - Trusted beneficiary
  - Recurring (apres premier paiement SCA)
  - Transaction Risk Analysis (TRA)

### Open Banking
- [ ] API conforme si AISP/PISP
- [ ] Consentement explicite pour acces aux comptes
- [ ] Token-based authentication (OAuth 2.0)

## SOX (si societe cotee)

### Audit Trails
- [ ] Logs immutables pour toutes les transactions financieres
- [ ] Qui, quoi, quand, avant/apres pour chaque modification
- [ ] Retention minimum 7 ans
- [ ] Logs non modifiables par les developpeurs

### Segregation of Duties
- [ ] Separation dev / ops / admin
- [ ] Approbation requise pour changements en production
- [ ] Revue de code obligatoire avant merge

### Change Management
- [ ] Tout changement de code tracable (git, JIRA)
- [ ] Processus d'approbation pour releases production
- [ ] Rollback procedure documentee et testee

## MiFID II

### Record Keeping
- [ ] Conservation des communications electroniques (5 ans)
- [ ] Enregistrement des ordres et transactions
- [ ] Horodatage precis (synchronisation NTP)

### Best Execution
- [ ] Documentation des politiques d'execution
- [ ] Rapports d'execution reguliers

## RGPD

- [ ] Politique de confidentialite specifique finance
- [ ] Base legale: execution du contrat + obligation legale
- [ ] Retention conforme aux obligations reglementaires (vs minimisation RGPD)
- [ ] DSR API fonctionnelle (attention: certaines donnees non-effacables pour raisons legales)

## NIS2

- [ ] Incident response plan (24h notification)
- [ ] Supply chain risk assessment
- [ ] SBOM pour chaque composant
- [ ] Formation cybersecurite direction

## Tests

```bash
# PCI-DSS — Verifier absence de PAN dans le code
grep -rn "4[0-9]\{15\}\|5[1-5][0-9]\{14\}\|3[47][0-9]\{13\}" src/ --include="*.ts" --include="*.js"

# Security audit
npm audit --audit-level=high
npx snyk test

# SBOM
npx @cyclonedx/cyclonedx-npm --output-file sbom.json
```
