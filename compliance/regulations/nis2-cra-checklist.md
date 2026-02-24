# NIS2 + CRA — Checklist technique

> NIS2 Directive (UE) 2022/2555 — en vigueur octobre 2024
> Cyber Resilience Act (UE) 2024/2847 — en vigueur 2027 (obligations progressives)

---

## NIS2 — Network and Information Security

### Champ d'application
Entites essentielles: energie, transport, sante, eau, infrastructure numerique, finance, espace
Entites importantes: services postaux, gestion dechets, chimie, alimentation, fabrication, recherche, fournisseurs numeriques

### Penalites
- Entites essentielles: 10M EUR ou 2% CA mondial
- Entites importantes: 7M EUR ou 1.4% CA mondial

### Mesures de securite (Art. 21)
- [ ] Politique d'analyse des risques et de securite des SI
- [ ] Gestion des incidents (detection, reponse, notification)
- [ ] Continuite d'activite (backups, DR, gestion de crise)
- [ ] Securite de la chaine d'approvisionnement
- [ ] Securite dans l'acquisition et le developpement
- [ ] Evaluation de l'efficacite des mesures
- [ ] Pratiques de cyberhygiene et formation
- [ ] Politique de chiffrement
- [ ] Gestion des RH et controle d'acces
- [ ] MFA et communications securisees

### Notification d'incidents (Art. 23)
1. [ ] Alerte initiale: sous **24 heures** au CSIRT/autorite
2. [ ] Notification d'incident: sous **72 heures** avec evaluation initiale
3. [ ] Rapport intermediaire: sur demande du CSIRT
4. [ ] Rapport final: sous **1 mois** apres la notification

### Gouvernance (Art. 20)
- [ ] Direction responsable de la cybersecurite (approbation des mesures)
- [ ] Formation cybersecurite obligatoire pour la direction
- [ ] Direction personnellement responsable en cas de manquement

### Supply Chain Security
- [ ] Evaluation des risques fournisseurs
- [ ] Clauses de securite dans les contrats
- [ ] Audit des fournisseurs critiques
- [ ] Plan de contingence si fournisseur compromis

---

## CRA — Cyber Resilience Act

### Champ d'application
Tous les produits avec elements numeriques vendus dans l'UE (logiciels, IoT, firmware).
**Exceptions**: medical devices, aviation, automobiles (deja reglementes), open-source non-commercial.

### Penalites
- Non-conformite: 15M EUR ou 2.5% CA mondial
- Fausse declaration: 5M EUR ou 1% CA mondial

### Obligations fabricant

#### Conception securisee (Annex I, Part I)
- [ ] Secure-by-default: configuration securisee par defaut
- [ ] Pas de mot de passe par defaut
- [ ] Chiffrement des donnees sensibles
- [ ] Minimisation des surfaces d'attaque
- [ ] Protection contre les acces non autorises
- [ ] Protection de la confidentialite des donnees

#### Gestion des vulnerabilites (Annex I, Part II)
- [ ] Identification et documentation des vulnerabilites
- [ ] Correction rapide via mises a jour de securite
- [ ] Mises a jour automatiques (opt-out possible)
- [ ] Processus de vulnerability disclosure coordonne
- [ ] Support securite minimum **5 ans** (ou duree de vie du produit)

#### SBOM (Software Bill of Materials)
- [ ] SBOM genere pour chaque version du produit
- [ ] Format: CycloneDX ou SPDX
- [ ] Inclut: dependances directes + transitives
- [ ] Mise a jour a chaque release

```bash
# Node.js
npx @cyclonedx/cyclonedx-npm --output-file sbom.json

# Python
pip install cyclonedx-bom
cyclonedx-py environment --format json -o sbom.json

# Go
go install github.com/CycloneDX/cyclonedx-gomod/cmd/cyclonedx-gomod@latest
cyclonedx-gomod mod -json -output sbom.json

# Rust
cargo install cargo-cyclonedx
cargo cyclonedx --format json
```

#### Documentation technique
- [ ] Description du produit et usage prevu
- [ ] Conception et architecture de securite
- [ ] Evaluation des risques de cybersecurite
- [ ] Liste des normes harmonisees appliquees
- [ ] SBOM
- [ ] Resultats des tests de securite

#### Marquage CE
- [ ] Evaluation de conformite realisee
- [ ] Declaration de conformite UE redigee
- [ ] Marquage CE appose sur le produit/documentation
- [ ] Information de contact du fabricant

### Notification de vulnerabilites
- [ ] Vulnerabilite activement exploitee: notification ENISA sous **24 heures**
- [ ] Incident de securite grave: notification ENISA sous **24 heures**
- [ ] Notification aux utilisateurs avec mesures correctives

## CI/CD Integration

```yaml
# Exemple GitHub Actions
- name: Generate SBOM
  run: npx @cyclonedx/cyclonedx-npm --output-file sbom.json

- name: Upload SBOM
  uses: actions/upload-artifact@v4
  with:
    name: sbom
    path: sbom.json

- name: Vulnerability scan
  run: npx snyk test --severity-threshold=high
```
