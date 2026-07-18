---
name: hallmark
description: The brand signature system for this project — the recognizable visual identity (color, type, motif, voice, motion) that makes output look like THIS product and nothing else. Use when defining or applying brand identity, choosing palette/fonts, building reusable UI, or checking that a surface is on-brand. The single source of truth the design skill pulls from.
---

# Hallmark — Brand Signature

A hallmark is the mark that proves authorship. Every surface should carry it so the work is recognizable at a glance, cover the logo.

## The identity system (define once, live in code)

Store as CSS custom properties in the global layout / `src/styles/tokens.css`. This file is the ONE place identity is set; components consume tokens, never hardcode.

### 1. Palette

- **Ink** — primary text / structure (off-black, not #000).
- **Paper** — primary surface (off-white or a tinted neutral, not #fff).
- **Signature accent** — ONE color that is the brand. Used sparingly, always intentional. This is the color people remember.
- **Support neutrals** — 2–3 grays derived from ink, for lines/muted text.
- No second accent unless there's a real reason. Restraint IS the brand.

```css
:root {
  --ink: #16150f;
  --paper: #f7f4ec;
  --accent: #c8461f;      /* signature — set to the real brand color */
  --muted: color-mix(in oklab, var(--ink) 55%, var(--paper));
  --line: color-mix(in oklab, var(--ink) 14%, var(--paper));
}
```

### 2. Type

- **Display face** — headings / the voice. One face with character.
- **Text face** — body, readable at length.
- Optionally **mono** — code, labels, indices (a strong hallmark move for a technical/ATS product).
- Define a scale (not arbitrary sizes) and stick to it.

### 3. Motif — the repeatable signature element

Pick ONE and reuse it everywhere so it becomes recognizable:
- a rule/underline treatment, or
- numbered indices (01 / 02 / 03), or
- a consistent corner/edge geometry, or
- a signature layout grid (e.g. asymmetric two-column).

### 4. Voice

- How copy sounds: direct, confident, specific. No filler, no hype adjectives.
- Consistent capitalization and punctuation rules.

### 5. Motion

- One easing curve and 2 durations, reused. Motion should feel like the same hand every time.

## Applying it

- New component? Pull tokens; do not invent local colors/sizes.
- Reusable brand primitives (Button, Section, Heading) should encode the hallmark so it's automatic.
- Every surface must carry at least the palette + type + one motif instance.

## On-brand check

- Cover the logo — still recognizably this product? If it could be any template, the hallmark isn't present.
- Is the signature accent used with intent (not decoration)?
- Is the motif present and consistent?

Feeds [[anti-slop-design]] (which enforces distinctiveness) and is implemented to the standard of [[impeccable]].
