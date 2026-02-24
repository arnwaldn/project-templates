# SOC 2 — Checklist technique

> Service Organization Control 2 (AICPA Trust Service Criteria)

## Pas de penalite legale directe, mais requis par les clients enterprise et les investisseurs

---

## Trust Service Criteria

### CC — Common Criteria (Security)

#### CC1: Control Environment
- [ ] Engagement de la direction envers l'integrite et l'ethique
- [ ] Independance du conseil d'administration
- [ ] Structure organisationnelle et autorites definies
- [ ] Politique d'attraction et retention des talents

#### CC2: Communication and Information
- [ ] Politiques de securite documentees et communiquees
- [ ] Processus de reporting des incidents
- [ ] Communication externe sur les engagements de securite

#### CC3: Risk Assessment
- [ ] Identification des risques (annuelle minimum)
- [ ] Evaluation de l'impact et de la probabilite
- [ ] Identification des risques de fraude
- [ ] Gestion du changement (impact sur les risques)

#### CC4: Monitoring Activities
- [ ] Evaluations continues et ponctuelles
- [ ] Communication des deficiences
- [ ] Remediation des deficiences

#### CC5: Control Activities
- [ ] Controles techniques implementes
- [ ] Controles lies aux technologies deployees
- [ ] Politiques et procedures documentees

#### CC6: Logical and Physical Access
- [ ] Controles d'acces logique (RBAC, MFA)
- [ ] Gestion des identites (provisioning/deprovisioning)
- [ ] Revue des acces periodique (trimestrielle)
- [ ] Chiffrement des donnees (at rest + in transit)
- [ ] Controles d'acces physique aux datacenters

#### CC7: System Operations
- [ ] Detection des anomalies et incidents
- [ ] Monitoring de l'infrastructure
- [ ] Processus de gestion des incidents
- [ ] Reponse et remediation documentees
- [ ] Recovery procedures testees

#### CC8: Change Management
- [ ] Processus de gestion des changements
- [ ] Tests avant mise en production
- [ ] Approbation des changements
- [ ] Rollback procedures

#### CC9: Risk Mitigation
- [ ] Identification et gestion des risques lies aux vendors
- [ ] Revue des controles des sous-traitants
- [ ] Assurance ou transfert de risque

### A — Availability
- [ ] SLA defini et mesure (uptime target: 99.9%+)
- [ ] Monitoring temps reel (latence, erreurs, saturation)
- [ ] Alerting automatique (PagerDuty, Opsgenie)
- [ ] Disaster Recovery plan documente
- [ ] DR teste au moins annuellement
- [ ] RPO et RTO definis et mesures
- [ ] Backup strategy: automatique, chiffree, testee
- [ ] Capacity planning documente

### PI — Processing Integrity
- [ ] Input validation sur toutes les entrees
- [ ] Output verification pour les traitements critiques
- [ ] Error handling: pas de perte silencieuse de donnees
- [ ] Reconciliation automatisee pour les traitements batch
- [ ] QA process documente

### C — Confidentiality
- [ ] Classification des donnees (public, internal, confidential, restricted)
- [ ] Chiffrement selon la classification
- [ ] Data retention policy
- [ ] Destruction securisee des donnees
- [ ] NDA avec employes et contractors
- [ ] Access controls alignes avec la classification

### P — Privacy
- [ ] Notice (politique de confidentialite)
- [ ] Choice and consent (choix des utilisateurs)
- [ ] Collection (limitee au necessaire)
- [ ] Use, retention, and disposal (politiques documentees)
- [ ] Access (droits des personnes)
- [ ] Disclosure (partage avec tiers)
- [ ] Security (protection des donnees personnelles)
- [ ] Quality (exactitude des donnees)
- [ ] Monitoring and enforcement (conformite continue)

## Implementation technique

### Logging et monitoring
```
Requirements:
- Structured JSON logs (who, what, when, where, result)
- Centralized logging (ELK, Datadog, CloudWatch)
- Log retention: minimum 1 an
- Immutabilite: logs non modifiables
- Alerting: anomalies detectees en < 5 min
```

### Access control
```
Requirements:
- SSO (SAML/OIDC) pour tous les services
- MFA obligatoire
- RBAC avec principe du moindre privilege
- Revue trimestrielle des acces
- Deprovisioning automatique (offboarding)
- Session timeout: 30 min d'inactivite
```

### Change management
```
Process:
1. Feature branch + code review
2. Tests automatises (unit, integration, e2e)
3. Staging deployment + QA
4. Approval (PR review)
5. Production deployment (CI/CD)
6. Post-deployment verification
7. Rollback if needed
```

## Evidence Collection

Pour l'audit SOC 2, preparer:
- [ ] Screenshots des configurations de securite
- [ ] Exports des logs d'acces
- [ ] Resultats des tests de penetration
- [ ] Rapports de vulnerability scanning
- [ ] Documentation des politiques
- [ ] Preuves de formation des employes
- [ ] Rapports d'uptime
- [ ] DR test results
