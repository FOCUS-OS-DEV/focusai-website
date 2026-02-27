---
name: audit
description: Run a comprehensive Focus AI website audit (SEO, links, performance, compliance)
user-invocable: true
allowed-tools: Read, Glob, Grep, Bash, WebFetch
---

# Site Audit — Focus AI

Run ALL checks and report findings:

## 1. Broken Internal Links
Scan dist/ HTML files for `href="/..."` — verify each target exists in dist/.

## 2. SEO
For each marketing page (no noindex):
- Unique meta description (50-160 chars)?
- Unique title?
- OG tags present?

## 3. Schema.org
- Organization + WebSite schemas on all BaseLayout pages?
- No "#" placeholder values in sameAs?

## 4. Images
- All `<img>` using Cloudinary with q_auto,f_auto?
- All have alt attributes?

## 5. Analytics
- Standalone pages have Analytics + AnalyticsBody?

## 6. Privacy Compliance
- Forms have 2 consent checkboxes?
- Marketing checkbox NOT required?
- Webhooks include marketing_consent?

## 7. Report Format
```
CRITICAL: [issues that break functionality/compliance]
WARNING: [should fix soon]
INFO: [nice to have improvements]
```
