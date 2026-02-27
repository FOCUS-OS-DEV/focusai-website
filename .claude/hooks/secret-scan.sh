#!/bin/bash
# Hook: PreToolUse (Bash) - Block commits containing secrets/API keys

INPUT=$(cat)
COMMAND=$(echo "$INPUT" | node -e "let d='';process.stdin.on('data',c=>d+=c);process.stdin.on('end',()=>{try{console.log(JSON.parse(d).tool_input.command||'')}catch(e){console.log('')}})")

# Only intercept git commit commands
if ! echo "$COMMAND" | grep -qE 'git commit'; then
  exit 0
fi

# Get staged files content
STAGED_CONTENT=$(git diff --cached --diff-filter=ACM -U0 2>/dev/null)

if [ -z "$STAGED_CONTENT" ]; then
  exit 0
fi

ISSUES=""

# Check for common API key patterns
if echo "$STAGED_CONTENT" | grep -qE 'AIzaSy[a-zA-Z0-9_-]{33}'; then
  ISSUES="${ISSUES}Google API key detected. "
fi

if echo "$STAGED_CONTENT" | grep -qE 'sk-[a-zA-Z0-9]{20,}'; then
  ISSUES="${ISSUES}OpenAI API key detected. "
fi

if echo "$STAGED_CONTENT" | grep -qE 'ghp_[a-zA-Z0-9]{36}'; then
  ISSUES="${ISSUES}GitHub personal access token detected. "
fi

if echo "$STAGED_CONTENT" | grep -qE 'xoxb-[0-9]{10,}'; then
  ISSUES="${ISSUES}Slack bot token detected. "
fi

if echo "$STAGED_CONTENT" | grep -qE 'AKIA[0-9A-Z]{16}'; then
  ISSUES="${ISSUES}AWS access key detected. "
fi

# Check for .env files being staged
STAGED_FILES=$(git diff --cached --name-only 2>/dev/null)
if echo "$STAGED_FILES" | grep -qE '\.env($|\.)'; then
  ISSUES="${ISSUES}.env file is being committed! "
fi

if [ -n "$ISSUES" ]; then
  echo "{\"hookSpecificOutput\":{\"hookEventName\":\"PreToolUse\",\"permissionDecision\":\"deny\",\"permissionDecisionReason\":\"SECRET DETECTED: ${ISSUES}Move secrets to .env file and add .env to .gitignore.\"}}"
  exit 0
fi

exit 0
