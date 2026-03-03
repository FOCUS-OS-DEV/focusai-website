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

# Derive REPO_ROOT via dirname — avoids git rev-parse Windows path issues
# PROJECT_DIR = /c/sites/maderfuker/focusai-website → REPO_ROOT = /c/sites/maderfuker
REPO_ROOT="$(dirname "$PROJECT_DIR")"

# Check if any src/ files are staged (run from REPO_ROOT for consistent paths)
STAGED=$(cd "$REPO_ROOT" && git diff --cached --name-only 2>/dev/null | grep -E 'focusai-website/src/' || true)

if [ -z "$STAGED" ]; then
  exit 0
fi

# Run build from focusai-website/
cd "$PROJECT_DIR"
echo "Hook: Running npm run build before commit..." >&2
BUILD_OUTPUT=$(npm run build 2>&1)
BUILD_EXIT=$?

if [ $BUILD_EXIT -ne 0 ]; then
  echo "$BUILD_OUTPUT" >&2
  echo '{"hookSpecificOutput":{"hookEventName":"PreToolUse","permissionDecision":"deny","permissionDecisionReason":"Build failed! Fix errors before committing."}}'
  exit 0
fi

# Stage ALL of dist/ — cd to REPO_ROOT first (avoids git -C Windows path bug)
cd "$REPO_ROOT"
echo "Hook: Staging dist/ from $REPO_ROOT ..." >&2
git add --all focusai-website/dist/
STAGE_EXIT=$?
STAGED_DIST=$(git diff --cached --name-only | grep -c "focusai-website/dist/" || true)
echo "Hook: staged $STAGED_DIST dist/ file(s), exit=$STAGE_EXIT" >&2

echo "Hook: Build successful, dist/ staged." >&2

# Integrity check: every _astro CSS/JS referenced in HTML must be STAGED IN GIT
MISSING=0
while IFS= read -r ref; do
  STAGED_FILE=$(git diff --cached --name-only 2>/dev/null | grep -F "$ref" || git ls-files "focusai-website/dist/$ref" 2>/dev/null)
  if [ -z "$STAGED_FILE" ]; then
    echo "Hook: GIT STAGING ERROR — dist/$ref referenced in HTML but NOT staged!" >&2
    git add "focusai-website/dist/$ref" 2>/dev/null || true
    MISSING=1
  fi
done < <(grep -roh '_astro/[^"]*\.\(css\|js\)' "$PROJECT_DIR/dist/" 2>/dev/null | sort -u)

if [ $MISSING -eq 1 ]; then
  git add --all focusai-website/dist/
  echo "Hook: Emergency staging complete." >&2
fi

echo "Hook: CSS/JS integrity check passed." >&2
exit 0
