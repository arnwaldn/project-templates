# EAA + WCAG 2.2 AA — Checklist technique

> European Accessibility Act (Directive 2019/882) — en vigueur 28 juin 2025
> WCAG 2.2 (W3C Recommendation, octobre 2023) — niveau AA

## Penalites EAA: definies par chaque Etat membre (sanctions effectives, proportionnees, dissuasives)

---

## EAA — Champ d'application

Services concernes:
- [ ] E-commerce et achats en ligne
- [ ] Services bancaires aux consommateurs
- [ ] Services de transport de passagers
- [ ] Services de telecommunications
- [ ] Acces aux medias audiovisuels
- [ ] E-books et logiciels de lecture
- [ ] Ordinateurs et systemes d'exploitation

### Obligation
- Conformite WCAG 2.2 niveau AA minimum
- Documentation de conformite (declaration d'accessibilite)
- Processus de retour d'information des utilisateurs

---

## WCAG 2.2 AA — Nouveaux criteres (delta vs 2.1)

### 2.4.11 Focus Not Obscured (Minimum) — AA
- [ ] Quand un element recoit le focus, il n'est pas entierement cache par d'autres elements
- [ ] Attention aux: sticky headers, modals, tooltips, popups
- [ ] Test: tabber a travers la page et verifier que le focus est toujours visible

### 2.4.12 Focus Not Obscured (Enhanced) — AAA (recommande)
- [ ] Le focus n'est jamais partiellement cache

### 2.5.7 Dragging Movements — AA
- [ ] Toute fonctionnalite drag-and-drop a une alternative single-pointer
- [ ] Exemples: sliders (+ boutons +/-), reorder lists (+ boutons up/down)
- [ ] Kanban boards: menu contextuel "Deplacer vers..."
- [ ] File upload: bouton classique en plus du drag-and-drop

### 2.5.8 Target Size (Minimum) — AA
- [ ] Zones interactives de **24x24px** minimum
- [ ] Ou espacement suffisant entre les cibles (pas de chevauchement)
- [ ] Exceptions: texte inline, elements du user-agent, essentiel a l'info
- [ ] Verifier: boutons, liens, checkboxes, radio buttons, toggles

### 3.2.6 Consistent Help — A
- [ ] Si un mecanisme d'aide existe, il est au meme endroit sur chaque page
- [ ] Exemples: lien "Contact", chatbot, FAQ
- [ ] Position consistante dans la navigation

### 3.3.7 Redundant Entry — A
- [ ] Ne pas redemander les memes informations dans un meme processus
- [ ] Si deja fourni dans une etape precedente: pre-remplir ou offrir selection
- [ ] Exceptions: securite (re-entrer mot de passe), contenu expire

### 3.3.8 Accessible Authentication (Minimum) — AA
- [ ] Pas de test de fonction cognitive pour s'authentifier
  - Pas de puzzle, pas de calcul, pas de memorisation
- [ ] Alternatives autorisees: password manager (copier-coller), biometrie, email magic link, OAuth
- [ ] CAPTCHA: proposer une alternative non-cognitive (audio, biometrie)

### 3.3.9 Accessible Authentication (Enhanced) — AAA (recommande)
- [ ] Pas de reconnaissance d'objet ou d'image pour s'authentifier

---

## WCAG 2.1 AA — Rappel des criteres cles

### Perceivable
- [ ] **1.1.1** Alt text sur toutes les images non-decoratives
- [ ] **1.2.x** Captions et audio description pour les medias
- [ ] **1.3.1** Information et structure transmises semantiquement (headings, lists, tables)
- [ ] **1.3.4** Orientation: pas de restriction portrait/paysage
- [ ] **1.3.5** Identify Input Purpose: autocomplete sur les champs de formulaire
- [ ] **1.4.1** Pas d'info transmise uniquement par la couleur
- [ ] **1.4.3** Contraste minimum 4.5:1 (texte normal) et 3:1 (grand texte)
- [ ] **1.4.4** Texte redimensionnable a 200% sans perte
- [ ] **1.4.10** Reflow a 320px sans scroll horizontal
- [ ] **1.4.11** Contraste non-texte 3:1 (bordures, icons, focus)

### Operable
- [ ] **2.1.1** Navigation clavier complete
- [ ] **2.1.2** Pas de piege clavier
- [ ] **2.4.1** Skip link (bypass block)
- [ ] **2.4.3** Ordre de focus logique
- [ ] **2.4.6** Headings et labels descriptifs
- [ ] **2.4.7** Focus visible
- [ ] **2.5.1** Pointer gestures: alternative single-pointer

### Understandable
- [ ] **3.1.1** Langue de la page definie (lang attribute)
- [ ] **3.1.2** Langue des parties definies si differente
- [ ] **3.2.1** On Focus: pas de changement de contexte
- [ ] **3.2.2** On Input: pas de changement de contexte inattendu
- [ ] **3.3.1** Identification des erreurs
- [ ] **3.3.2** Labels et instructions
- [ ] **3.3.3** Suggestion de correction
- [ ] **3.3.4** Prevention des erreurs (legal, finance, data)

### Robust
- [ ] **4.1.2** Nom, role, valeur des composants UI
- [ ] **4.1.3** Status messages via live regions

## Testing Tools

```bash
# Automated
npx pa11y http://localhost:3000         # Pa11y
npx lighthouse http://localhost:3000 --view  # Lighthouse

# axe-core (integration test)
pnpm add -D @axe-core/react jest-axe

# Manual testing
# - Navigation clavier complete (Tab, Shift+Tab, Enter, Escape)
# - Screen reader (NVDA Windows, VoiceOver macOS)
# - Zoom 200%
# - Responsive 320px
```

## Declaration d'accessibilite

Document requis (EAA):
- [ ] Niveau de conformite (WCAG 2.2 AA)
- [ ] Contenu non accessible et raisons
- [ ] Alternatives proposees
- [ ] Procedure de retour d'information
- [ ] Contact responsable accessibilite
- [ ] Date de la derniere evaluation
