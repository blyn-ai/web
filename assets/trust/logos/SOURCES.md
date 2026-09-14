# Venue logo sources

Five crypto-venue logos, staged for the exchange-coverage block. The versions
the page actually uses are normalised copies in `assets/venues/`.

## NEEDS REVIEW — venue logos, provenance not recorded

These five arrived in the repository without a source record, so nothing below
is a provenance claim: it is what the files themselves contain. Each needs a
source URL, a licence note and a confidence rating before it is published, on
the same terms as the twelve above.

| File | Canvas | Paths | Colours in the file | What can be verified by inspection |
|---|---:|---:|---|---|
| `bitget.svg` | 480×160 | 9 | `#00F0FF`, `white` | Valid, self-contained, no external refs. Built for a **dark** background: the wordmark is `fill="white"`. |
| `bybit.svg` | 480×160 | 5 | `#FF9C2E` + four linear gradients | Valid, self-contained. Gradient ids are unprefixed (`paint0_linear_79_5699`), which can collide if several such files are ever inlined into one document. |
| `deribit.svg` | 480×160 | 3 | `#0052FF`, `#FFF` | Valid, self-contained. Also a **dark**-background variant — two of its three fills are white. |
| `hyperliquid.svg` | 480×160 | 13 | `#03211C` | Valid, self-contained. Near-black, so it needs a light background. Its thirteen fills arrived as `var(--token-6f446d9a-…, rgb(3,33,28))`, a Framer export artefact depending on a variable defined nowhere in this project; resolved to the literal on 2026-09-06. |
| `mexc.svg` | 480×160 | 2 | `#0057FF` | Valid, self-contained. Dark navy, so it needs a light background. |

## Rendering audit

Measured 2026-09-06 by rasterising each file at 160 px on a transparent ground
and comparing the mean colour of its opaque pixels against the two surfaces the
site actually uses: paper `#F7F4ED` and ink `#1A1712`. Contrast is the WCAG
ratio; below about 1.6 a mark is effectively invisible.

| File | Artwork height of 160 | vs paper | vs ink | Note |
|---|---:|---:|---:|---|
| `bitget.svg` | 114 | **1.27** | 5.61 | **invisible on paper** — needs a light-background variant |
| `bybit.svg` | 116 | 2.25 | 3.16 | works on both |
| `deribit.svg` | 112 | **1.34** | 5.32 | **invisible on paper** — needs a light-background variant |
| `hyperliquid.svg` | 60 | 6.76 | 1.06 | paper only |
| `mexc.svg` | 70 | 6.07 | 1.18 | paper only |

Two things the original validation list could not catch, both visible above.

**Contrast.** A white-on-transparent mark passes every mechanical check — valid
XML, transparent background, exact canvas, no clipping — and still disappears
on the page. Three files fail on paper today.

**Visual height.** The brief asked for marks that look balanced beside each
other, not for identical bounds. Actual artwork heights run from 52 px
(`alna-software`) to 118 px (`shell`, `vmi`, `vilniaus-vandenys`) on the same
160 px canvas — a factor of 2.3. In a marquee the small ones read as mistakes.
Evening this out means re-normalising the safe area per file, not rescaling the
canvas.
