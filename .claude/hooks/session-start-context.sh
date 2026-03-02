#!/bin/bash
# Hook: SessionStart - Inject project context reminders

cat << 'CONTEXT'
Focus AI Project Reminders:
- ALWAYS run `npm run build` before committing (dist/ must be included)
- ALWAYS respond in Hebrew (תענה בעברית)
- ALWAYS update CLAUDE.md after significant changes (new pages, routes, components)
- Deployment: push to git → user pulls from cPanel → site live
- Design: Apple Glassmorphism + Cyberpunk (dark bg, purple neon, glass cards)
- NO traffic light dots, NO clip-path corners, NO badges above hero
- Cloudinary images MUST have q_auto,f_auto transforms
- Forms use N8N webhooks (AJAX)
- Blog terminology: "כתבות" not "מאמרים"
CONTEXT

exit 0
