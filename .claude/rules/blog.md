---
paths:
  - "focusai-website/src/content/**/*.md"
---

# Blog Article Standards — Focus AI

## Frontmatter (required unless noted)
```yaml
title: "כותרת בעברית"
description: "תיאור 50-160 תווים"
pubDate: 2026-02-27
updatedDate: 2026-02-27          # Optional
heroImage: "https://res.cloudinary.com/dfudxxzlj/...q_auto,f_auto,w_1200/..."
author: "Focus AI"               # Optional
category: "news"                 # news | guide | tutorial
tags: ["ai", "automation"]       # Optional
difficulty: "beginner"           # Optional: beginner | intermediate | advanced
ctaType: "botcamp"               # botcamp | agents | consulting
```

## Content
- 800-1500 words in Hebrew
- Terminology: "כתבות" not "מאמרים"
- Blog URL: /ai-news/ (NOT /blog/)
- Collection name in code: "blog", URL path: "ai-news"
- End with natural CTA integration

## After Publishing
- Update CLAUDE.md blog articles table
- `npm run build` — verify at /ai-news/<slug>
