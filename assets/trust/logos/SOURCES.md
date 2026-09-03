# BlynAI marquee logo sources

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
