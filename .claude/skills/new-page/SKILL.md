---
name: new-page
description: Create a new page for the Focus AI website with full standards compliance
user-invocable: true
allowed-tools: Read, Write, Edit, Glob, Grep, Bash
---

# New Page — Focus AI

## 1. Determine Page Type
- **Standard page**: Uses BaseLayout (most pages)
- **Standalone campaign page**: Own HTML (landing pages, webinars)
- **Blog article**: Use `/new-article` skill instead

## 2. Create the File
Location: `focusai-website/src/pages/<name>.astro`

### BaseLayout template:
```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';
---

<BaseLayout title="Page Title | Focus AI" description="Hebrew description 50-160 chars">
  <Header slot="header" />
  <!-- Content -->
  <Footer />
</BaseLayout>
```

### Non-marketing pages: add `noindex={true}` to BaseLayout.

## 3. Post-Creation Checklist
- [ ] SEO: unique title + description?
- [ ] Sitemap: exclude in astro.config.mjs if needed?
- [ ] Navigation: update Header.astro / Footer.astro?
- [ ] Forms: 2 consent checkboxes (privacy required, marketing optional)?
- [ ] Forms: webhook includes marketing_consent?
- [ ] Images: Cloudinary with q_auto,f_auto?
- [ ] Analytics: standalone pages have Analytics + AnalyticsBody?
- [ ] Links: all internal links valid?
- [ ] CLAUDE.md: Page Routes table updated?
- [ ] Build: `npm run build` passes?
