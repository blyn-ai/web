---
name: blynai-design
description: Use this skill to generate well-branded interfaces and assets for BlynAI Capital (MB „BlynAI“), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for protoyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## What is in here

| Path | Read it for |
|---|---|
| `readme.md` | **Start here.** Brand context, content fundamentals, visual foundations, iconography, page shell / SEO, caveats. |
| `styles.css` | The single entry point. `@import`s everything below. Link this one file. |
| `tokens/colors.css` | Gold axis (BLYN) / violet axis (AI), ink, paper, text ramps, gradients, washes |
| `tokens/typography.css` | Space Grotesk / IBM Plex Sans / IBM Plex Mono, the literal size scale, tracking |
| `tokens/spacing.css` | Space scale (not a 4px grid — copy the literals), gutters, control heights |
| `tokens/effects.css` | Radii, the three shadows, rule weights, motion |
| `tokens/base.css` | Element defaults + the `.blyn-grad` headline utility (with its `@supports` fallback) |
| `assets/` | Mark, mono mark, 512 avatar, favicon, the two instance coins, equity curve |
| `components/<group>/<Name>.jsx` | React source for the 20 primitives, plus `.d.ts` props and `.prompt.md` usage |
| `ui_kits/website/` | The four home-page directions. **`HomeLedger.jsx` is the approved one.** |
| `ui_kits/social/` | 1200×630 share cards |
| `templates/` | Copyable starting files: `home-page`, `share-card` |
| `guidelines/*.html` | 24 specimen cards — open them in a browser to see the foundations rendered |

## Using it in production code

1. Copy `styles.css` and the whole `tokens/` folder into your project, then link `styles.css` once. Everything downstream is plain CSS custom properties — no build step, no preprocessor.
2. Copy the `assets/` files you actually reference.
3. The `components/*.jsx` files are plain React with `import React from "react"` and inline styles referencing the custom properties. Drop them in as-is, or read them and re-implement in your framework — the `.d.ts` is the props contract and the `.prompt.md` says when to use each.
4. `ui_kits/website/HomeLedger.jsx` is the approved blynai.eu home page composed from those primitives. `ui_kits/website/content.js` holds all real copy and the real destination URLs.

## Hard rules

- **Lithuanian only.** There is no English version; do not add a language switch.
- **No performance numbers, ever.** No returns, no win rate, no P&L. The equity curve is a drawing.
- **No green or red.** A trading brand that deliberately refuses market-convention colour.
- **No icon set and no emoji.** Numerals `01`–`04` in mono do the job icons usually do.
- **Never restyle the LUKO / BYKO coin marks** — they belong to the two members, not to the brand.
- The footer disclaimer is a compliance requirement. Reproduce it verbatim; never trim or translate it.
