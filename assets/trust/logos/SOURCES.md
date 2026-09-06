# BlynAI marquee logo sources

This folder holds two sets: twelve organisations from the founders' prior
professional work, and five crypto venues for the exchange-coverage block.
Only the first twelve carry a researched provenance record — see NEEDS REVIEW
below for the rest.

Research and normalization completed 2026-09-03. Every delivered logo is a
self-contained, path-based SVG with a transparent background. No file embeds a
raster image, live text, remote font, external stylesheet, or remote image.

The artwork is visually centred on a 160 px-high canvas with an internal safe
area. Canvas widths are restricted to 160, 320, or 480 px. Normalization only
uses uniform scaling; no logo has been stretched.

## Source record

| Company | Output / canvas | Source URL | Source type | Original format | SVG status | Confidence and notes |
|---|---:|---|---|---|---|---|
| Shell | `shell.svg` — 160×160 | [Shell Global](https://www.shell.com/); [official brand history](https://www.shell.com/who-we-are/our-history/our-brand-history.html) | official | inline SVG | original vector paths; normalized only | **High** for the current full-colour Pecten. Identity note: the supplied label says “Shell AS”, while the public BlynAI-related portfolio evidence names **Shell plc**; the artwork itself is unambiguous. |
| Flinke Folk | `flinke-folk.svg` — 480×160 | [archived `ff_logo.png` from flinkefolk.com](https://web.archive.org/web/20141220213833id_/http://flinkefolk.com/images/ff_logo.png) | archive of official site | PNG, 260×85 (visible art 170×27) | **conservatively vectorized** from the archived original | **High.** The archived official asset visibly includes “FLINKE FOLK AS”. No archived vector version was found. |
| Lauresta | `lauresta.svg` — 480×160 | [official site logo](https://lauresta.lt/wp-content/uploads/2018/05/logo.png) | official | PNG, 303×66 | **conservatively vectorized** from the official original | **High.** Flat official navy/orange colours retained; no public vector original was found. |
| VMI | `vmi.svg` — 320×160 | [VMI official website](https://www.vmi.lt/evmi/) | official | inline SVG plus site CSS | original vector paths; official CSS fills internalized | **High.** Official green `#007D40` and white counterforms retained. |
| Vilniaus Vandenys | `vilniaus-vandenys.svg` — 320×160 | [official white vector lockup](https://www.vv.lt/wp-content/themes/vv/assets/img/logo-white-VV.svg); [official blue symbol](https://www.vv.lt/wp-content/themes/vv/assets/img/large-footer-logo-bg.svg) | official | SVG | original vector paths; white variant changed to the site's official blue `#17B3E2` | **High.** Geometry is untouched and the colour is taken from the current official asset family; this is not a raster trace. |
| BDO Global | `bdo-global.svg` — 320×160 | [Wikimedia vector record](https://commons.wikimedia.org/wiki/File:BDO_Deutsche_Warentreuhand_Logo.svg); [official current colour PNG used for identity check](https://cdn.bdo.global/images/bdo_logo/1.0.0/bdo_logo_color.png); [official private brand portal](https://brandfolder.com/bdo/) | Wikimedia, cross-checked against official | SVG | original vector paths; normalized only | **High.** The public vector matches the current BDO Global construction; the official downloadable brand portal requires authentication. |
| Lietuvos bankas | `lietuvos-bankas.svg` — 480×160 | [official print SVG](https://www.lb.lt/images/LB-logo-print.svg) | official | SVG | original vector paths; normalized only | **High.** Official black print lockup including “EUROSISTEMA”. |
| Alna Software | `alna-software.svg` — 480×160 | [archived official `a_3.png`](https://web.archive.org/web/20141231124906id_/http://www.alna.lt/assets/images/a_3.png); [archived Alna Software page](https://web.archive.org/web/20140217022658/http://www.alna.lt/alna-software/) | archive of official site | PNG, 124×17 | **conservatively vectorized** from the archived original | **High.** The asset is linked by the old official site specifically to “Alna Software”. No surviving vector was found. |
| Reiz Tech | `reiz-tech.svg` — 480×160 | [Reiz Tech official website](https://www.reiz.tech/) | official | inline SVG | original vector paths; normalized only | **High.** Current black horizontal mark and REIZ wordmark from the site's accessible SVG markup. |
| Codigy | `codigy.svg` — 160×160 | [Codigy official website](https://codi.gy/) | official | inline SVG | original vector paths; `currentColor` resolved to the site's official blue | **High.** Uses the official compact symbol from the current header. The adjacent live-font “codigy” text was intentionally omitted to keep the SVG font-independent. |
| Baltic Amadeus | `baltic-amadeus.svg` — 320×160 | [Baltic Amadeus official website](https://www.balticamadeus.com/); [official compact vector asset](https://cdn.prod.website-files.com/69007d40a1fd1ba990e44d80/6960b16bc4e61528a73fc2c1_baltic_amadeus.svg) | official | inline SVG | original vector paths; hover-only CSS removed | **High.** Default black/blue full lockup retained; no geometry or colour change. |
| Registrų Centras | `registru-centras.svg` — 320×160 | [official website](https://www.registrucentras.lt/); [official source-map bundle containing the SVG component](https://www.registrucentras.lt/assets/index-C22hnEMU.js.map) | official | JSX inline SVG | original vector paths; normalized only | **High.** Extracted exactly from the current official `Logo` component, including the green, cyan, and grey fills. |

## Conversion notes

Only Flinke Folk, Lauresta, and Alna Software required raster-to-vector
conversion. Each source was enlarged as an alpha mask, limited to the source's
flat brand colours, and traced without adding or redrawing artwork. The result
was then visually compared with the downloaded original.

`NEEDS REVIEW`: **none for logo artwork**. The Shell legal-suffix discrepancy is
recorded above because it concerns the requested company label, not the sourced
Pecten artwork.

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
| `alna-software.svg` | 52 | 2.72 | 2.62 | works on both |
| `baltic-amadeus.svg` | 66 | 12.37 | 1.73 | paper only |
| `bdo-global.svg` | 98 | 2.87 | 2.48 | works on both |
| `bitget.svg` | 114 | **1.27** | 5.61 | **invisible on paper** — needs a light-background variant |
| `bybit.svg` | 116 | 2.25 | 3.16 | works on both |
| `codigy.svg` | 100 | 1.91 | 3.73 | weak on paper |
| `deribit.svg` | 112 | **1.34** | 5.32 | **invisible on paper** — needs a light-background variant |
| `flinke-folk.svg` | 53 | 5.88 | 1.21 | paper only |
| `hyperliquid.svg` | 60 | 6.76 | 1.06 | paper only |
| `lauresta.svg` | 82 | 3.15 | 2.26 | works on both |
| `lietuvos-bankas.svg` | 94 | 20.15 | 2.83 | works on both |
| `mexc.svg` | 70 | 6.07 | 1.18 | paper only |
| `registru-centras.svg` | 80 | 2.12 | 3.36 | weak on paper |
| `reiz-tech.svg` | 116 | 20.15 | 2.83 | works on both |
| `shell.svg` | 118 | **1.46** | 4.88 | **invisible on paper** — the Pecten's yellow dominates |
| `vilniaus-vandenys.svg` | 118 | 1.60 | 4.47 | weak on paper |
| `vmi.svg` | 118 | 2.18 | 3.27 | weak on paper |

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
