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
| `gate.svg` | 4.31:1 | Gate's brand kit, horizontal colour variant for light backgrounds (`gate-horizontal-color.svg`; the kit also ships `-on-dark`) | 2026-09-06 | Wordmark `#14141E`, glyph `#0068FF` + `#17E6A1`. Supplied by the client after I failed to find it. Its 447×251 canvas is mostly padding — the artwork is 310.55×72 in the middle — so the crop matters more here than anywhere else. |
| `avantis.svg` | 5.34:1 | The vector avantisfi.com serves (`/images/avantis-logo.svg`), recoloured to the black of the official brand kit at docs.avantisfi.com/brand/avantis-brand-kit | 2026-09-07 | The site's vector is filled `white` for a dark background and the brand kit publishes "Avantis Black Logo — Horizontal" as PNG only. Recolouring the vector to `#000000` reproduces a variant the brand itself publishes rather than inventing one; the black was sampled from their own PNG, and the recoloured vector's 5.34:1 matches that PNG's 5.35:1, confirming it is the same lockup. Geometry untouched. |
| `deribit.svg` | 3.39:1 | The lockup deribit.com serves in its own header | 2026-09-06 | Authored dark-on-light: `#0A0B0D` wordmark, `#0052FF` glyph and "by coinbase". The site wraps it in `class="dark"` with an inline `<style>` that repaints every path white for its dark header; dropping that wrapper leaves the file's own colours untouched. No recolouring was done. |

## Rendered as text, no mark

None. Every venue carries its own mark. Binance keeps its name in `.vn-nm`
beside the glyph because its lockup is a bare diamond that does not spell the
name; that is a layout decision, not a missing asset.

## On recolouring

The rule on this page is that a mark is never recoloured to suit the
background, because that invents a variant its owner never approved. Avantis is
the one exception, and only because it is not an exception in substance: the
brand kit publishes a black horizontal logo alongside the white one, so black
is a sanctioned variant. What was missing was a black *vector*, the kit having
only PNG. Turning the official white vector black therefore reproduces
something the brand already publishes. Verified rather than assumed — the
colour was sampled from their own black PNG and the two lockups measure the
same.

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
