---
name: anti-slop-design
description: Build UI that looks intentional, not machine-generated. Use whenever creating or reshaping any visual surface in this Astro project — pages, components, layouts, landing sections, styles. Kills the templated "AI slop" look (generic gradients, centered hero + three cards, purple-blue everything, emoji headings, filler copy) and enforces distinctive, considered design.
---

# Anti-Slop Design

Goal: nothing shipped here should read as "an AI made this." Every visual choice must be defensible.

## The slop checklist — REJECT on sight

If a design has these, it is slop. Rework before shipping.

- Purple→blue diagonal gradient as the hero background (the single most-overused AI default).
- Centered hero: big heading, one-line subtitle, two rounded buttons, then a 3-column card row of identical icons.
- Emoji as section markers or bullet icons (🚀 ✨ 🎯). Never.
- Generic filler copy: "Empower your workflow", "Seamless experience", "Unlock the power of…".
- Every corner `rounded-2xl`, every card the same drop shadow, uniform 24px gap everywhere.
- Body text and headings both `font-sans` at similar weights — no typographic contrast.
- Icon set from one generic pack, one per feature, no relationship to the content.
- Pure `#ffffff` on pure `#000000`, or gray-500 text on white for everything.

## Do this instead

1. **Pick one organizing idea first.** Editorial? Brutalist? Swiss/grid? Technical/monospace? Warm print? Commit. The idea drives type, color, spacing, motion. One idea, executed fully, beats five trends mixed.
2. **Typographic hierarchy with real contrast.** Distinct display face for headings vs. body. Vary weight AND size AND tracking — not just size. One characterful type choice sets the tone.
3. **Color with intent.** A restrained palette + ONE deliberate accent. Derive from the brand ([[hallmark]]), not from defaults. Off-blacks/off-whites over pure #000/#fff. Check contrast.
4. **Deliberate, uneven space.** Rhythm, not uniform gaps. Let sections breathe differently. Asymmetry is allowed and usually better than dead-center everything.
5. **Real content shape.** Design around actual copy and data, not lorem placeholders. If copy is filler, that's a slop signal — fix the words.
6. **Detail that shows a hand.** One considered move per surface: a rule line, an overlap, a numbered index, a hover that means something. Restraint — one, not ten.

## Astro-specific

- Global tokens (color, type scale, spacing) live in `src/layouts/Layout.astro` or a dedicated `src/styles/`. Define once, reuse — no per-component magic numbers.
- Scoped `<style>` in `.astro` components by default; reach for global only for tokens/resets.
- Prefer CSS custom properties for the palette so the hallmark identity is swappable in one place.

## Before shipping — ask

- Cover the logo/brand: would this still look like it belongs to THIS project, or any SaaS template?
- Remove color: does hierarchy still hold on structure and type alone?
- Is there one thing here a template would never do? If no, it's not done.

Pair with [[hallmark]] (the identity system this pulls from) and [[impeccable]] (the code that implements it).
