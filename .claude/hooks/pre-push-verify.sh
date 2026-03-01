#!/bin/bash
# Hook: PreToolUse (Bash) - Verify build before git push

INPUT=$(cat)
COMMAND=$(echo "$INPUT" | node -e "let d='';process.stdin.on('data',c=>d+=c);process.stdin.on('end',()=>{try{console.log(JSON.parse(d).tool_input.command||'')}catch(e){console.log('')}})")

# Only intercept git push commands
if ! echo "$COMMAND" | grep -qE 'git push'; then
  exit 0
fi

# Block force push - causes cPanel divergence issues
if echo "$COMMAND" | grep -qE '\-\-force|\-f |force-with-lease'; then
  echo '{"hookSpecificOutput":{"hookEventName":"PreToolUse","permissionDecision":"deny","permissionDecisionReason":"BLOCKED: Force push is forbidden! It breaks cPanel deployment (diverging branches). Never amend pushed commits. Create a new commit instead."}}'
  exit 0
fi

CWD=$(echo "$INPUT" | node -e "let d='';process.stdin.on('data',c=>d+=c);process.stdin.on('end',()=>{try{console.log(JSON.parse(d).cwd||'')}catch(e){console.log('')}})" 2>/dev/null || echo "$(pwd)")
PROJECT_DIR="$CWD"

if [ -d "$PROJECT_DIR/focusai-website" ]; then
  PROJECT_DIR="$PROJECT_DIR/focusai-website"
elif ! echo "$PROJECT_DIR" | grep -q "focusai-website"; then
  exit 0
fi

cd "$PROJECT_DIR" 2>/dev/null || exit 0

# Verify dist/ exists and contains a built site
if [ ! -f "dist/index.html" ]; then
  echo '{"hookSpecificOutput":{"hookEventName":"PreToolUse","permissionDecision":"deny","permissionDecisionReason":"BLOCKED: dist/index.html not found! Run: npm run build && git add dist/ before pushing."}}'
  exit 0
fi

# Check if dist/ has any tracked files in git
DIST_TRACKED=$(git ls-files -- dist/ 2>/dev/null | head -1)
if [ -z "$DIST_TRACKED" ]; then
  echo '{"hookSpecificOutput":{"hookEventName":"PreToolUse","permissionDecision":"deny","permissionDecisionReason":"BLOCKED: dist/ is not tracked by git! Run: git add dist/ before pushing."}}'
  exit 0
fi

exit 0
