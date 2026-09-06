# Venue mark sources

Marks for the Venues block (`#infrastruktura`). Each file was normalised the
same way: editor cruft, `<title>`, `<desc>` and `<metadata>` stripped; the
`viewBox` cropped to the artwork's own bounding box, measured with `getBBox()`
rather than by eye, so no built-in padding shrinks the mark; and `width`/
`height` set so the intrinsic height is 40 px and the ratio is the artwork's
own. No file has a background plate, a white-only fill, or a `var()` colour.
Geometry and colour are otherwise untouched.

| File | Ratio | Source | Retrieved | Notes |
|---|---:|---|---|---|
| `kraken.svg` | 4.21:1 | `https://assets-cms.kraken.com/images/51n36hrp/facade/4d67f3f4eac6aa0702c6ae62b1e0b1abc41b10cd-650x155.svg`, the lockup kraken.com serves itself | 2026-09-06 | Official colour lockup, `#7132F5` + black. Includes the "by PAYWARD" endorsement line, which is only 35 % of the artwork height — see the per-mark CSS note below. |
| `binance.svg` | 1.00:1 | Wikimedia Commons, `File:Binance Logo.svg` | 2026-09-06 | Brand gold `#F3BA2F`. Glyph only — no wordmark — so the row sets the name beside it. |
| `okx.svg` | 3.56:1 | Wikimedia Commons, `File:OKX logo.svg` | 2026-09-06 | Black wordmark. |
| `coinbase.svg` | 5.60:1 | Wikimedia Commons, `File:Coinbase.svg` | 2026-09-06 | Blue wordmark, `#0052FF`. |
| `bitget.svg` | 3.32:1 | Wikimedia Commons, `File:Logo Bitget.svg` | 2026-09-06 | Teal `#03AAC1`, legible on paper. This replaces the white-on-cyan file in `assets/trust/logos/`, which is a dark-background variant. Had no `viewBox`; one was derived from its own `width`/`height`. |
| `weex.svg` | 4.79:1 | Carried over from `assets/logos/weex.svg` — see that folder's SOURCES.md | 2026-09-06 | Unchanged artwork, re-normalised. |
| `hyperliquid.svg` | 6.50:1 | Carried over from `assets/trust/logos/` | 2026-09-06 | Near-black `#03211C`. |
| `bybit.svg` | 2.89:1 | Carried over from `assets/trust/logos/` | 2026-09-06 | Gradients kept as authored. |
| `mexc.svg` | 5.39:1 | Carried over from `assets/trust/logos/` | 2026-09-06 | `#0057FF`. |
| `deribit.svg` | 3.39:1 | The lockup deribit.com serves in its own header | 2026-09-06 | Authored dark-on-light: `#0A0B0D` wordmark, `#0052FF` glyph and "by coinbase". The site wraps it in `class="dark"` with an inline `<style>` that repaints every path white for its dark header; dropping that wrapper leaves the file's own colours untouched. No recolouring was done. |

## Rendered as text, no mark

One venue carries its name in `.vn-nm` instead of an image, on the same terms
as everywhere else on this site: no look-alike is substituted and no mark is
recoloured to fit.

| Venue | Reason |
|---|---|
| Gate | Publishes no SVG of the current "Gate" identity. The site serves its logo as a raster, `gate.com/brand` and `gate.io/brand` both answer 403, and the only vector on Wikimedia is the retired "gate.io" wordmark, which would be stale branding. |

## The per-mark CSS rule

`.vn-mark img{max-height:19px}` gives every mark the same cap. Two are
exceptions, for the same reason: their official lockups set an endorsement line
under the wordmark — Kraken's "by PAYWARD" and Deribit's "by coinbase" — so the
name itself is only 65 % and 52 % of the file's height, measured rather than
estimated. At 19 px both read far smaller than their neighbours, so
`.vn-mark img[src*="kraken"], .vn-mark img[src*="deribit"]{max-height:26px}`.
26 px is the ceiling: `.vn-mark` is a 26 px row, and matching the others
exactly would need 29 px for Kraken and 36 px for Deribit. The endorsement
lines stay small either way; glyph-only marks with the name in text would
remove them, at the cost of breaking the rule that a mark spelling its own name
never repeats it.
