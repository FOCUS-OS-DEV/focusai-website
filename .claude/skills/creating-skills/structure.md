# Skill Structure Reference

## Directory Patterns

### Simple skill (instructions only)
```
my-skill/
└── SKILL.md
```

### Medium skill (with reference files)
```
my-skill/
├── SKILL.md          ← Core instructions + links
├── reference.md      ← Detailed specs/API
└── examples.md       ← Input/output pairs
```

### Domain-organized skill (multiple domains)
```
bigquery-skill/
├── SKILL.md          ← Overview + navigation
└── reference/
    ├── finance.md
    ├── sales.md
    └── product.md
```
SKILL.md points to the right file: "For sales data: See [reference/sales.md](reference/sales.md)"

### Skill with scripts
```
pdf-skill/
├── SKILL.md
├── forms.md
└── scripts/
    ├── analyze_form.py
    └── validate.py
```
Scripts are EXECUTED, not loaded into context — no token cost.

---

## Description Formula

```
[Verb phrase in 3rd person]. [Details if needed]. Use when [trigger conditions].
```

Examples:
- `"Processes Excel files and generates summary reports. Use when analyzing spreadsheets or .xlsx files."`
- `"Creates Hebrew blog articles with correct frontmatter and CTAs. Use when asked to write an article, כתבה, or news post."`
- `"Runs a site audit covering SEO, links, and compliance. Use when asked to audit, validate, or check the website."`

---

## Evaluation-Driven Development

Build evaluations BEFORE writing extensive documentation:

```json
{
  "skill": "my-skill",
  "query": "Do the task",
  "expected_behavior": [
    "Reads the correct file",
    "Applies the right rule",
    "Produces the correct output format"
  ]
}
```

Process:
1. Run Claude on real task WITHOUT the skill → document failures
2. Write minimal SKILL.md to address only those failures
3. Test → iterate
4. Add detail only when tests prove it's needed

---

## Common Content Patterns

### Template pattern (strict)
```markdown
ALWAYS use this exact structure:
[template here]
```

### Template pattern (flexible)
```markdown
Default format — adjust based on context:
[template here]
```

### Examples pattern (input/output pairs)
```markdown
Example 1:
Input: [description]
Output: [exact output]

Example 2:
Input: [description]
Output: [exact output]
```

### Conditional workflow
```markdown
Creating new content? → Follow "Creation workflow"
Editing existing? → Follow "Editing workflow"

Creation workflow:
1. ...

Editing workflow:
1. ...
```

---

## Table of Contents for Long Reference Files

If a sub-file is longer than 100 lines, add TOC at top:

```markdown
## Contents
- Section 1
- Section 2
- Section 3

## Section 1
...
```

This ensures Claude sees full scope even on partial reads.
