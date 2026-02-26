#!/bin/bash
# Hook: PostToolUse (Edit|Write) - Warn if standalone .astro page is missing Analytics
# Ensures all pages have GTM, Clarity, and Meta Pixel tracking

INPUT=$(cat)
RAW_PATH=$(echo "$INPUT" | node -e "let d='';process.stdin.on('data',c=>d+=c);process.stdin.on('end',()=>{try{console.log(JSON.parse(d).tool_input.file_path||'')}catch(e){console.log('')}})")
# Normalize Windows backslashes to forward slashes
FILE_PATH=$(echo "$RAW_PATH" | tr '\\' '/')

# Only check .astro files in pages/
if [[ "$FILE_PATH" != *.astro ]]; then
  exit 0
fi

if ! echo "$FILE_PATH" | grep -qi "focusai-website/src/pages/"; then
  exit 0
fi

# Check if file exists
if [ ! -f "$FILE_PATH" ]; then
  exit 0
fi

# Check if it's a standalone page (has <!DOCTYPE html> = doesn't use BaseLayout)
if ! grep -q '<!DOCTYPE html>' "$FILE_PATH"; then
  exit 0
fi

# It's a standalone page - check if it imports Analytics
if ! grep -q "import Analytics" "$FILE_PATH"; then
  echo '{"decision":"block","reason":"MISSING ANALYTICS: This standalone .astro page has <!DOCTYPE html> but does NOT import Analytics.astro. All pages MUST include analytics tracking (GTM, Clarity, Meta Pixel). Add these to the frontmatter:\n  import Analytics from '\''../components/Analytics.astro'\'';\n  import AnalyticsBody from '\''../components/AnalyticsBody.astro'\'';\nThen add <Analytics /> before </head> and <AnalyticsBody /> right after <body>."}'
  exit 0
fi

# Also check that <Analytics /> is actually used in the template
if ! grep -q '<Analytics' "$FILE_PATH"; then
  echo '{"decision":"block","reason":"ANALYTICS IMPORTED BUT NOT USED: Analytics.astro is imported but <Analytics /> is not in the template. Add <Analytics /> before </head> and <AnalyticsBody /> after <body>."}'
  exit 0
fi

exit 0
