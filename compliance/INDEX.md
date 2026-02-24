# Compliance Templates Index

Checklists et patterns de conformite reglementaire pour projets commerciaux.

## Secteurs

| Fichier | Secteur | Reglementations couvertes |
|---------|---------|--------------------------|
| [ecommerce.md](sectors/ecommerce.md) | E-commerce | RGPD, ePrivacy, PSD2, PCI-DSS, Consumer Rights, EAA |
| [saas.md](sectors/saas.md) | SaaS/Platform | RGPD, SOC 2, EAA, NIS2, DSA |
| [healthcare.md](sectors/healthcare.md) | Sante | HIPAA, RGPD Art. 9, SOC 2 |
| [finance.md](sectors/finance.md) | Finance | PCI-DSS, PSD2/3, SOX, MiFID II, RGPD |
| [children.md](sectors/children.md) | Contenu enfants | COPPA, RGPD Art. 8 |
| [ai-ml.md](sectors/ai-ml.md) | IA/ML | EU AI Act, CRA, RGPD Art. 22 |
| [marketplace.md](sectors/marketplace.md) | Marketplace | DSA/DMA, RGPD, ePrivacy, Consumer Rights |

## Reglementations

| Fichier | Regulation | Scope |
|---------|-----------|-------|
| [gdpr-checklist.md](regulations/gdpr-checklist.md) | RGPD | Protection des donnees (EU) |
| [pci-dss-4-checklist.md](regulations/pci-dss-4-checklist.md) | PCI-DSS 4.0 | Donnees de paiement |
| [hipaa-checklist.md](regulations/hipaa-checklist.md) | HIPAA | Donnees de sante (US) |
| [ccpa-cpra-checklist.md](regulations/ccpa-cpra-checklist.md) | CCPA/CPRA | Privacy (Californie) |
| [nis2-cra-checklist.md](regulations/nis2-cra-checklist.md) | NIS2 + CRA | Cybersecurite (EU) |
| [soc2-checklist.md](regulations/soc2-checklist.md) | SOC 2 | Trust Service Criteria |
| [eaa-wcag22-checklist.md](regulations/eaa-wcag22-checklist.md) | EAA + WCAG 2.2 | Accessibilite (EU) |
| [owasp-2025-checklist.md](regulations/owasp-2025-checklist.md) | OWASP Top 10 2025 | Securite applicative |

## Patterns d'implementation

| Fichier | Pattern | Usage |
|---------|---------|-------|
| [cookie-consent.md](patterns/cookie-consent.md) | Cookie Consent Banner | Multi-framework |
| [consent-management.md](patterns/consent-management.md) | Consent Management | Stockage + API consentement |
| [data-subject-requests.md](patterns/data-subject-requests.md) | DSR API | RGPD droits des personnes |

## Usage

```bash
# Depuis Claude Code
/compliance audit                  # Scan complet
/compliance profile                # Detecter secteur + reglementations
/compliance sector:ecommerce       # Audit sectoriel
/compliance checklist gdpr         # Checklist interactive
```
