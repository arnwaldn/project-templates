# E-commerce Compliance Checklist

## Reglementations applicables
- RGPD (donnees clients, commandes, analytics)
- ePrivacy (cookies, tracking, marketing)
- PCI-DSS 4.0 (paiements par carte)
- PSD2 (authentification forte, Open Banking)
- Consumer Rights Directive (retractation, transparence prix)
- EAA + WCAG 2.2 AA (accessibilite, marche EU)

---

## RGPD — Donnees clients

- [ ] Politique de confidentialite accessible depuis toutes les pages
- [ ] Base legale documentee pour chaque traitement (consentement, contrat, interet legitime)
- [ ] Consentement marketing separe du consentement contractuel
- [ ] API DSR fonctionnelle (acces, suppression, export, rectification)
- [ ] Registre des traitements (Art. 30) documente
- [ ] Retention policy: donnees supprimees apres delai defini
- [ ] Sous-traitants listes avec DPA signe (Stripe, analytics, email, CDN)
- [ ] Transferts hors UE couverts par SCC ou decision d'adequation

## ePrivacy — Cookies et tracking

- [ ] Banniere cookie bloquante (aucun cookie non-essentiel avant consentement)
- [ ] 3 options visibles: Accepter / Refuser / Personnaliser
- [ ] Categories: necessaire, analytics, marketing, fonctionnel
- [ ] GPC/DNT signal respecte comme opt-out
- [ ] Preuve de consentement stockee (timestamp, version, choix)
- [ ] Politique cookies dediee (/cookies)
- [ ] Audit regulier des cookies (liste, duree, finalite)

## PCI-DSS 4.0 — Paiements

- [ ] Delegation a un PSP (Stripe Elements/Checkout) = SAQ A
- [ ] JAMAIS de PAN stocke en clair cote serveur
- [ ] CSP strict sur pages de paiement: `script-src 'self' js.stripe.com`
- [ ] Inventaire des scripts tiers sur pages checkout
- [ ] TLS 1.2+ pour toute transmission
- [ ] WAF devant endpoints de paiement
- [ ] Monitoring des modifications sur pages paiement

## PSD2 — Authentification forte

- [ ] SCA (3D Secure 2) active pour paiements > seuils
- [ ] Stripe PaymentIntents API avec `payment_method_options.card.request_three_d_secure`
- [ ] Exemptions SCA correctement configurees (low value, recurring, trusted)

## Consumer Rights Directive

- [ ] Droit de retractation 14 jours clairement affiche
- [ ] Bouton d'annulation d'abonnement visible et simple
- [ ] Prix TTC affiche avec details (TVA, frais livraison)
- [ ] Recapitulatif de commande complet avant paiement final
- [ ] Bouton de paiement libelle "Commander avec obligation de paiement"
- [ ] Email de confirmation post-achat avec details + droit retractation
- [ ] Mentions legales accessibles (/legal)
- [ ] CGV accessibles (/terms)

## EAA + WCAG 2.2 AA

- [ ] Navigation clavier complete (catalogue, panier, checkout)
- [ ] Contraste 4.5:1 sur tout le texte
- [ ] Target size 24px minimum sur boutons
- [ ] Alt text sur images produits
- [ ] Formulaires avec labels, messages d'erreur, aria-invalid
- [ ] Focus visible et non obscurci
- [ ] Skip link present
- [ ] Compatible lecteurs d'ecran (NVDA, VoiceOver)

## Tests a executer

```bash
# Accessibilite
npx pa11y http://localhost:3000
npx lighthouse http://localhost:3000 --view

# Securite
npm audit --audit-level=high
npx snyk test

# Cookies
# Verifier manuellement: ouvrir en navigation privee, refuser cookies, verifier qu'aucun cookie non-essentiel n'est pose
```

## Pages requises

| Page | Contenu |
|------|---------|
| `/privacy` | Politique de confidentialite RGPD |
| `/terms` | Conditions generales de vente |
| `/cookies` | Politique cookies |
| `/legal` | Mentions legales |
| `/refund` | Politique de retractation/remboursement |
