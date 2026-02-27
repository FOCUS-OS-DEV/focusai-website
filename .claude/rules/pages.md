---
paths:
  - "focusai-website/src/pages/**/*.astro"
---

# Page Standards — Focus AI

## Layout
- Use `BaseLayout` from `src/layouts/BaseLayout.astro` with `title` and `description` props
- Exception: standalone campaign pages (ai-fullstack, webinar-*, content-automation-*) — own `<!DOCTYPE html>` but MUST include Analytics

## SEO (marketing pages)
- `title` — unique, descriptive, ends with "| Focus AI"
- `description` — 50-160 chars, Hebrew, relevant keywords
- OG tags auto-provided by BaseLayout

## Non-marketing pages
- Add `noindex={true}` to BaseLayout for: privacy-policy, terms, 404, thank-you, unsubscribe

## Analytics
- BaseLayout pages: automatic
- Standalone pages: MUST import `Analytics.astro` + `AnalyticsBody.astro`

## Forms — Israeli Privacy Law (Section 30A)
- TWO separate consent checkboxes: privacy (required) + marketing (optional, NOT required)
- Webhook MUST include `marketing_consent` field
- Unsubscribe links → /unsubscribe-any

## Images
- ALL on Cloudinary with `q_auto,f_auto`
- `loading="lazy" decoding="async"` on non-LCP images

## After Creating a Page
- Update Header.astro / Footer.astro navigation if needed
- Update CLAUDE.md Page Routes table
- Verify with `npm run build`
