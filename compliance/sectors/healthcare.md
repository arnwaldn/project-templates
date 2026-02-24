# Healthcare Compliance Checklist

## Reglementations applicables
- HIPAA (donnees de sante, marche US)
- RGPD Art. 9 (donnees sensibles, marche EU)
- SOC 2 (hebergement, sous-traitance)

---

## HIPAA — Technical Safeguards

### Access Control (164.312(a))
- [ ] Unique user identification: chaque utilisateur a un ID unique
- [ ] Emergency access procedure documentee
- [ ] Automatic logoff apres inactivite (15 min recommande)
- [ ] Encryption: AES-256 pour donnees at rest

### Audit Controls (164.312(b))
- [ ] Audit logs pour tout acces aux PHI (qui, quoi, quand)
- [ ] Logs immutables (append-only, centralises)
- [ ] Retention des logs: minimum 6 ans
- [ ] Revue des logs reguliere

### Integrity (164.312(c))
- [ ] Hash/signature des donnees PHI
- [ ] Detection de modification non autorisee
- [ ] Backup avec verification d'integrite

### Transmission Security (164.312(e))
- [ ] TLS 1.2+ pour toute transmission de PHI
- [ ] End-to-end encryption pour messaging contenant PHI
- [ ] VPN ou tunnel chiffre pour acces distant

### 18 identifiants PHI
Verifier qu'aucun des suivants n'est expose dans les logs, analytics ou interfaces publiques:
1. Noms
2. Coordonnees geographiques (< etat)
3. Dates (sauf annee) liees a un individu
4. Numeros de telephone
5. Numeros de fax
6. Adresses email
7. SSN (Social Security Number)
8. Numeros de dossier medical
9. Numeros de beneficiaire
10. Numeros de compte
11. Numeros de certificat/licence
12. Identifiants de vehicules (VIN)
13. Identifiants de dispositifs
14. URLs web
15. Adresses IP
16. Identifiants biometriques
17. Photos de face
18. Tout autre identifiant unique

### BAA (Business Associate Agreement)
- [ ] BAA signe avec chaque sous-traitant ayant acces aux PHI
- [ ] Cloud provider (AWS/GCP/Azure): BAA actif
- [ ] Analytics: pas de PHI envoye (ou BAA)
- [ ] Monitoring/logging: pas de PHI dans les logs visibles
- [ ] Support/helpdesk: BAA si acces possible aux PHI

### De-identification (Safe Harbor Method)
- [ ] Retirer les 18 identifiants = donnees hors scope HIPAA
- [ ] Documenter la methode de de-identification utilisee

## RGPD Art. 9 — Donnees de sante

- [ ] Consentement explicite pour traitement de donnees de sante
- [ ] DPIA obligatoire (Art. 35)
- [ ] Chiffrement et pseudonymisation
- [ ] Acces restreint au personnel autorise
- [ ] Retention limitee et justifiee

## SOC 2 — Controles cles sante

- [ ] Environnement de production isole
- [ ] Penetration testing annuel
- [ ] Incident response plan teste
- [ ] Employee training sur HIPAA
- [ ] Vendor risk assessment

## Tests

```bash
# Verifier absence de PHI dans les logs
grep -r "SSN\|social.security\|date.of.birth" src/ --include="*.ts" --include="*.js"

# Chiffrement
# Verifier que la DB est configuree avec encryption at rest
# Verifier TLS sur tous les endpoints

# Audit
npm audit --audit-level=high
```

## Penalites

| Niveau | Montant par violation | Max annuel |
|--------|----------------------|------------|
| Unknowing | $100 - $50,000 | $25,000 |
| Reasonable cause | $1,000 - $50,000 | $100,000 |
| Willful neglect (corrected) | $10,000 - $50,000 | $250,000 |
| Willful neglect (not corrected) | $50,000 | $1,500,000 |
