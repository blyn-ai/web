# Brief: refresh the OG / social-share card

The shipped `assets/og-card.png` is now out of date on two counts and needs a
new render. Everything else about the card — layout, washes, gradient rule,
equity curve, proportions — stays exactly as you built it.

## What changed on the site

1. **The wordmark is now `BlynAI Systems`.** "Capital" is retired brand-wide —
   it read as a fund / asset manager, which is precisely what the company is
   not, and it clashed with the legal disclaimer. The card still says
   "BlynAI Capital".
2. **The site is now bilingual**: English at `/` (default, x-default) and
   Lithuanian at `/lt/`. Both pages currently point at the *same* Lithuanian
   card, so an English visitor sharing the root gets a Lithuanian preview.
3. **The headline changed.** The hero now reads (EN):
   *We learn by building and ship what we've learned. / Test in live markets.
   Measure what works, and publish what doesn't.*
   (LT): *Mokomės kurdami ir išleidžiame tai, ko išmokome. / Tikriname gyvose
   rinkose. Matuojame, kas veikia, ir skelbiame, kas ne.*

## Deliverables

Two cards, 1200×630, same design, different language:

| File | Language | Used by |
|---|---|---|
| `og-card.png` | English | `/` (root, default) |
| `og-card-lt.png` | Lithuanian | `/lt/` |

## Copy

**Lockup (both cards, unchanged apart from the name)**
- Wordmark: `BlynAI Systems` — "Blyn" cream, "AI" gold-700, "Systems" cream.
  Never "Capital".
- Sub-line: `L&D FINANCE LAB`, violet-700, mono, uppercase.

**Tagline — English card**
> Financial systems, proven in live markets.

**Tagline — Lithuanian card**
> Finansų sistemos, patikrintos gyvose rinkose.

Line 1 in ink, line 2 in the gold→violet gradient text, as now. If you prefer
to carry the full hero line instead of this condensed pair, it is your call —
but at 48px the hero sentence runs long, which is why it is shortened here.

**Domain line:** `BLYNAI.EU`, mono, uppercase, right-aligned — unchanged.

## Unchanged specs (for reference)

Light paper ground with the gold/violet washes; 8px gold→violet gradient rule
at the top; mark on the ink plate, gold border, no outer glow; full-bleed
equity-curve SVG along the bottom, 6px stroke. `logo-mark.svg` is byte-identical
to the repo's — do not redraw it.

## Rules that still apply

- No performance numbers of any kind — no returns, no win rate, no P&L.
- No green or red.
- No icons, no emoji, no stock imagery.
- Lithuanian is the authoritative language for legal copy; the English card is
  a mirror, not a separate claim.

## Handover

Send both PNGs at exactly 1200×630 (1×). We will drop them into `assets/` and
point each page's `og:image` at its own language. If you also ship the HTML
source, we keep it in `og/` so the copy can be edited later without a re-render.
