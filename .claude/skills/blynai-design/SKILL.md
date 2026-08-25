---
name: blynai-design
description: Use this skill to generate well-branded interfaces and assets for BlynAI Capital (MB „BlynAI“) — pages, share cards, prototypes or mocks. The full design system lives in ds/ at the root of this repository: tokens, 20 React primitives, four home-page directions, share cards, copyable templates and 24 specimen cards.
user-invocable: true
---

The design system is vendored in this repository at **`ds/`**. It is the same
package the designer shipped, unmodified except for `ds/tokens/fonts.css`
(rewritten to serve self-hosted woff2 from `/fonts` instead of the Google Fonts
CDN — the original is kept beside it as `fonts.cdn.css`).

**Read `ds/readme.md` first.** It carries the brand context, the content
fundamentals (voice, casing, the middle dot, the numbers rules), the visual
foundations, the iconography finding, the page/SEO shell and the caveats.

| Path | Read it for |
|---|---|
| `ds/readme.md` | **Start here.** Everything below is detail. |
| `ds/styles.css` | The single entry point — `@import`s all tokens. Link this one file. |
| `ds/tokens/*.css` | Colours (gold/violet axes), type scale, spacing literals, radii/shadows/motion, element defaults + `.blyn-grad` |
| `ds/assets/` | Mark, mono mark, 512 avatar, favicon, the two instance coins, equity curves |
| `ds/components/<group>/<Name>.jsx` | 20 React primitives, each with `.d.ts` props and `.prompt.md` usage notes |
| `ds/ui_kits/website/` | Four home-page directions. **`HomeLedger.jsx` is the approved one** — `index.html` at the repo root is its static implementation. |
| `ds/ui_kits/website/content.js` | All real Lithuanian copy and the real destination URLs. Do not invent copy. |
| `ds/ui_kits/social/OGCard.jsx` | Four 1200×630 share-card layouts |
| `ds/templates/` | Copyable starting files: `home-page`, `share-card` |
| `ds/guidelines/*.html` | 24 specimen cards — open in a browser to see the foundations rendered |
| `ds/uploads/` | The designer's original source studies, for provenance |

## Building another page in this repo

1. Copy the shell of `index.html`: same `<head>` block (title pattern, description
   ending on the limit, canonical, OG tags, `theme-color`, icons, font preloads),
   `<link rel="stylesheet" href="ds/styles.css">` then your own page stylesheet.
   Keep paths relative — the site must work from `file://` and from the domain.
2. Compose from tokens only. `site.css` is the worked example: every colour, size
   and space in it is a `var(--…)`, nothing is a literal.
3. Keep the 1160px canvas rule from `site.css` (`--be-pad-x`) so bands stay
   full-bleed while content stays centred and readable on wide screens.
4. One breakpoint, 760px. Narrow values live in the `narrow` branch of the
   matching component in `ds/ui_kits/`.
5. Render any raster output with `node tools/render.mjs` (add your page to it).

## Hard rules

- **Lithuanian only.** There is no English version; do not add a language switch.
- **No performance numbers, ever.** No returns, no win rate, no P&L. The equity
  curve is a drawing, never a data series.
- **No green or red.** A trading brand that deliberately refuses market colour.
- **No icon set and no emoji.** Numerals `01`–`04` in mono do the job icons do.
- **Never restyle the LUKO / BYKO coin marks** — they belong to the two members.
- The footer disclaimer is a compliance requirement: reproduce it verbatim,
  never trim it, never translate it.
- The gold→violet gradient appears in exactly four places: the rule under the
  header, one clause of one headline, the primary button, the equity curve.
