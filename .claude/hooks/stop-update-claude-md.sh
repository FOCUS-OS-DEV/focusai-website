#!/bin/bash
# Hook: Stop - Check if CLAUDE.md needs updating after changes

INPUT=$(cat)
CWD=$(echo "$INPUT" | node -e "let d='';process.stdin.on('data',c=>d+=c);process.stdin.on('end',()=>{try{console.log(JSON.parse(d).cwd||'')}catch(e){console.log('')}})" 2>/dev/null || echo "$(pwd)")

PROJECT_DIR="$CWD"
if [ -d "$PROJECT_DIR/focusai-website" ]; then
  PROJECT_DIR="$PROJECT_DIR/focusai-website"
fi

cd "$PROJECT_DIR" 2>/dev/null || exit 0

# Check for changes in key directories
CHANGES=$(git diff --name-only HEAD 2>/dev/null | grep -E '(src/pages/|src/components/|src/data/)' || true)
STAGED=$(git diff --cached --name-only 2>/dev/null | grep -E '(src/pages/|src/components/|src/data/)' || true)
NEW_FILES=$(git ls-files --others --exclude-standard 2>/dev/null | grep -E '(src/pages/|src/components/|src/data/)' || true)

ALL_CHANGES="${CHANGES}${STAGED}${NEW_FILES}"

if [ -n "$ALL_CHANGES" ]; then
  CLAUDE_CHANGED=$(git diff --name-only HEAD 2>/dev/null | grep "CLAUDE.md" || true)
  CLAUDE_STAGED=$(git diff --cached --name-only 2>/dev/null | grep "CLAUDE.md" || true)

  if [ -z "$CLAUDE_CHANGED" ] && [ -z "$CLAUDE_STAGED" ]; then
    echo "{\"systemMessage\": \"Reminder: Project files in src/pages or src/components were modified but CLAUDE.md was not updated. Consider updating Page Routes, Components, or Recent Changes Log.\"}"
  fi
fi

exit 0
