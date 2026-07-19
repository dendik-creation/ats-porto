# Dendi' Setiawan — Portfolio

Personal portfolio site for Dendi' Setiawan, Fullstack Developer. Built as a static, content-driven Astro site: one CV data file feeds every section (hero, about, skills, projects, experience, volunteer, certifications, languages, contact), so the whole page is generated from a single source of truth rather than hand-authored markup.

Live: [dendikcreation.dev](https://dendikcreation.dev)

## Table of Contents

- [Design System](#design-system)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Content Model](#content-model)
- [Page Sections](#page-sections)
- [Getting Started](#getting-started)
- [Commands](#commands)

## Design System

The visual identity ("Hallmark") is defined once in [`src/styles/tokens.css`](src/styles/tokens.css) as CSS custom properties. Components consume these tokens and never hardcode color, type, or spacing.

**Palette** — warm bone paper, ink near-black, one signal accent:

| Token | Value | Role |
|---|---|---|
| `--paper` | `#f0ece1` | Primary surface |
| `--paper-deep` | `#e6e0d1` | Recessed panels |
| `--ink` | `#14130f` | Text & structure |
| `--accent` | `#f0330d` | Vermillion — the signature color |
| `--accent-ink` | `#b81f00` | Accent, AA-safe on paper |

**Typography** — a three-family specimen trio:

- **Fraunces Variable** (serif display) — the voice, used for headings
- **Bricolage Grotesque Variable** (sans) — the workhorse, used for body text
- **JetBrains Mono Variable** (mono) — used for eyebrows/labels (`.label`) and mono accents

Type scale is fluid (`clamp()`-based steps `--step--1` … `--step-4`) for poster-grade contrast between display and body text at any viewport.

**Other tokens**

- Spacing rhythm is deliberately uneven (`--space-2xs` … `--space-xl`), not one uniform gap.
- Motion uses a single easing curve (`--ease`) and two durations (`--dur-1`, `--dur-2`) — kept consistent everywhere via GSAP-driven animations and CSS transitions.
- Variable-font axis presets (`--wonk-off` / `--wonk-on`) drive a concrete-poetry text treatment used sparingly for emphasis.
- The page surface uses a faint dot-grid background (`radial-gradient` texture) so it never reads as a flat white/solid background.

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | [Astro](https://astro.build) 7 — static-first, component islands |
| Language | TypeScript |
| Styling | Plain CSS with custom properties (design tokens), no CSS framework |
| Animation | [GSAP](https://gsap.com) for scroll/entrance animation, custom page-transition script |
| Fonts | [Fontsource](https://fontsource.org) variable fonts — Fraunces, Bricolage Grotesque, Inter, JetBrains Mono |
| SEO | `@astrojs/sitemap` |

No UI framework (React/Vue/etc.) is used — every component is a native `.astro` component. No backend/database: content is static, compiled at build time from a local data file.

## Project Structure

Components follow atomic design (atoms → molecules → organisms):

```
src/
├── components/
│   ├── atoms/        # Tag, ArrowLink, SocialLink, BrandIcon, TagList, icons/*
│   ├── molecules/     # SectionHeader, ProjectCard
│   └── organisms/     # Hero, About, Skills, Projects, Experience, Volunteer,
│                       # Certifications, Languages, Contact, Nav, Lightbox,
│                       # PageTransition
├── data/
│   ├── cv.ts          # TypeScript types for the CV/content shape
│   ├── cv.data.ts     # The actual content — single source of truth
│   └── format.ts       # Formatting helpers (dates, etc.)
├── layouts/
│   └── Layout.astro    # Base HTML shell shared by all pages
├── pages/
│   ├── index.astro     # Home page — composes all sections
│   └── projects/[slug].astro  # Project detail page (dynamic route)
├── scripts/
│   ├── animate.ts             # GSAP animation setup
│   ├── page-transition.ts     # View-transition logic
│   └── scroll-to-section.ts   # Anchor scroll with nav-offset handling
└── styles/
    ├── tokens.css      # Design tokens (the Hallmark)
    └── global.css      # Reset + base element styles
```

## Content Model

All copy — bio, work history, projects, skills, certifications, languages, contact links — lives in [`src/data/cv.data.ts`](src/data/cv.data.ts), typed against [`src/data/cv.ts`](src/data/cv.ts). It's shaped from an ATS-style résumé JSON: no placeholder data lives in any component. To update site content, edit this file only; components re-render from it automatically.

## Page Sections

Rendered in order on the home page ([`src/pages/index.astro`](src/pages/index.astro)):

1. **Hero** — name, title, summary
2. **About**
3. **Skills** — grouped, with per-technology icons (`atoms/icons/`)
4. **Projects** — card grid linking to `/projects/[slug]` detail pages, with staggered image gallery and lightbox
5. **Experience** — work history timeline
6. **Volunteer**
7. **Certifications**
8. **Languages**
9. **Contact**

Cross-cutting features: fixed nav with anchor-based section scrolling (`scroll-to-section.ts`, offset by `--nav-offset` so content never lands under the bar), animated page transitions between home and project detail pages, and a lightbox for project imagery.

## Getting Started

Requires Node.js `>=22.12.0`.

```sh
npm install
npm run dev
```

Dev server runs at `localhost:4321`.

## Commands

| Command | Action |
|---|---|
| `npm install` | Install dependencies |
| `npm run dev` | Start local dev server |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run astro ...` | Run Astro CLI commands (e.g. `astro check`) |
