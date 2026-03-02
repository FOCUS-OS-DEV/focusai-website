---
name: creating-skills
description: Creates a new Claude Code skill (SKILL.md + optional sub-files) following Anthropic best practices. Use when asked to build, write, or scaffold a new skill file.
user-invokable: true
---

# Creating a Skill — Best Practices

## Frontmatter (required fields only)

```yaml
---
name: verb-noun            # lowercase, hyphens only, max 64 chars. Gerund preferred: processing-pdfs
description: "..."         # THIRD PERSON. Says WHAT + WHEN. Max 1024 chars.
user-invokable: true       # only if user should invoke with /skill-name
---
```

**name rules:** lowercase + numbers + hyphens only. No "anthropic" or "claude". Gerund form preferred: `processing-pdfs`, `creating-articles`, `analyzing-data`.

**description rules:**
- Third person ONLY: "Processes PDF files..." NOT "I can process..." NOT "You can use this..."
- Include both WHAT it does and WHEN to trigger it
- Example: `"Extracts text from PDFs and fills forms. Use when working with PDF files or when user mentions PDFs, forms, or document extraction."`

**Supported frontmatter fields:** `name`, `description`, `user-invokable`, `argument-hint`, `compatibility`, `disable-model-invocation`, `license`, `metadata`

**NOT supported:** `allowed-tools`, `user-invocable` (typo — must be `user-invokable`)

---

## SKILL.md Body — Concise is Key

- **Under 500 lines** for SKILL.md body
- **Claude is smart** — only add context Claude doesn't already have
- Challenge every paragraph: "Does Claude really need this?"
- Put detailed content in sub-files, reference from SKILL.md

### Degrees of freedom

| When | Use |
|------|-----|
| Multiple valid approaches, context-dependent | Text instructions (high freedom) |
| Preferred pattern + some variation | Pseudocode template (medium) |
| Fragile operation, exact sequence required | Exact command, no variation (low) |

---

## Progressive Disclosure Pattern

Keep SKILL.md as overview. Move details to sub-files:

```
my-skill/
├── SKILL.md           ← Overview + core rules + links to sub-files
├── reference.md       ← API reference, schemas, detailed specs
├── examples.md        ← Input/output examples
└── advanced.md        ← Edge cases, advanced workflows
```

**Rule: References must be ONE level deep from SKILL.md.** No `SKILL.md → a.md → b.md`.

Reference sub-files like:
```markdown
For detailed API reference: See [reference.md](reference.md)
For examples: See [examples.md](examples.md)
```

Claude reads sub-files only when needed — no token cost until accessed.

---

## Writing Effective Descriptions (Discovery Critical)

Claude chooses which skill to load based on name + description. Bad description = skill never activates.

| Bad | Good |
|-----|------|
| "Helps with documents" | "Extracts text and tables from PDF files. Use when working with PDFs." |
| "Processes data" | "Analyzes Excel spreadsheets and generates pivot tables. Use when analyzing .xlsx files." |
| "Does stuff" | "Generates git commit messages by analyzing diffs. Use when writing commit messages." |

---

## Workflow Pattern (for complex multi-step tasks)

Provide a checkable progress list:

```markdown
Copy this and track progress:
- [ ] Step 1: Analyze input
- [ ] Step 2: Create plan file
- [ ] Step 3: Validate plan
- [ ] Step 4: Execute
- [ ] Step 5: Verify output
```

Include feedback loops: run validator → fix errors → repeat.

---

## Anti-Patterns to Avoid

- `user-invocable` (wrong) → use `user-invokable`
- `allowed-tools` → not a valid frontmatter field, remove it
- Windows paths `scripts\helper.py` → always use `/` forward slashes
- Too many options: "You can use pypdf, or pdfplumber, or PyMuPDF..." → pick a default
- Time-sensitive info: "Before August 2025..." → put in `<details>` legacy section
- Starting description with "I" or "You" → must be third person

---

## Pre-publish Checklist

- [ ] `name`: lowercase, hyphens, max 64 chars, no reserved words?
- [ ] `description`: third person, includes WHAT + WHEN, max 1024 chars?
- [ ] `user-invokable` (not `user-invocable`)?
- [ ] No `allowed-tools` in frontmatter?
- [ ] SKILL.md body under 500 lines?
- [ ] Detailed content split to sub-files with 1-level-deep references?
- [ ] Forward slashes in all file paths?
- [ ] Referenced sub-files actually exist?
- [ ] No time-sensitive info in main body?
- [ ] Consistent terminology throughout?

---

## Full Skill Structure Reference

See [structure.md](structure.md) for complete directory patterns, advanced examples, and the evaluation-driven development workflow.
