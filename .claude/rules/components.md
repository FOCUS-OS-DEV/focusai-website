---
paths:
  - "focusai-website/src/components/**/*.astro"
  - "focusai-website/src/components/**/*.tsx"
---

# Component Standards — Focus AI

## Contact Information
- NEVER hardcode phone/email/WhatsApp
- ALWAYS use `import { siteConfig } from '../data/config'`

## Design
- Glass cards: `bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-2xl`
- Accent: #a855f7 (purple), Background: #0a0a0f
- Font: Rubik

## Code Quality
- No `console.log` / `console.error` in production
- Prefer Astro over React — React only for client interactivity
- Use `client:visible` or `client:idle`, NOT `client:load`
