#!/bin/bash
# Restructure claude-code-skills-bundle into categorized folder format
set -e

SRC="c:/sites/maderfuker/claude-code-skills-bundle/skills"
DEST="c:/sites/maderfuker/claude-code-skills-bundle-v2"

# Category mapping: skill-name → category-folder
declare -A CATS

# 01-quality
for s in code-review security-review performance-review refactor clean-code solid-principles tech-debt accessibility; do
  CATS[$s]="01-quality"
done

# 02-debugging
for s in debug-smart fix-error trace-bug memory-leak async-debug typescript-errors regex-helper; do
  CATS[$s]="02-debugging"
done

# 03-documentation
for s in generate-docs jsdoc readme-write api-docs changelog explain-code; do
  CATS[$s]="03-documentation"
done

# 04-testing
for s in write-tests edge-cases mock-generate test-coverage e2e-tests test-data snapshot-tests; do
  CATS[$s]="04-testing"
done

# 05-git-workflow
for s in commit-message pr-description git-cleanup merge-conflict release-notes branch-strategy; do
  CATS[$s]="05-git-workflow"
done

# 06-architecture
for s in architecture-review design-patterns api-design database-schema microservices dependency-audit folder-structure; do
  CATS[$s]="06-architecture"
done

# 07-security
for s in security-audit env-security sql-injection auth-review csp-setup; do
  CATS[$s]="07-security"
done

# 08-productivity
for s in standup task-breakdown onboard-codebase sprint-plan; do
  CATS[$s]="08-productivity"
done

# Remove old v2 if exists
rm -rf "$DEST"
mkdir -p "$DEST/skills"

# Copy each skill
for skill_dir in "$SRC"/*/; do
  skill_name=$(basename "$skill_dir")
  cat="${CATS[$skill_name]}"
  if [ -z "$cat" ]; then
    echo "⚠️  No category for: $skill_name"
    continue
  fi
  dest_dir="$DEST/skills/$cat/$skill_name"
  mkdir -p "$dest_dir"
  cp "$skill_dir/SKILL.md" "$dest_dir/skill-$skill_name.md"
  echo "✅ $skill_name → $cat/"
done

echo ""
echo "Done. Check: $DEST"
