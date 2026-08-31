# $BLYN token mark

Chosen option: **6d** ("5b rules, original mark") from the token-mark exploration.

## Construction (512 canvas, circle drawn in, corners transparent)

| Element | Geometry | Colour |
|---|---|---|
| Disc | r 256 | `#07060B` (--ink-850) |
| Outer rule | r 247, stroke 10 | `#F5B84F` (--gold-400) |
| Inner rule | r 226, stroke 6 | `#A18AFF` @ 80% (--violet-400) |
| Brackets | site mark, translate(72 72) scale(9.2), stroke 2.75, round caps | gradient `#FFD987` → `#F5B84F` |
| Dots (2×2) | r 2.1 at (17,17.5) (23,17.5) (17,22.5) (23,22.5) | `#FFD987` / `#C8963B` diagonal |

The mark is `assets/logo-mark.svg` unchanged. Violet appears only in the inner rule — the AI axis is present but does not compete with the mark.

## Files

- `blyn-coin.svg` — master, 512 viewBox, scales to any size
- `blyn-coin-512.png` — listings, docs, press
- `blyn-coin-256.png` — token lists (Uniswap, wallets)
- `blyn-coin-64.png` / `blyn-coin-32.png` — table rows, Basescan

All PNGs have transparent corners: the disc is the artwork, so a host that crops to a circle and a host that shows the square both look right.

## Rules

- Do not recolour the rules or the mark. No third hue, no red/green.
- Below 24 px the inner violet rule merges into the edge. That is intended — do not thicken it to compensate.
- The disc is never light. There is no paper variant of the coin; on light backgrounds the dark disc is the contrast.
- Ticker: `$BLYN`. ERC-20, Base.
