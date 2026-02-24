# Marketplace Compliance Checklist

## Reglementations applicables
- DSA/DMA (Digital Services Act / Digital Markets Act)
- RGPD (donnees vendeurs + acheteurs)
- ePrivacy (cookies, tracking)
- Consumer Rights Directive (protection des acheteurs)
- EAA (accessibilite)
- PSD2 (si paiement integre)

---

## DSA (Digital Services Act)

### Moderation de contenu
- [ ] Systeme de signalement (notice-and-action) accessible
- [ ] Delais de traitement definis et respectes
- [ ] Possibilite de recours pour les utilisateurs
- [ ] Politique de moderation publique et transparente
- [ ] Compteurs d'actions de moderation publies annuellement

### Transparence publicitaire
- [ ] Publicites clairement identifiees ("Sponsorise", "Publicite")
- [ ] Parametres de ciblage visibles par l'utilisateur
- [ ] Archive publique des publicites diffusees

### Recommandation algorithmique
- [ ] Option de desactiver la personnalisation
- [ ] Explication des criteres de classement principaux
- [ ] Transparence sur les criteres de mise en avant

### Vendeurs (Know Your Business Customer)
- [ ] Verification de l'identite des vendeurs professionnels
- [ ] Affichage des coordonnees du vendeur sur chaque listing
- [ ] Informations sur la garantie legale de conformite

## DMA (si gatekeeper)
- [ ] Interoperabilite des services de messagerie
- [ ] Portabilite des donnees en continu
- [ ] Pas d'auto-preference dans les resultats
- [ ] Pas de bundling anti-competitif

## RGPD

### Double responsabilite (vendeurs + acheteurs)
- [ ] Role clarifie: responsable de traitement vs sous-traitant
- [ ] DPA avec les vendeurs si sous-traitance
- [ ] Politique de confidentialite couvrant les deux populations
- [ ] API DSR pour vendeurs ET acheteurs

### Donnees specifiques marketplace
- [ ] Donnees de transactions conservees selon obligations legales
- [ ] Donnees de reviews: droit de suppression vs integrite de la plateforme
- [ ] Donnees de messaging interne: retention limitee

## ePrivacy

- [ ] Banniere cookie conforme (3 options, bloquante)
- [ ] Tracking cross-vendeurs: consentement explicite
- [ ] Emails marketing: opt-in pour chaque vendeur

## Consumer Rights

- [ ] Distinction claire vendeur pro vs particulier
- [ ] Droit de retractation 14 jours pour vendeurs pro
- [ ] Garantie legale de conformite affichee (2 ans EU)
- [ ] Prix TTC avec frais de livraison avant paiement
- [ ] Processus de reclamation et resolution des litiges

## EAA + WCAG 2.2 AA

- [ ] Interface de recherche et filtres accessibles au clavier
- [ ] Pages produits accessibles (images alt, structuration)
- [ ] Processus d'achat complet accessible
- [ ] Target size 24px minimum
- [ ] Focus visible

## PSD2 (si paiement integre)

- [ ] SCA pour paiements en ligne
- [ ] Escrow/sequestre conforme
- [ ] Transparence sur les frais de transaction

## Tests

```bash
# Verifier la conformite accessibilite
npx pa11y http://localhost:3000/marketplace
npx pa11y http://localhost:3000/product/1
npx pa11y http://localhost:3000/checkout

# Security
npm audit --audit-level=high

# Verifier les pages legales
curl -s http://localhost:3000/privacy | head -1
curl -s http://localhost:3000/terms | head -1
curl -s http://localhost:3000/legal | head -1
```
