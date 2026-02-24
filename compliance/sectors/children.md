# Children's Content Compliance Checklist

## Reglementations applicables
- COPPA (Children's Online Privacy Protection Act, US, < 13 ans)
- RGPD Art. 8 (consentement parental, EU, < 16 ans ou < 13 selon Etat membre)
- DSA (protection des mineurs)

---

## COPPA (marche US)

### Consentement parental
- [ ] Age gate a l'inscription (date de naissance ou auto-declaration)
- [ ] Consentement parental verifiable AVANT toute collecte de donnees
- [ ] Methodes acceptees: email + confirmation, carte de credit, videocall, ID verification
- [ ] Notification claire aux parents: quelles donnees, pourquoi, avec qui

### Collecte de donnees
- [ ] Minimisation: UNIQUEMENT les donnees necessaires au service
- [ ] Pas de conditionnement: ne pas exiger plus de donnees que necessaire
- [ ] Pas de publicite comportementale pour les enfants
- [ ] Pas de geolocalisation precise

### Droits parentaux
- [ ] Dashboard parental pour voir les donnees collectees
- [ ] Suppression des donnees sur demande parentale
- [ ] Retrait du consentement a tout moment
- [ ] Contact DPO/responsable facilement accessible

### Design
- [ ] Interface adaptee a l'age (pas de dark patterns)
- [ ] Pas d'incentives a partager des donnees personnelles
- [ ] Pas de liens vers du contenu non adapte
- [ ] Chat/messaging: moderation ou desactive

## RGPD Art. 8 (marche EU)

### Seuils d'age
- [ ] Seuil par defaut: 16 ans (sauf si Etat membre a baisse a 13)
- [ ] France: 15 ans
- [ ] Allemagne: 16 ans
- [ ] Espagne: 14 ans
- [ ] Pays-Bas: 16 ans
- [ ] Royaume-Uni (UK GDPR): 13 ans

### Consentement
- [ ] Consentement du titulaire de l'autorite parentale pour mineurs sous le seuil
- [ ] Efforts raisonnables pour verifier le consentement parental
- [ ] Langage adapte a l'age pour les explications de privacy

### Droits renforcees
- [ ] Droit a l'oubli facilite pour donnees collectees pendant la minorite
- [ ] DPIA obligatoire pour traitement de donnees de mineurs a grande echelle

## DSA — Protection des mineurs

- [ ] Pas de publicite ciblee basee sur le profilage pour les mineurs
- [ ] Pas de dark patterns ciblant les mineurs
- [ ] Evaluation d'impact sur les mineurs si plateforme en ligne

## Implementation technique

### Age Gate
```
Flux:
1. Demander date de naissance (ou "as-tu plus de X ans?")
2. Si mineur: rediriger vers flux de consentement parental
3. Si adulte: flux standard
4. Stocker le statut d'age (pas la date de naissance si pas necessaire)
```

### Consentement parental
```
Flux:
1. Enfant fournit email du parent
2. Email envoye au parent avec lien de verification
3. Parent clique et confirme son identite (email + confirmation)
4. Consentement enregistre avec preuve
5. Enfant peut acceder au service
```

### Donnees a NE PAS collecter
- Geolocalisation precise
- Donnees biometriques
- Contacts/carnet d'adresses
- Photos/videos sans consentement explicite
- Historique de navigation detaille

## Tests

```bash
# Verifier absence de tracking non-consenti
# Ouvrir l'app en mode "enfant", verifier qu'aucun cookie analytics/marketing n'est pose

# Verifier le flux de consentement parental end-to-end
# Tester les scenarios: parent refuse, parent accepte, parent se retracte

# Verifier la suppression
# Demander suppression depuis le dashboard parental, verifier que les donnees sont effacees
```

## Penalites

| Regulation | Penalite max |
|-----------|-------------|
| COPPA | $50,120 par violation (FTC) |
| RGPD | 20M EUR ou 4% CA mondial |
