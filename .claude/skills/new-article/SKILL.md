---
name: new-article
description: Create a new blog article for Focus AI with full frontmatter and standards
user-invocable: true
allowed-tools: Read, Write, Edit, Glob, Grep, Bash, WebSearch, WebFetch
---

# New Blog Article — Focus AI

## 1. Create File
Location: `focusai-website/src/content/ai-news/<slug>.md`
Slug: lowercase, hyphens, English

## 2. Frontmatter Template
```yaml
---
title: "כותרת מלאה בעברית"
description: "תיאור 50-160 תווים — ממוקד SEO"
pubDate: YYYY-MM-DD
heroImage: "https://res.cloudinary.com/dfudxxzlj/image/upload/q_auto,f_auto,w_1200/v.../image.jpg"
author: "Focus AI"
category: "news"
tags: ["relevant", "tags"]
ctaType: "botcamp"
---
```

## 3. Content Structure
- Opening hook (2-3 sentences)
- 2-3 main sections with ## headers
- Practical tips or examples
- Summary with natural CTA
- 800-1500 words in Hebrew
- Use "כתבות" not "מאמרים"

## 4. After Creation
- [ ] Frontmatter valid per content.config.ts schema?
- [ ] `npm run build` — article at /ai-news/<slug>?
- [ ] Update CLAUDE.md blog articles table
