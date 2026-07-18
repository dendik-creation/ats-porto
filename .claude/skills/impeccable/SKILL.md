---
name: impeccable
description: The code-craft quality bar for this Astro project. Use when writing or reviewing any component, page, style, or config — enforces clean, accessible, semantic, performant, well-structured code with no loose ends. The standard that says "done" means done, not "works on my machine."
---

# Impeccable — Code Craft Bar

"Impeccable" = no flaws to point at. Not gold-plating — correctness, clarity, and care, with nothing left half-finished.

## Non-negotiables

### Semantics & accessibility
- Real elements: `<button>` for actions, `<a>` for navigation, one `<h1>` per page, headings in order.
- Every image has meaningful `alt` (empty `alt=""` only when decorative).
- Interactive things are keyboard-reachable with a visible focus style. Never remove focus outlines without replacing them.
- Color contrast meets WCAG AA (4.5:1 text). Verify, don't assume.
- Respect `prefers-reduced-motion` for any animation.

### Structure
- Components do one thing. If an `.astro` file mixes 3 concerns, split it.
- No magic numbers — colors, spacing, type come from tokens (see [[hallmark]]).
- No dead code, no commented-out blocks, no unused imports/props, no leftover `console.log`.
- Names say what they are. No `div1`, `wrapper2`, `temp`.
- Scoped `<style>` per component; global CSS only for tokens/resets.

### Astro correctness
- Ship zero JS by default; add a client directive (`client:*`) only where interactivity truly needs it, and pick the narrowest (`client:visible` over `client:load` when possible).
- Fetch/compute in the frontmatter (server) — don't push work to the client without reason.
- Use `<Image />` / asset handling for images; set width/height to avoid layout shift.
- Type props with an `interface Props`. `tsconfig` is strict — honor it.

### Performance & polish
- No layout shift (CLS): reserve space for media.
- No unstyled flash; fonts loaded with a sane fallback and `font-display`.
- Responsive: works from ~360px up. Test small before large.
- Handles empty/long/error states, not just the happy path.

## Definition of done

1. Builds clean — `astro build` and `astro check` pass, no warnings you introduced.
2. Renders correctly at mobile AND desktop widths.
3. Keyboard-navigable, contrast-checked, reduced-motion respected.
4. No dead code, no TODOs left silently, no hardcoded values that belong in tokens.
5. Reads like the surrounding code — same idioms, same formatting.

## Review pass before "done"

- Would I sign my name to this file?
- Is there any state (empty, error, overflow) I didn't handle?
- Any value here that should be a shared token?
- Did I actually run it, or just assume it works?

Implements [[hallmark]] to the visual standard of [[anti-slop-design]].
