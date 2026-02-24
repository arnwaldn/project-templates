# OWASP Top 10 2025 — Checklist technique

> Open Worldwide Application Security Project — Top 10 Web Application Security Risks (2025)

---

## A01: Broken Access Control

- [ ] Deny by default: refuser l'acces sauf autorisation explicite
- [ ] Verification d'autorisation cote serveur (jamais cote client seul)
- [ ] IDOR: verifier que l'utilisateur a le droit d'acceder a la ressource demandee
- [ ] CORS restrictif: Access-Control-Allow-Origin specifique
- [ ] Desactiver le directory listing du serveur web
- [ ] Rate limiting sur les endpoints sensibles
- [ ] Invalider les tokens JWT/session cote serveur au logout
- [ ] Tests automatises de controle d'acces

## A02: Cryptographic Failures

- [ ] Chiffrement at rest: AES-256 pour donnees sensibles
- [ ] Chiffrement in transit: TLS 1.2+ (preferablement 1.3)
- [ ] HSTS active avec long max-age
- [ ] Pas d'algorithmes obsoletes (MD5, SHA1 pour securite, DES, RC4)
- [ ] Rotation des cles de chiffrement planifiee
- [ ] Secrets en environment variables (pas dans le code)
- [ ] Mots de passe: bcrypt/scrypt/argon2 (jamais SHA256 seul)

## A03: Software Supply Chain Failures (NOUVEAU 2025)

- [ ] Dependances auditees regulierement (`npm audit`, `pip-audit`, `cargo audit`)
- [ ] Lock files commites et verifies (package-lock.json, pnpm-lock.yaml)
- [ ] SBOM genere pour chaque release
- [ ] Verification des signatures des packages
- [ ] Provenance des dependances verifiee
- [ ] pnpm `minimum-release-age` configure (protection packages recents)
- [ ] Dependabot/Renovate active pour mises a jour automatiques
- [ ] Pas de dependances avec vulnerabilites CRITICAL connues
- [ ] CI: scan des dependances a chaque PR

## A04: Insecure Design

- [ ] Threat modeling realise (STRIDE)
- [ ] Security requirements dans les user stories
- [ ] Secure design patterns utilises (defense in depth)
- [ ] Separation des privileges
- [ ] Limites de taux et de ressources par design

## A05: Security Misconfiguration

- [ ] Pas de credentials par defaut
- [ ] Features inutiles desactivees
- [ ] Error handling: pas de stack traces en production
- [ ] Security headers configures:
  - `Content-Security-Policy`
  - `X-Content-Type-Options: nosniff`
  - `X-Frame-Options: DENY`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Permissions-Policy`
- [ ] Serveur: version masquee (pas de `Server` header)
- [ ] Cloud: IAM least privilege

## A06: Vulnerable and Outdated Components

- [ ] Inventaire des dependances et versions
- [ ] Mises a jour regulieres (au moins mensuelle)
- [ ] Scan de vulnerabilites automatise en CI
- [ ] Pas de dependances abandonnees (pas de maintainer)
- [ ] Suppression des dependances inutilisees

## A07: Identification and Authentication Failures

- [ ] MFA disponible (et encourage/obligatoire pour admin)
- [ ] Pas de credentials par defaut
- [ ] Rate limiting sur login (bruteforce protection)
- [ ] Politique de mot de passe: minimum 8 caracteres, check against breached passwords
- [ ] Session management securise: tokens aleatoires, expiration, invalidation
- [ ] Pas d'enumeration d'utilisateurs (messages d'erreur generiques)

## A08: Software and Data Integrity Failures

- [ ] CI/CD securise: pas de code injection dans les pipelines
- [ ] Verification des signatures des artefacts
- [ ] SRI (Subresource Integrity) pour les scripts externes
- [ ] Serialization securisee (pas de deserialization non fiable)
- [ ] Code review obligatoire avant merge

## A09: Security Logging and Monitoring Failures

- [ ] Logs pour: login, acces refuse, erreurs, changements de config
- [ ] Logs centralises et immutables
- [ ] Alerting sur les anomalies
- [ ] Pas de donnees sensibles dans les logs (PII, tokens, passwords)
- [ ] Retention des logs: minimum 90 jours disponibles
- [ ] Incident response plan documente

## A10: Mishandling Exceptional Conditions (NOUVEAU 2025)

- [ ] Error handling exhaustif (pas de catch vide)
- [ ] Graceful degradation: le systeme continue de fonctionner partiellement
- [ ] Circuit breakers pour les services externes
- [ ] Timeout sur toutes les requetes externes
- [ ] Validation d'entree: taille, type, format
- [ ] Resource limits: memoire, CPU, connexions DB
- [ ] Pas de crash sur input malformed
- [ ] Tests de chaos/resilience

## Security Headers Template

```
# Recommended headers
Content-Security-Policy: default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self'; connect-src 'self' https://api.example.com; frame-ancestors 'none'
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
```

## Cross-reference

Pour un audit de securite approfondi, utiliser l'agent **security-expert**.
