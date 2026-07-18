---
name: ats-cv-optimizer
description: Score src/data/cv.data.ts against a target job description for ATS (Applicant Tracking System) compatibility — keyword coverage, gap analysis, and formatting-risk checks. Use whenever the user pastes a job posting/job title and asks how well the CV/résumé/portfolio data matches it, wants to "optimize for ATS," asks "what keywords am I missing," or wants a match score before applying to a role. Read-only analysis and a suggestion report — never edits cv.data.ts directly (that's a separate rewrite step the user must ask for explicitly).
---

# ATS CV Optimizer

Recruiters at scale don't read résumés first — an ATS parses and ranks them. This skill measures how `src/data/cv.data.ts` (the site's single source of truth, typed by `src/data/cv.ts`) would score against a specific job description, and hands back a report the user can act on. It never edits the data file itself: scoring and rewriting are different trust levels, and silently rewriting someone's work history is a bad surprise. If the user wants the fixes applied, they'll ask — treat that as a separate, explicit step.

## Inputs required

You need two things before scoring anything:

1. **The CV data** — read `src/data/cv.data.ts` fresh each time; it changes as the user edits their history. Don't rely on a cached mental model from earlier in the conversation.
2. **The target job** — a pasted job description, a job posting URL's text, or at minimum a job title + a few known requirements. If the user only gives a job title with no other detail, ask for the actual posting text — keyword extraction from a title alone is guesswork and the report will mislead them.

## Step 1: Extract keywords from the job description

Pull two tiers out of the JD, not one flat list — a "nice to have" and a "required" miss carry different weight in the report:

- **Required/core**: hard skills, tools, frameworks, languages, certifications, and years-of-experience thresholds stated as must-haves (often under "Requirements," "Qualifications," or phrased "must have"/"required").
- **Preferred/nice-to-have**: anything under "Nice to have," "Bonus," "Preferred," or soft signals (domain familiarity, methodologies like Agile/Scrum).

Normalize near-synonyms as you go (e.g. "JS" / "Javascript" / "JavaScript" are one keyword; "REST" / "RESTful API" / "REST API" are one keyword) — a naive string diff will report false gaps otherwise. Keep the canonical JD phrasing when you report a miss, since that's the term the ATS is actually matching against.

## Step 2: Build the coverage map

Search for each JD keyword across every place it could legitimately appear in the CV data, not just `skills[].keywords`:

- `basics.summary`
- `work[].highlights` and `work[].keywords`
- `skills[].keywords`
- `projects[].description` and `projects[].keywords`
- `certificates[].name` / `.summary` (relevant for certification requirements)

A keyword only in a project from 2022 counts differently than one repeated across the current role and skills list — note *where* a match lives, since ATS relevance scoring and human reviewers both weight recency and repetition.

## Step 3: Score formatting/parsing risk

This is a static content file rendered by Astro components, so most classic ATS parsing hazards (tables, text boxes, headers/footers, images with embedded text) don't apply to the data itself — but check anyway, because the *exported/printable* résumé view is what actually goes through an ATS:

- Are section labels ATS-conventional? ("Work Experience" / "Skills" / "Certifications" parse more reliably than creative headers.)
- Do dates follow a consistent, parseable format (`YYYY-MM`)? Inconsistent or missing `endDate` values can break chronological parsing.
- Is contact info (`basics.email`, `basics.url`, `basics.location`) present as plain text, not baked into an image or icon-only element?
- Any field relying on unicode symbols, emoji, or icon glyphs in place of words the ATS needs to read as text?

If the user hasn't mentioned a printable/exported résumé, note that this skill is scoring the data model — flag that the actual PDF/print output should be spot-checked too, since that's the artifact an ATS will ingest.

## Step 4: Report

Use this structure every time — it's the shape the user needs to act on, not just read:

```markdown
# ATS Match Report — [Job Title] @ [Company]

## Score: NN% keyword coverage (required: X/Y matched, preferred: X/Y matched)

## Matched keywords
- **KEYWORD** — found in [section/array], e.g. work[0].keywords

## Missing — required
- **KEYWORD** — not found anywhere. Suggest adding to: [specific array + why it fits there]

## Missing — preferred
- **KEYWORD** — not found. Suggest adding to: [specific array], optional.

## Weak or generic phrasing
- "[quoted phrase from the CV]" in [location] — genericity/why it under-signals. Suggest sharpening toward: "[concrete alternative]"

## Formatting risk notes
- [any flags from Step 3, or "none found"]
```

Keep suggestions concrete and placed — "add Kubernetes to work[0].keywords, since the Freelance role already covers Docker/deployment" beats "consider adding more DevOps keywords." The user has to translate the report into an actual edit; do that translation work for them, don't leave it as homework.

Do not edit `cv.data.ts`. If the user asks you to apply the suggestions after seeing the report, that's a normal edit task — read the exact array/line the report pointed to and make the change there.
