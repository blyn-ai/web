# blynai.eu — notes for agents

The public one-page site of MB „BlynAI“. Static HTML, no build step, no
framework. The only script is twelve inline lines that open the disclaimer
`<dialog>`; keep it that way.

## Before changing anything visual

**Load the `blynai-design` skill, or read `ds/readme.md` directly.** The whole
BlynAI Capital design system is vendored in `ds/` — tokens, 20 React primitives
with usage notes, four home-page directions, share cards, templates and 24
rendered specimen cards. Nothing on this site may invent a colour, a size, a
spacing value or a piece of copy: it all exists in there already.

`index.html` is the static implementation of the approved direction,
`ds/ui_kits/website/HomeLedger.jsx` ("Variant 04 · Žurnalas"). Real copy and real
destination URLs live in `ds/ui_kits/website/content.js`.

## Layout of this repo

| Path | What it is |
|---|---|
| `index.html`, `site.css` | the page; `site.css` composes design-system tokens only |
| `ds/` | the design system, vendored verbatim — only `tokens/fonts.css` is ours |
| `assets/`, `fonts/` | what the page actually ships (marks, coins, portraits, woff2) |
| `og/og-card.html` → `og.png` | the 1200×630 share card and its rendered output |
| `tools/render.mjs` | re-renders `og.png`, `favicon.ico` and the app icons |
| `tools/fetch-fonts.mjs` | re-downloads the woff2 set and rewrites `ds/tokens/fonts.css` |
| `docs/README.md` | build, design and maintenance notes, and the open items |
| `README.md` | the public face of the repo: what the company is, plus the disclaimer in English. Not a place for build notes. |

## Conventions that are easy to break

- **Paths stay relative.** The page must open from `file://`, from any static
  server and from the domain root without edits.
- **One breakpoint: 760px.** Narrow values come from the `narrow` branch of the
  matching design-system component, not from taste.
- **The sticky band owns `--be-topbar-h`.** The header and its gradient rule are
  pinned (`.be-topbar`), and `html{scroll-padding-top}` is derived from that
  variable so in-page anchors never land under the band. Change the header's
  height and you must change the variable at both breakpoints — 84px and 75px.
- **The 1160px canvas.** `--be-pad-x` in `site.css` keeps bands full-bleed while
  content stays on the canvas the design was drawn on. Do not replace it with a
  centred `max-width` wrapper — the bands must keep bleeding.
- **`ds/` is vendored.** Update it by copying a newer package over the folder,
  then restore `ds/tokens/fonts.css` (self-hosted fonts). Do not hand-edit it.
- **No new dependencies.** No npm, no package.json, no framework. The two tools
  need only Node and a local Chrome.
- **Ink is a band, not a card.** On this light document page the design system
  allows ink only full-bleed (header, stat strip, footer). Overlays and cards on
  it are paper: `#FFFDF8`, 6px, hairline, no shadow — see the disclaimer dialog.
- Hard brand rules (Lithuanian only, no performance numbers, no green/red, no
  icons or emoji, coin marks untouched, disclaimer verbatim) are listed in the
  skill and in `ds/readme.md`.
