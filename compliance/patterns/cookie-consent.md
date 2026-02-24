# Cookie Consent Banner — Implementation Patterns

## Architecture

```
┌─────────────────────────────────────────────┐
│           Cookie Consent Banner              │
│  ┌─────────┐  ┌─────────┐  ┌─────────────┐ │
│  │ Accepter │  │ Refuser │  │ Personnaliser│ │
│  └─────────┘  └─────────┘  └─────────────┘ │
└─────────────────────────────────────────────┘
         │              │              │
         ▼              ▼              ▼
┌─────────────────────────────────────────────┐
│         Consent Storage (Cookie/DB)          │
│  { timestamp, version, choices: {...} }      │
└─────────────────────────────────────────────┘
         │
         ▼
┌─────────────────────────────────────────────┐
│           Tag Manager / Script Loader        │
│  Charge/bloque scripts selon le consentement │
└─────────────────────────────────────────────┘
```

## Principes (ePrivacy + RGPD + CNIL)

1. **Bloquant**: aucun cookie non-essentiel avant consentement
2. **Equilibre**: refuser aussi simple qu'accepter (meme niveau visuel)
3. **Granulaire**: choix par categorie (pas de "tout ou rien" seul)
4. **Revocable**: l'utilisateur peut changer d'avis a tout moment
5. **Prouve**: stocker la preuve du consentement

## Categories de cookies

| Categorie | Consentement | Exemples |
|-----------|-------------|----------|
| Necessaire | Non requis | Session, CSRF, panier, langue |
| Analytics | Requis | Google Analytics, Plausible, Matomo |
| Fonctionnel | Recommande | Preferences UI, chat widget |
| Marketing | Requis | Google Ads, Facebook Pixel, retargeting |

## Pattern React/Next.js

```tsx
// components/cookie-consent.tsx
"use client";

import { useState, useEffect } from "react";

type ConsentChoices = {
  necessary: true; // toujours true
  analytics: boolean;
  functional: boolean;
  marketing: boolean;
};

type ConsentRecord = {
  choices: ConsentChoices;
  timestamp: string;
  version: string;
};

const CONSENT_KEY = "cookie-consent";
const CONSENT_VERSION = "1.0";

export function CookieConsent() {
  const [show, setShow] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (!stored) setShow(true);
  }, []);

  function saveConsent(choices: ConsentChoices) {
    const record: ConsentRecord = {
      choices,
      timestamp: new Date().toISOString(),
      version: CONSENT_VERSION,
    };
    localStorage.setItem(CONSENT_KEY, JSON.stringify(record));
    setShow(false);
    applyConsent(choices);
  }

  function acceptAll() {
    saveConsent({
      necessary: true,
      analytics: true,
      functional: true,
      marketing: true,
    });
  }

  function rejectAll() {
    saveConsent({
      necessary: true,
      analytics: false,
      functional: false,
      marketing: false,
    });
  }

  if (!show) return null;

  // Render banner with 3 equal buttons:
  // [Accepter tout] [Refuser tout] [Personnaliser]
  // If showDetails: render category toggles
}

function applyConsent(choices: ConsentChoices) {
  // Charger/bloquer les scripts selon le consentement
  if (choices.analytics) {
    // Charger Google Analytics, Plausible, etc.
  }
  if (choices.marketing) {
    // Charger Facebook Pixel, Google Ads, etc.
  }
}
```

## Pattern Vue 3

```vue
<!-- components/CookieConsent.vue -->
<script setup lang="ts">
import { ref, onMounted } from "vue";

interface ConsentChoices {
  necessary: true;
  analytics: boolean;
  functional: boolean;
  marketing: boolean;
}

const CONSENT_KEY = "cookie-consent";
const show = ref(false);

onMounted(() => {
  if (!localStorage.getItem(CONSENT_KEY)) {
    show.value = true;
  }
});

function saveConsent(choices: ConsentChoices) {
  localStorage.setItem(CONSENT_KEY, JSON.stringify({
    choices,
    timestamp: new Date().toISOString(),
    version: "1.0",
  }));
  show.value = false;
}
</script>
```

## GPC (Global Privacy Control)

```typescript
// utils/gpc.ts
export function isGPCEnabled(): boolean {
  if (typeof navigator !== "undefined") {
    return (navigator as any).globalPrivacyControl === true;
  }
  // Server-side: check Sec-GPC header
  return false;
}

// Si GPC active: traiter comme refus des cookies marketing
// et opt-out de la vente/partage (CCPA)
```

## Server-Side (Next.js Middleware)

```typescript
// middleware.ts
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const gpc = request.headers.get("Sec-GPC");
  if (gpc === "1") {
    // Respecter GPC: pas de cookies marketing
    const response = NextResponse.next();
    response.headers.set("X-GPC-Respected", "true");
    return response;
  }
}
```

## Stockage du consentement (preuve)

Pour la conformite RGPD, stocker cote serveur:
```json
{
  "user_id": "anonymous-hash",
  "consent_id": "uuid-v4",
  "timestamp": "2026-01-15T10:30:00Z",
  "version": "1.0",
  "choices": {
    "necessary": true,
    "analytics": true,
    "functional": false,
    "marketing": false
  },
  "ip_country": "FR",
  "user_agent_hash": "sha256...",
  "gpc_signal": false
}
```

## Checklist

- [ ] Banniere visible au premier chargement
- [ ] 3 boutons au meme niveau: Accepter / Refuser / Personnaliser
- [ ] Aucun cookie non-essentiel pose avant consentement
- [ ] Choix par categorie (pas seulement tout/rien)
- [ ] Preuve de consentement stockee
- [ ] Lien "Gerer les cookies" accessible en permanence (footer)
- [ ] GPC/DNT respecte
- [ ] Version du CMP trackee (re-consentement si changement)
- [ ] Lien vers la politique cookies (/cookies)
