# SaaS / Platform Compliance Checklist

## Reglementations applicables
- RGPD (donnees utilisateurs, analytics)
- SOC 2 (Trust Service Criteria)
- EAA + WCAG 2.2 AA (accessibilite)
- NIS2 (si entite essentielle/importante)
- DSA (si plateforme en ligne)
- ePrivacy (cookies, tracking)

---

## RGPD

- [ ] Politique de confidentialite complete (Art. 13-14)
- [ ] Base legale pour chaque traitement documente
- [ ] Data Processing Agreement (DPA) propose aux clients B2B
- [ ] API DSR: acces, suppression, export, rectification
- [ ] Registre des traitements (Art. 30)
- [ ] DPIA si traitement a grande echelle ou profilage
- [ ] Sous-traitants listes et notifies aux clients
- [ ] Data retention policy implementee et automatisee
- [ ] Breach notification process documente (72h autorite, sans delai personnes)

## SOC 2

### Security
- [ ] Controle d'acces RBAC avec principe du moindre privilege
- [ ] MFA obligatoire pour acces admin
- [ ] Chiffrement at rest (AES-256) et in transit (TLS 1.2+)
- [ ] Firewall et network segmentation
- [ ] Vulnerability scanning regulier

### Availability
- [ ] SLA documente et mesure (uptime %)
- [ ] Monitoring et alerting (response time, error rate)
- [ ] Disaster Recovery plan documente et teste
- [ ] Backup strategy: RPO et RTO definis

### Processing Integrity
- [ ] Input validation sur toutes les entrees
- [ ] Audit trails pour operations critiques
- [ ] QA process documente

### Confidentiality
- [ ] Classification des donnees (public, internal, confidential, restricted)
- [ ] Data retention et destruction policy
- [ ] NDA avec employes et sous-traitants

### Privacy
- [ ] Transparence: quelles donnees collectees, pourquoi, combien de temps
- [ ] Consentement ou base legale pour chaque traitement
- [ ] Minimisation des donnees
- [ ] Droits des personnes exercables

## EAA + WCAG 2.2 AA

- [ ] Dashboard accessible au clavier
- [ ] Formulaires avec labels et erreurs accessibles
- [ ] Contraste suffisant sur toute l'interface
- [ ] Target size 24px minimum
- [ ] Focus visible et non obscurci
- [ ] Skip link present
- [ ] Authentification accessible (pas de CAPTCHA cognitif seul)

## NIS2 (si applicable)

- [ ] Analyse de risques cybersecurite documentee
- [ ] Incident response plan (notification 24h)
- [ ] Supply chain security: audit des dependances
- [ ] Formation cybersecurite de la direction
- [ ] SBOM genere pour chaque release

## DSA (si plateforme)

- [ ] Systeme de signalement de contenu
- [ ] Processus de moderation transparent
- [ ] Transparence publicitaire
- [ ] Option de recommandation non-personnalisee

## Tests

```bash
# SOC 2 — Dependency audit
npm audit --audit-level=high
npx snyk test

# NIS2 — SBOM
npx @cyclonedx/cyclonedx-npm --output-file sbom.json

# Accessibilite
npx pa11y http://localhost:3000/dashboard
```
