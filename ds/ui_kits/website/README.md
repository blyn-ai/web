# UI kit — blynai.eu (marketing site)

The company's public surface: one page, four candidate directions, Lithuanian first.

## Files
| File | What it is |
|---|---|
| `index.html` | Interactive shell — pick a variant, toggle 1160 px / 390 px. Registered as a starting point. |
| `content.js` | All copy as `window.BLYN`. Real text from the company pages, not lorem. |
| `HomeDocument.jsx` | **Variant A · Dokumentas** — light, academic. Ink header, gold→violet wash hero, gradient-clipped clause in the H1, BLYN/AI split, numbered research rows, registry beside members. |
| `HomeLab.jsx` | **Variant B · Laboratorija** — dark. Continues the trading bot's own console identity: 420 px name panel beside the hero, ink stat strip, three question cards. |
| `HomePoster.jsx` | **Variant C · Plakatas** — violet ink, 70 px poster display type, the two axes as full-bleed halves, four glass activity cards, pill buttons. |
| `HomeLedger.jsx` | **Variant D · Žurnalas** — light, and the equity curve carries the hero. Opens on the two syllables in mono, 6 px gradient rule, stat strip directly under the curve. |

## Notes
- Every screen composes design-system components only; none of them re-implement a button, a card or a header.
- Founder portraits load from `https://meetluko.eu/assets/founder-*.png` — the company's own images. There are no local copies in this project.
- Variant choice and width persist in `localStorage` so a refresh keeps your place.
