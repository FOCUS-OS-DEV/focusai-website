#!/bin/bash
# Hook: PostToolUse (Edit|Write) - Privacy Compliance Validator
# Validates Israeli privacy law standards (Amendment 13 + Section 30A)

INPUT=$(cat)
FILE_PATH=$(echo "$INPUT" | node -e "
  let d='';
  process.stdin.on('data', c => d += c);
  process.stdin.on('end', () => {
    try { console.log(JSON.parse(d).tool_input?.file_path || ''); }
    catch(e) { console.log(''); }
  });
" 2>/dev/null)

# Only check .astro files
[[ "$FILE_PATH" != *.astro ]] && exit 0

# Only focusai-website
echo "$FILE_PATH" | grep -qi "focusai-website" || exit 0

# Only src/pages or src/components
echo "$FILE_PATH" | grep -qiE "src/(pages|components)/" || exit 0

# Skip policy pages themselves
BASENAME=$(basename "$FILE_PATH")
[[ "$BASENAME" == "privacy-policy.astro" || "$BASENAME" == "terms.astro" ]] && exit 0

# Read content
CONTENT=$(cat "$FILE_PATH" 2>/dev/null)
[ -z "$CONTENT" ] && exit 0

ISSUES=""

# ============================================================
# CHECK 1: Forms
# ============================================================
if echo "$CONTENT" | grep -q '<form'; then

  # Count checkboxes (ASCII only, reliable)
  CHECKBOX_COUNT=$(echo "$CONTENT" | grep -o 'type="checkbox"' | wc -l | xargs printf "%d" 2>/dev/null || echo 0)

  # Detect consent-related text (English patterns only — reliable on Windows)
  HAS_CONSENT=false
  echo "$CONTENT" | grep -qiE 'consent|privacy|terms' && HAS_CONSENT=true

  # A: Must have 2+ checkboxes when consent text is present
  if $HAS_CONSENT && [ "$CHECKBOX_COUNT" -lt 2 ]; then
    ISSUES="${ISSUES}[חובה] checkbox בודד לתנאים+שיווק — יש לפצל ל-2: privacy (required) + marketing (optional). "
  fi

  # B: Marketing checkbox must NOT be required
  if echo "$CONTENT" | grep -i 'marketing' | grep -q 'required' 2>/dev/null; then
    ISSUES="${ISSUES}[חובה] checkbox שיווקי מסומן required — חייב להיות אופציונלי (סעיף 30א). "
  fi

  # C: Webhook must include marketing_consent (or 'marketing' as field name)
  if echo "$CONTENT" | grep -qE '\bfetch\(' 2>/dev/null; then
    if ! echo "$CONTENT" | grep -qE 'marketing_consent|['"'"'"]marketing['"'"'"]' 2>/dev/null; then
      ISSUES="${ISSUES}[אזהרה] webhook ללא שדה marketing_consent — יש להוסיף params.append('marketing_consent', ...). "
    fi
  fi

  # D: Privacy policy link
  if ! echo "$CONTENT" | grep -qiE 'privacy-policy' 2>/dev/null; then
    ISSUES="${ISSUES}[אזהרה] טופס ללא קישור ל-/privacy-policy. "
  fi

  # E: Terms link
  if ! echo "$CONTENT" | grep -qiE '/terms' 2>/dev/null; then
    ISSUES="${ISSUES}[אזהרה] טופס ללא קישור ל-/terms. "
  fi

fi

# ============================================================
# CHECK 2: Standalone pages (no BaseLayout/Footer) with forms
# ============================================================
if echo "$FILE_PATH" | grep -q "src/pages/" 2>/dev/null; then
  if echo "$CONTENT" | grep -q '<form' 2>/dev/null; then
    if ! echo "$CONTENT" | grep -qiE 'BaseLayout|import.*Footer' 2>/dev/null; then
      if ! echo "$CONTENT" | grep -q 'privacy-policy' 2>/dev/null; then
        ISSUES="${ISSUES}[חובה] עמוד עצמאי עם טופס ללא קישור למדיניות הפרטיות. "
      fi
    fi
  fi
fi

# ============================================================
# CHECK 3: Old combined consent pattern (ASCII detectable part)
# ============================================================
if echo "$CONTENT" | grep -qiE 'marketing.*required|required.*marketing' 2>/dev/null; then
  ISSUES="${ISSUES}[חובה] checkbox שיווקי עם required — חייב להיות אופציונלי. "
fi

# ============================================================
# Output
# ============================================================
if [ -n "$ISSUES" ]; then
  CLEAN=$(echo "$ISSUES" | sed 's/"/\\"/g' | tr -d '\n')
  echo "{\"systemMessage\": \"🔒 ציות פרטיות — ${BASENAME}: ${CLEAN}\"}"
fi

exit 0
