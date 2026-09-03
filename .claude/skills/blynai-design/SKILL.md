---
name: blynai-design
description: Design rules and tokens for blynai.eu (MB „Blynai“ / BlynAI Systems). Use when changing anything visual on the site — the tokens live in ds/, the conventions in CLAUDE.md.
user-invocable: true
---

The design system is vendored as **tokens only**: link `ds/styles.css` and
compose from the custom properties in `ds/tokens/*.css` (colors, typography,
spacing, effects, base). The reference implementation is `index.html` +
`site.css` — copy patterns from there, never invent values.

Hard rules: Lithuanian only; no performance numbers, ever; no green or red; no
icon set and no emoji; the gold→violet gradient appears only as the header
rule, one headline clause, the primary button and the equity curve; cards on
paper are #FFFDF8, hairline border, 6px radius, no shadow; ink appears as
full-bleed bands only; the compliance disclaimer is reproduced verbatim.

Numbers on the page are measured or derived, never invented: the telemetry
strip reads /api/public-stats live, prose figures were verified against the
trading-bot repo — re-verify before changing any of them (see CLAUDE.md).
