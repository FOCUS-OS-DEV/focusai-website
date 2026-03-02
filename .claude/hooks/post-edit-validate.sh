#!/bin/bash
# Hook: PostToolUse (Edit|Write) - Validate Astro files after editing

INPUT=$(cat)
FILE_PATH=$(echo "$INPUT" | node -e "let d='';process.stdin.on('data',c=>d+=c);process.stdin.on('end',()=>{try{console.log(JSON.parse(d).tool_input.file_path||'')}catch(e){console.log('')}})")

# Only validate Astro-related files in src/
if [[ "$FILE_PATH" != *.astro && "$FILE_PATH" != *.ts && "$FILE_PATH" != *.tsx ]]; then
  exit 0
fi

if ! echo "$FILE_PATH" | grep -qi "focusai-website/src/"; then
  exit 0
fi

# Extract project dir from file path
PROJECT_DIR=$(echo "$FILE_PATH" | sed 's|[\\/]src[\\/].*||')

if [ -d "$PROJECT_DIR" ] && [ -f "$PROJECT_DIR/package.json" ]; then
  cd "$PROJECT_DIR"
  CHECK_OUTPUT=$(npx astro check 2>&1 | tail -5)
  CHECK_EXIT=$?

  if [ $CHECK_EXIT -ne 0 ]; then
    CLEAN_OUTPUT=$(echo "$CHECK_OUTPUT" | tr '\n' ' ' | sed 's/"/\\"/g')
    echo "{\"systemMessage\": \"Astro check issues: $CLEAN_OUTPUT\"}"
  fi
fi

exit 0
