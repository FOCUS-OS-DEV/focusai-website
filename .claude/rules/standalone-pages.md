---
paths:
  - "focusai-website/src/pages/ai-fullstack.astro"
  - "focusai-website/src/pages/webinar-*.astro"
  - "focusai-website/src/pages/content-automation-*.astro"
---

# Standalone Page Standards — Focus AI

These pages write their own `<!DOCTYPE html>` (campaign/landing pages).

## Required Elements
1. `<meta charset="UTF-8" />`
2. `<meta name="viewport" content="width=device-width, initial-scale=1.0" />`
3. `<meta name="description" content="..." />` — unique, Hebrew
4. `<meta name="robots" content="..." />` — noindex for thank-you/watch pages
5. `import Analytics` + `<Analytics />` before `</head>`
6. `import AnalyticsBody` + `<AnalyticsBody />` after `<body>`
7. Google Fonts preconnect
8. Link to /privacy-policy if page has a form
