# PCI-DSS 4.0 — Checklist technique

> Payment Card Industry Data Security Standard v4.0 (mars 2022, obligatoire mars 2025)

## Penalites: amendes PSP, suspension du droit de traiter les cartes

---

## Req 1: Network Security Controls

- [ ] Firewall entre internet et CDE (Cardholder Data Environment)
- [ ] Segmentation reseau: CDE isole du reste
- [ ] Regles firewall documentees et revues tous les 6 mois
- [ ] DMZ pour les systemes publics

## Req 2: Secure Configurations

- [ ] Pas de mots de passe par defaut
- [ ] Hardening des serveurs (CIS benchmarks)
- [ ] Services non necessaires desactives
- [ ] Chiffrement de l'admin non-console

## Req 3: Protect Stored Account Data

- [ ] JAMAIS de PAN en clair en base de donnees
- [ ] Tokenisation via PSP (Stripe, Adyen)
- [ ] Si PAN stocke: chiffrement AES-256
- [ ] JAMAIS de CVV/CVC stocke (meme chiffre)
- [ ] Retention minimale: supprimer les donnees obsoletes
- [ ] Masquage du PAN en affichage (6 premiers + 4 derniers max)

## Req 4: Protect Data in Transit

- [ ] TLS 1.2+ pour toute transmission de donnees cartes
- [ ] Certificats valides et a jour
- [ ] Pas de protocoles obsoletes (SSL, TLS 1.0/1.1)
- [ ] HSTS active

## Req 5: Protect Against Malware

- [ ] Anti-malware sur tous les systemes du CDE
- [ ] Scans reguliers et logs conserves
- [ ] Protection en temps reel active

## Req 6: Secure Development

### 6.2: Bespoke software security
- [ ] Formation securite pour les developpeurs
- [ ] Code review avant chaque mise en production
- [ ] Tests de securite automatises (SAST, DAST)

### 6.4: Public-Facing Web Applications (NOUVEAU 4.0)
- [ ] **6.4.2**: CSP strict sur pages de paiement
- [ ] **6.4.3**: Inventaire de TOUS les scripts sur pages paiement
- [ ] Scripts autorises: hash SHA ou SRI (Subresource Integrity)
- [ ] Monitoring des modifications non autorisees

## Req 7: Restrict Access

- [ ] Principe du moindre privilege
- [ ] RBAC documente
- [ ] Revue des acces tous les 6 mois

## Req 8: Identify Users and Authenticate

- [ ] Identifiant unique par utilisateur
- [ ] MFA obligatoire pour acces au CDE
- [ ] Politique de mot de passe: 12+ caracteres, complexite
- [ ] Lockout apres tentatives echouees

## Req 9: Physical Access

- [ ] (principalement pour serveurs physiques)
- [ ] Cloud: verifier la conformite PCI du provider

## Req 10: Log and Monitor

- [ ] Logs pour tout acces aux donnees cartes
- [ ] Logs centralises et immutables
- [ ] Alertes sur activites suspectes
- [ ] Revue des logs quotidienne
- [ ] Retention des logs: minimum 12 mois (3 mois immediatement disponibles)

## Req 11: Test Security

- [ ] Vulnerability scan interne trimestriel
- [ ] Vulnerability scan externe ASV trimestriel
- [ ] Penetration testing annuel (interne + externe)
- [ ] **11.6.1** (NOUVEAU): Mecanisme de detection de changements sur pages paiement

## Req 12: Security Policies

- [ ] Politique de securite documentee et revue annuellement
- [ ] Programme de sensibilisation securite
- [ ] Incident response plan
- [ ] Risk assessment annuel

## SAQ Decision Tree

```
Acceptez-vous des paiements par carte?
  └── OUI
      ├── Carte saisie sur votre site? → SAQ A-EP ou SAQ D
      ├── Redirect vers PSP (Stripe Checkout)? → SAQ A
      └── Elements PSP integres (Stripe Elements)? → SAQ A
```

**Recommandation**: toujours deleguer a un PSP = SAQ A (le plus simple).

## Implementation Stripe (SAQ A)

```
Pages paiement:
- Stripe Elements ou Checkout
- CSP: script-src 'self' js.stripe.com; frame-src js.stripe.com
- SRI sur les scripts Stripe
- JAMAIS de JS custom manipulant les donnees cartes
```
