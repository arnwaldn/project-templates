# HIPAA — Checklist technique

> Health Insurance Portability and Accountability Act (1996, mises a jour continues)

## Penalites: $100 - $1,500,000 par categorie de violation par an

---

## Privacy Rule (45 CFR Part 164, Subpart E)

### Minimum Necessary Standard
- [ ] Chaque role n'accede qu'aux PHI strictement necessaires
- [ ] Politiques d'acces documentees par role
- [ ] Revue des acces reguliere

### Notice of Privacy Practices
- [ ] Notification ecrite des pratiques de confidentialite
- [ ] Fournie au premier contact avec le patient
- [ ] Publiee sur le site web si services en ligne
- [ ] Mise a jour et redistribution si changement materiel

### Authorizations
- [ ] Autorisation ecrite pour toute divulgation non couverte par TPO
  (Treatment, Payment, Healthcare Operations)
- [ ] Autorisation specifique pour marketing et vente de PHI

## Security Rule — Administrative Safeguards (164.308)

- [ ] Risk assessment documente et mis a jour annuellement
- [ ] Security management process
- [ ] Workforce security: procedures d'embauche/depart
- [ ] Information access management
- [ ] Security awareness training pour tous les employes
- [ ] Security incident procedures
- [ ] Contingency plan (DR + backup)
- [ ] Evaluation periodique des controles

## Security Rule — Physical Safeguards (164.310)

- [ ] Controle d'acces aux locaux
- [ ] Workstation security (ecran verrouille, clean desk)
- [ ] Device and media controls (destruction securisee)

## Security Rule — Technical Safeguards (164.312)

### Access Control
- [ ] Unique user ID pour chaque utilisateur
- [ ] Procedures d'acces d'urgence
- [ ] Deconnexion automatique apres inactivite (15 min)
- [ ] Chiffrement des PHI at rest (AES-256)

### Audit Controls
- [ ] Logs de tout acces aux PHI
- [ ] Qui, quoi, quand, depuis ou
- [ ] Logs immutables et centralises
- [ ] Retention minimum 6 ans
- [ ] Revue reguliere des logs

### Integrity Controls
- [ ] Mecanisme d'integrite pour PHI electroniques
- [ ] Detection de modification non autorisee
- [ ] Checksums ou signatures

### Person/Entity Authentication
- [ ] Verification de l'identite avant acces aux PHI
- [ ] MFA recommande (obligatoire dans la pratique)

### Transmission Security
- [ ] TLS 1.2+ pour toute transmission de PHI
- [ ] VPN pour acces distant
- [ ] Email: chiffrement si PHI (pas de PHI en clair par email)

## Breach Notification Rule (164.400-414)

### Processus
1. [ ] Detection de la violation
2. [ ] Evaluation du risque (4 facteurs)
3. [ ] Notification HHS sous 60 jours (si > 500 personnes: sans delai injustifie)
4. [ ] Notification individuelle aux personnes affectees
5. [ ] Notification medias si > 500 personnes dans un Etat
6. [ ] Documentation de la violation et des mesures

### 4 facteurs d'evaluation
1. Nature et etendue des PHI impliques
2. Personne non autorisee ayant accede
3. Si les PHI ont ete effectivement acquis ou consultes
4. Mesures de mitigation prises

## BAA (Business Associate Agreement)

### Sous-traitants necessitant un BAA
- [ ] Cloud provider (AWS, GCP, Azure)
- [ ] Service d'hebergement
- [ ] Service d'email/communication
- [ ] Service de backup
- [ ] Service de monitoring/logging
- [ ] Toute entite ayant acces potentiel aux PHI

### Contenu du BAA
- [ ] Usages autorises des PHI
- [ ] Obligations de securite
- [ ] Notification de breach
- [ ] Retour ou destruction des PHI a la fin du contrat
- [ ] Droit d'audit

## De-identification (164.514)

### Safe Harbor Method (18 identifiers)
Retirer tous les 18 identifiants = donnees de-identifiees hors scope HIPAA.

### Expert Determination Method
Un statisticien certifie que le risque de re-identification est tres faible.

## Implementation technique recommandee

```
Architecture HIPAA:
- DB: chiffrement at rest (AES-256) + backup chiffre
- API: TLS 1.2+, auth JWT + MFA, rate limiting
- Audit: structured logs (JSON), append-only, 6 ans retention
- RBAC: matrice roles/permissions documentee
- PHI: jamais dans les logs applicatifs, jamais en analytics
- Sessions: timeout 15 min, token rotation
```
