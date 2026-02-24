# RGPD (GDPR) — Checklist technique detaillee

> Reglement (UE) 2016/679 — Protection des donnees personnelles

## Penalites: jusqu'a 20M EUR ou 4% du CA mondial annuel

---

## 1. Bases legales (Art. 6)

- [ ] Chaque traitement a une base legale identifiee et documentee
- [ ] Consentement: libre, specifique, eclaire, univoque (opt-in actif)
- [ ] Consentement retirable aussi facilement qu'il est donne
- [ ] Execution d'un contrat: strictement necessaire a la prestation
- [ ] Interet legitime: balance des interets documentee (LIA)
- [ ] Obligation legale: reference au texte legal

## 2. Information des personnes (Art. 13-14)

- [ ] Politique de confidentialite accessible (1 clic max)
- [ ] Identite du responsable de traitement
- [ ] Coordonnees du DPO (si applicable)
- [ ] Finalites de chaque traitement
- [ ] Base legale pour chaque traitement
- [ ] Destinataires ou categories de destinataires
- [ ] Transferts hors UE et garanties
- [ ] Durees de conservation
- [ ] Droits des personnes (acces, rectification, effacement, portabilite, opposition)
- [ ] Droit de reclamation aupres de l'autorite de controle

## 3. Droits des personnes (Art. 12-22)

### API DSR (Data Subject Request)
- [ ] `GET /api/gdpr/access` — Export des donnees (JSON + CSV)
- [ ] `POST /api/gdpr/delete` — Effacement (Art. 17)
- [ ] `POST /api/gdpr/rectify` — Rectification (Art. 16)
- [ ] `POST /api/gdpr/portability` — Export portable (Art. 20)
- [ ] `POST /api/gdpr/restrict` — Limitation (Art. 18)
- [ ] `POST /api/gdpr/object` — Opposition (Art. 21)

### Implementation
- [ ] Authentification forte avant toute action DSR
- [ ] Rate limiting sur les endpoints DSR
- [ ] Audit log de chaque demande DSR
- [ ] Delai de reponse: 30 jours (extensible 60 si justifie)
- [ ] Verification d'identite du demandeur
- [ ] Notification aux sous-traitants en cas d'effacement

## 4. Privacy by Design & Default (Art. 25)

- [ ] Minimisation des donnees: ne collecter que le necessaire
- [ ] Pseudonymisation quand possible
- [ ] Chiffrement at rest et in transit
- [ ] Parametres par defaut les plus protecteurs
- [ ] Granularite du consentement (pas de bundling)

## 5. Registre des traitements (Art. 30)

Document requis:
- [ ] Nom et coordonnees du responsable
- [ ] Finalites du traitement
- [ ] Categories de personnes et de donnees
- [ ] Categories de destinataires
- [ ] Transferts vers pays tiers
- [ ] Delais d'effacement
- [ ] Mesures de securite

## 6. DPIA (Art. 35)

Obligatoire si:
- Profilage systematique
- Traitement a grande echelle de donnees sensibles
- Surveillance systematique d'une zone publique
- Nouveaux usages de technologies

- [ ] DPIA realisee pour les traitements a risque eleve
- [ ] Mesures de mitigation implementees
- [ ] Consultation de l'autorite si risque residuel eleve

## 7. Sous-traitants (Art. 28)

- [ ] DPA (Data Processing Agreement) avec chaque sous-traitant
- [ ] Liste des sous-traitants documentee et accessible
- [ ] Notification aux personnes en cas de changement de sous-traitant
- [ ] Audit annuel des sous-traitants critiques

## 8. Transferts internationaux (Art. 44-49)

- [ ] Decision d'adequation (pays reconnu par la Commission)
- [ ] Clauses contractuelles types (SCC) a defaut
- [ ] Evaluation de l'impact du transfert (TIA)
- [ ] Mesures supplementaires si necessaire

## 9. Violation de donnees (Art. 33-34)

- [ ] Processus de detection des violations
- [ ] Notification autorite de controle sous 72h
- [ ] Notification des personnes concernees sans delai injustifie
- [ ] Documentation de chaque violation (registre des violations)
- [ ] Template de notification pre-redige

## 10. DPO (Art. 37-39)

Obligatoire si:
- Autorite ou organisme public
- Suivi regulier et systematique a grande echelle
- Traitement a grande echelle de donnees sensibles

- [ ] DPO designe si obligatoire
- [ ] Coordonnees DPO publiees et communiquees a l'autorite
