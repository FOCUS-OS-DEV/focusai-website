#!/bin/bash
# Hook: PostToolUse (Write) - Warn when a new .astro page is created

INPUT=$(cat)
FILE_PATH=$(echo "$INPUT" | node -e "let d='';process.stdin.on('data',c=>d+=c);process.stdin.on('end',()=>{try{console.log(JSON.parse(d).tool_input.file_path||'')}catch(e){console.log('')}})")

# Only check new .astro files in pages/
if [[ "$FILE_PATH" != *.astro ]]; then
  exit 0
fi

# Normalize path
NORM_PATH=$(echo "$FILE_PATH" | tr '\\' '/')

if ! echo "$NORM_PATH" | grep -qi "focusai-website/src/pages/"; then
  exit 0
fi

# Skip drafts
if echo "$NORM_PATH" | grep -qi "_drafts"; then
  exit 0
fi

# Check if file exists (Write = new file or overwrite)
if [ ! -f "$FILE_PATH" ]; then
  exit 0
fi

CONTENT=$(cat "$FILE_PATH" 2>/dev/null)
WARNINGS=""

# Check for BaseLayout
if ! echo "$CONTENT" | grep -q "BaseLayout"; then
  if ! echo "$CONTENT" | grep -q '<!DOCTYPE html>'; then
    WARNINGS="${WARNINGS}Missing BaseLayout or DOCTYPE. "
  fi
fi

# Check for meta description
if ! echo "$CONTENT" | grep -qE 'description.*=|meta.*description'; then
  WARNINGS="${WARNINGS}Missing meta description. "
fi

# Remind about navigation + CLAUDE.md
WARNINGS="${WARNINGS}Remember: update Header/Footer nav if needed + CLAUDE.md Page Routes table."

echo "{\"systemMessage\": \"New page created: $(basename $FILE_PATH). ${WARNINGS}\"}"
exit 0
