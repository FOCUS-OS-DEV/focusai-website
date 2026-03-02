#!/bin/bash
# Hook: PreToolUse (Bash) - Auto-build before git commit
# Ensures dist/ is always fresh before committing

INPUT=$(cat)
COMMAND=$(echo "$INPUT" | node -e "let d='';process.stdin.on('data',c=>d+=c);process.stdin.on('end',()=>{try{console.log(JSON.parse(d).tool_input.command||'')}catch(e){console.log('')}})")

# Only intercept git commit commands
if ! echo "$COMMAND" | grep -qE 'git commit'; then
  exit 0
fi

CWD=$(echo "$INPUT" | node -e "let d='';process.stdin.on('data',c=>d+=c);process.stdin.on('end',()=>{try{console.log(JSON.parse(d).cwd||'')}catch(e){console.log('')}})" 2>/dev/null || echo "")
PROJECT_DIR="${CWD:-$(pwd)}"

# Find focusai-website directory
if [ -d "$PROJECT_DIR/focusai-website" ]; then
  PROJECT_DIR="$PROJECT_DIR/focusai-website"
elif ! echo "$PROJECT_DIR" | grep -q "focusai-website"; then
  exit 0
fi

# Check if any src/ files are staged
STAGED=$(cd "$PROJECT_DIR" && git diff --cached --name-only 2>/dev/null | grep -E '(^src/|focusai-website/src/)' || true)

if [ -z "$STAGED" ]; then
  exit 0
fi

# Run build
cd "$PROJECT_DIR"
echo "Hook: Running npm run build before commit..." >&2
BUILD_OUTPUT=$(npm run build 2>&1)
BUILD_EXIT=$?

if [ $BUILD_EXIT -ne 0 ]; then
  echo "$BUILD_OUTPUT" >&2
  echo '{"hookSpecificOutput":{"hookEventName":"PreToolUse","permissionDecision":"deny","permissionDecisionReason":"Build failed! Fix errors before committing."}}'
  exit 0
fi

# Auto-stage dist/
git add dist/ 2>/dev/null
echo "Hook: Build successful, dist/ auto-staged." >&2

exit 0
