# blynai.eu — notes for agents

The public one-page site of MB „Blynai“ (wordmark: BlynAI Systems · L&D Finance
Lab, where L&D reads Learn & Develop). Static HTML, no build step, no framework.
The only scripts are two small inline blocks: the disclaimer `<dialog>` and the
telemetry fetch.

## Current page ("Home v2")

`index.html` implements the designer's "BlynAI Home v2" handoff: hero (finance
systems lab), live telemetry strip, Metodas (four verbs), Programa Nr. 1 with
the pipeline SVG, Ką išmokome, Kryptys, Komanda, Ko ieškome, the quiet Vardas
split, registry data, footer with the disclaimer dialog.
Two languages: **EN is the default at `/`**, LT lives at `/lt/`. Each is a real
static page served 200 — there is NO language-guessing redirect on `/` (that
is the SEO trap the client called out). The LT/EN switch is a plain link:
gold pills in the ink header, at every width — on mobile they sit between the
brand and the burger, never inside the menu (buried there, nobody finds them);
404.html carries the same pills without a burger. hreflang on both pages
(en→/, lt→/lt/, x-default→/ = EN); sitemap lists both with alternates.
**Copy lives in two files** — edit `index.html` (EN) and `lt/index.html` (LT)
together; `tools/stamp-css.mjs` stamps both.
The disclaimer dialog is per-language; the EN one opens with a line that the
Lithuanian text is authoritative (compliance copy must not read as a second
legal original).

## Facts and numbers

- The telemetry strip reads `GET /api/public-stats` (blynai.meetluko.eu, then
  the journal host). Contract:
  utc, lastCycleUtc, liveSinceUtc, marketsNow, decisionsTotal, instances[].
  Field names are frozen. Timestamps render in Europe/Vilnius. On failure the
  em dashes stay: the strip never invents a number.
- **CryptoSmith X coverage comes from its API, never from the markup.** The
  Venues grid, its summary lines, the trades sentence and every venue count or
  start date in the prose (`data-venues`, `data-sum`, `data-sub`, `data-trades`,
  `data-cov-live`, `data-cov-since`; on LT `data-cov-live-gen`/`-nom`, which
  carry the noun because Lithuanian declines it by the number) are filled on
  load from `GET cryptosmithx.blynai.eu/api/v1/exchanges` and `/v1/coverage`.
  The markup holds the last snapshot for crawlers and failed calls; refresh it
  when coverage changes, but never write a venue count into text the script does
  not own — meta descriptions and JSON-LD say "over each venue's own API" and no
  number, because they cannot be updated on load. Disabled venues are not
  shown. The API allows CORS only from https://blynai.eu, so a local server shows
  the snapshot, not live data.
- Prose numbers were verified against the trading-bot repo and live APIs
  (~150+ markets, 120 s cycle, LLM only picks the watchlist, dozens of signals,
  hundreds of config parameters). Do not restate numbers without re-verifying.

## Conventions that are easy to break

- **Paths stay relative** — the page must work from file://, any static server
  and the domain root.
- **One breakpoint: 760px.** Canvas is 1160px: gutters `max(72px, 50% - 508px)`
  (34px on ink); bands stay full-bleed, content stays centred.
- **Stamp the CSS after changing it:** `node tools/stamp-css.mjs` rewrites the
  `?v=` on stylesheet links. The zone overrides Cache-Control for static
  extensions (4 h), so an unstamped CSS change can pair stale styles with fresh
  markup for returning visitors.
- **ds/ is the design system tokens only** (styles.css + tokens/). fonts.css is
  self-hosted woff2 (fonts.cdn.css kept beside it for reference). Do not
  hand-edit tokens; do not invent colours, sizes or spacing outside them.
- **Brand rules:** Lithuanian only; no performance numbers, no green/red, no
  icon set, no emoji; the gradient appears as the rule, one headline clause,
  the primary button and the equity curve; disclaimer text is verbatim
  compliance copy — never trim or rephrase it.
- **Kept for the future, not linked from the page:** dokumentacija/ (CryptoSmith
  X holding page), assets/coin-luko.svg, assets/cryptosmith assets if any.
- **The site names one person: the director, Lukas Peciukonis.** The other
  member is referred to only as the technical Deployer — no name, portrait,
  personal links, CV or instance name, in pages, docs or asset filenames. There
  is no founders' act on the site; do not restore aktas/ or link a deed.
- `og/og-card.html` is the editable source of `assets/og-card.png` (approved
  variant 2a). `node tools/render.mjs` re-renders it plus favicon/app icons;
  the shipped PNG is the designer's render — regenerate only after copy edits.
