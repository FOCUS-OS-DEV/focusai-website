---
name: seo-check
description: Audit page for SEO optimization including meta tags, OpenGraph, structured data, and Core Web Vitals.
disable-model-invocation: true
---

# SEO Check Skill

Audit the specified page or component for SEO best practices:

## Meta Tags
1. **Title tag**: 50-60 characters, includes primary keyword
2. **Meta description**: 150-160 characters, compelling, includes CTA
3. **Canonical URL**: Properly set
4. **Language**: `lang="he"` for Hebrew pages

## OpenGraph & Social
1. `og:title`, `og:description`, `og:image`
2. `og:type`, `og:url`, `og:locale`
3. Twitter card meta tags
4. Image dimensions (1200x630 for OG)

## Structured Data (JSON-LD)
1. Organization schema
2. LocalBusiness schema (for Focus AI)
3. Course schema (for Academy pages)
4. BreadcrumbList
5. FAQPage where applicable

## Technical SEO
1. Proper heading hierarchy (H1 > H2 > H3)
2. Alt text for all images
3. Internal linking
4. External links with `rel="noopener noreferrer"`
5. Mobile-friendly viewport

## Hebrew-Specific SEO
1. Hebrew keywords in meta tags
2. RTL direction properly set
3. hreflang tags if multilingual

## Core Web Vitals Impact
1. LCP: Largest Contentful Paint (images, fonts)
2. FID/INP: Interaction responsiveness
3. CLS: Cumulative Layout Shift (reserve space)

## Output
Generate:
- SEO score (0-100)
- Missing elements checklist
- Suggested improvements
- Example code snippets for fixes
