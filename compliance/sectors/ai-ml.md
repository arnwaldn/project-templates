# AI/ML Compliance Checklist

## Reglementations applicables
- EU AI Act (classification des risques, obligations)
- CRA (Cyber Resilience Act, si produit logiciel EU)
- RGPD Art. 22 (decisions automatisees)
- RGPD (donnees d'entrainement, donnees utilisateurs)

---

## EU AI Act (via agent ATUM)

### Classification des risques
- [ ] Determiner la categorie de risque du systeme IA:
  - **Inacceptable**: scoring social, manipulation subliminale, exploitation de vulnerabilites
  - **Haut risque**: recrutement, credit, justice, sante, education, infrastructure critique
  - **Risque limite**: chatbots, deepfakes, systemes de recommandation
  - **Risque minimal**: spam filters, jeux, recherche

### Obligations haut risque (Annex IV)
- [ ] Systeme de gestion des risques (Art. 9)
- [ ] Gouvernance des donnees d'entrainement (Art. 10)
- [ ] Documentation technique (Art. 11)
- [ ] Journalisation automatique (Art. 12)
- [ ] Transparence et information (Art. 13)
- [ ] Surveillance humaine (Art. 14)
- [ ] Precision, robustesse, cybersecurite (Art. 15)

### Obligations risque limite
- [ ] Transparence: informer que l'utilisateur interagit avec une IA
- [ ] Deepfakes: marquer clairement le contenu genere par IA
- [ ] Chatbots: indiquer qu'il s'agit d'un systeme automatise

### ATUM Integration
- Utiliser `/atum-audit` pour verification d'integrite et conformite EU AI Act
- Agent ATUM pour audit detaille Annex IV

## CRA (Cyber Resilience Act)

- [ ] SBOM genere pour le produit (CycloneDX/SPDX)
- [ ] Processus de vulnerability disclosure documente
- [ ] Mises a jour de securite pendant minimum 5 ans
- [ ] Pas de mot de passe par defaut
- [ ] Secure-by-default configuration
- [ ] Marquage CE si vente dans l'UE

## RGPD Art. 22 — Decisions automatisees

### Droit a l'explication
- [ ] Informer l'utilisateur qu'une decision automatisee est prise
- [ ] Fournir une explication comprehensible de la logique
- [ ] Permettre de contester la decision
- [ ] Offrir une intervention humaine sur demande

### Donnees d'entrainement
- [ ] Base legale pour l'utilisation des donnees d'entrainement
- [ ] Pas de donnees personnelles sans consentement ou interet legitime
- [ ] Documentation de la provenance des donnees
- [ ] Evaluation des biais dans les donnees d'entrainement

### DPIA
- [ ] DPIA obligatoire pour profilage systematique
- [ ] DPIA obligatoire pour traitement a grande echelle de donnees sensibles
- [ ] Mesures de mitigation des risques documentes

## Implementation technique

### Transparence IA
```
Requirements:
- Badge "AI-generated" sur tout contenu genere
- Disclaimer "Powered by AI" sur les interfaces conversationnelles
- Explication simplifiee du fonctionnement du modele
- Lien vers la documentation technique pour les systemes haut risque
```

### Monitoring et audit
```
Logs a conserver:
- Inputs/outputs du modele (anonymises si donnees personnelles)
- Metriques de performance (precision, recall, F1)
- Decisions avec impact significatif
- Interventions humaines et overrides
```

### Biais et equite
```
Checklist:
- [ ] Audit de biais sur les donnees d'entrainement
- [ ] Tests de fairness sur les predictions (demographiques)
- [ ] Monitoring continu des metriques d'equite en production
- [ ] Processus de remediation si biais detecte
```

## Tests

```bash
# SBOM generation
npx @cyclonedx/cyclonedx-npm --output-file sbom.json

# ATUM audit
/atum-audit

# Verifier transparence
# Verifier que chaque interface IA affiche clairement qu'elle est basee sur l'IA
```
