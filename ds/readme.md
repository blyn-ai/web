# BlynAI Capital — design system

The brand system for **MB „BlynAI“** (trade name *BlynAI Capital*, descriptor *L&D Finance Lab*), a Lithuanian **mažoji bendrija** — a two-member private partnership — that writes algorithmic crypto-trading software, runs it on its own money, and publishes every decision the software makes, including the wrong ones. The software is released as open source so a third party can reproduce the result without the company's help.

The company is explicitly **not** a financial institution, not an asset manager, and not a financial-services provider. It gives no investment advice, holds no third-party money or crypto, and manages no third-party exchange accounts. That constraint is not fine print — it shapes the whole design language, which is why this system has no dashboards, no performance charts with real numbers, and no green/red market colours.

## Context

| | |
|---|---|
| Legal name | MB „BlynAI“ — always with the Lithuanian low-high quotes, never "MB BlynAI" |
| Trade name | BlynAI Capital |
| Descriptor | L&D Finance Lab (L = Lukas, D = Denisas) |
| Domain | blynai.eu |
| Members | Lukas Peciukonis (director, 50%, Λ) · Denisas Bykovas (member, 50%, Δ) |
| Instances | **LUKO** — blynai.meetluko.eu · **BYKO** — blynai.bykovas.lt |
| Primary language | **Lithuanian only.** The earlier studies showed an LT · EN switch; the shipped page removes it because no EN version exists yet. `SiteHeader` therefore hides the switch unless `lang` is passed. |
| Live journal | https://blynai.meetluko.eu |
| Source code | https://github.com/bykovas/trading-bot |
| Contact | info@blynai.eu |
| Registration | Company number stated as "registruojama" (in registration) — the brand states unknowns plainly |

### The name

The name carries two readings on purpose:

- **BLYN** — *Blockchain Ledger Yield Numerics*: what gets measured. Chain data, the order journal, the equity curve, and the numbers derivable from them. **Gold.**
- **AI** — *Algorithmic Inference*: what gets done with it. A conclusion and an order, decided by rules rather than instinct. **Violet.**
- In Lithuanian the same word reads as *„blynai"* — pancakes. The brand keeps both readings: the first explains what the company does, the second admits it is not more serious than it is.

Those two axes — gold measurement, violet inference — are the entire colour system. Everything else is ink, paper, or neutral text.

## Sources this system was built from

Everything here was lifted from files the user supplied; nothing was invented from memory of a similar company.

| Source | What was taken from it |
|---|---|
| `uploads/MB BlynAI Home Variants.dc.html` | Three home-page directions (dark lab / light document / violet poster) plus a 390px mobile version. Source of truth for type sizes, section gutters, the BLYN/AI split, the numbered research rows, the registry list, member cards and the legal footer. |
| `uploads/OG BlynAI EU.dc.html` | Fifteen 1200×630 share-card studies, each paired with a Messenger bubble at 328px. Source of the gradient rule, the equity-curve motif, the large lockup, and the mono footer line. |
| `uploads/blynai-telegram-1a.svg` | The brand mark at 512px on a radial-gradient dark ground — the Telegram/avatar form. |
| `uploads/index.html` | **The shipped blynai.eu page** — one static file, hand-authored, with its own commentary on why each decision was made. Source of truth for the real destination URLs, the nav labels and in-page anchors, the 760px breakpoint, the `background-clip:text` fallback, the 44px hero top padding, the `align-items:start` hero fix, the 167px member-portrait alignment, and the full head/SEO/favicon block. Where this file and the earlier variant studies disagree, **this file wins**. |
| Referenced but external | The uploads link a previously bound design system at `_ds/blynai-capital-design-system-1cc724d9-c3cb-4e08-98a0-4eede07642e9/` (`tokens/fonts.css`, `colors.css`, `typography.css`, `effects.css`, `styles.css`). **That folder is not part of this project and was not readable.** Token values here were re-derived from the literal values in the two uploaded pages, so names may differ from that earlier system even where values match. |
| Referenced but external | Founder portraits load from `https://meetluko.eu/assets/founder-lukas.png` and `founder-denisas.png`. No local copies exist — see Caveats. |

## Index

| Path | What it is |
|---|---|
| `styles.css` | The one file consumers link. Nothing but `@import` lines. |
| `tokens/fonts.css` | Google Fonts import for Space Grotesk, IBM Plex Sans, IBM Plex Mono |
| `tokens/colors.css` | Gold axis, violet axis, ink, paper, text ramps, member marks, gradients, washes |
| `tokens/typography.css` | Three faces, the literal size scale, tracking, line heights, composed type roles |
| `tokens/spacing.css` | Space scale, section gutters, control heights, the brand's named grids |
| `tokens/effects.css` | Radii, the three shadows, rule weights, motion |
| `tokens/base.css` | Element defaults — thin on purpose |
| `assets/` | `logo-mark.svg`, `logo-mark-mono.svg`, `logo-avatar-512.svg`, `favicon.svg`, `coin-luko.svg`, `coin-byko.svg`, `equity-curve-band.svg`, `equity-curve-full.svg` |
| `guidelines/*.html` | 24 foundation specimen cards (Colors, Type, Spacing, Effects, Brand) |
| `components/brand/` | LogoMark, Wordmark, GradientRule, EquityCurve |
| `components/core/` | Button, Eyebrow, Badge, Card |
| `components/layout/` | SiteHeader, SiteFooter, Section, DualPanel |
| `components/data/` | DefinitionList, NumberedList, StatBar, StatusPanel |
| `components/blocks/` | SyllableSplit, CoinCard, MemberCard, FeatureCard |
| `ui_kits/website/` | blynai.eu home page — four full variants, desktop + 390px. **Variant 04 „Žurnalas" is the approved direction.** Start here. |
| `ui_kits/social/` | Four 1200×630 share cards, each in a Messenger bubble |
| `templates/home-page/` | `HomePage.dc.html` — copyable one-page company site, matched to the shipped page (real links, in-page anchors, no language switch) |
| `templates/share-card/` | `ShareCard.dc.html` — the 1200×630 Open Graph card at exact size |
| `thumbnail.html` | Homepage tile |
| `SKILL.md` | Agent Skills front matter for use in Claude Code |

## CONTENT FUNDAMENTALS

**Language.** Lithuanian first, with correct diacritics and the Lithuanian quote form `„…“`. English exists as a language switch, never as the default. Never machine-translate the legal disclaimer.

**Person.** The company writes as **"we"** (*kuriame, matuojame, skelbiame, tikriname*) and almost never addresses the reader as "you". There is no second person in the source copy at all. The reader is a witness, not a customer — which follows from the company having no customers.

**Casing.** Sentence case in prose and in headings. Uppercase is reserved for two things: mono eyebrows/nav (set via `text-transform`, written sentence case in source) and the two syllables BLYN / AI. No Title Case Headings Anywhere.

**Sentence shape.** Short declaratives, often two clauses joined by an em dash where the second clause is the limit or the catch:

> „Kiekvienas orderis įrašomas su signalais, rizikos ribomis ir atmestomis alternatyvomis. Jei sprendimo negalima perskaityti po savaitės — jis netinka tyrimui."

> „Matuojame ne pelną, o atotrūkį tarp dviejų kreivių."

> „Klientų lėšų — nėra ir nebus."

> „Nepavykę eksperimentai skelbiami taip pat, kaip pavykę."

**The middle dot.** `·` is the brand's connector, in eyebrows, meta lines, role lines and button labels: *"Mažoji bendrija · įsteigta Lietuvoje"*, *"Nariai · po 50 %"*, *"GitHub · atvirasis kodas"*, *"MB vadovas · Λ"*, *"blynai.eu · © 2026 MB „BlynAI“"*.

**Numbers.** Zero-padded indices (`01`–`04`). A space before `%` (`po 50 %`). Unknown facts stated as facts: *"registruojama"*, not "TBD" and not omitted. **No performance numbers appear anywhere in the brand system** — no returns, no Sharpe, no win rate. The equity curve is a drawing, never a data series.

**Tone.** Dry, exact, faintly self-deprecating. It states limits with the same weight as capabilities, and the limits are usually the punchline: *"…kad nesame rimtesni, nei esame."* / *"Nevaldome trečiųjų asmenų lėšų, neteikiame rekomendacijų, nepriimame investicijų. Niekada."* Never hype, never "revolutionary", never a growth claim.

**Emoji.** None. Not in copy, not in UI, not in social cards. The only non-Latin glyphs used are the Greek initials **Λ** and **Δ** for the two members, the middle dot `·`, the multiplication sign `×`, and the em dash.

**Button labels.** Noun phrases, two to four words: *"Gyvas žurnalas"*, *"Tyrimų programa"*, *"GitHub · atvirasis kodas"*. Never verbs in the imperative, never "Learn more".

**Section names (eyebrows).** Two to four words, registry-flavoured: *Tyrimų kryptys · Vardas · du skiemenys · Du nariai, dvi valiutos · Registro duomenys · Nariai · po 50 % · Rekvizitai · Būsena*.

## VISUAL FOUNDATIONS

**The one idea.** A gold-to-violet axis, read left to right, measurement into inference. It appears in exactly four forms and nowhere else: the 3–6px rule under the header, a gradient clipped to one clause of one headline, the primary button fill, and the equity curve. Reach for a fifth use and the system is being misused.

**Colour.** Two saturated axes and nothing else. Gold `#FFD987 → #8A6320` (nine steps), violet `#DCD3F5 → #5B3FC4` (seven), meeting at one bridge tone `#C98F63`. Neutrals are warm, never grey: six near-blacks (`#050505` … `#1A1712`, chosen by which axis the surface leans toward — `#0A0812` leans violet, `#0A0B09` leans green-black) and five warm off-whites (`#FFFDF8` … `#E9E6E0`). **Pure white and pure grey are never used.** Text has three separate ramps: stone on paper, sand on ink, lilac on violet-ink. There is no green and no red — a system about trading that refuses market-convention colour, because it publishes research, not P&L.

**Two backgrounds per document, maximum.** A light page alternates `--paper-100` and `--paper-000`; a dark page alternates `--ink-780` and transparent over one gradient. Never three.

**Type.** Three faces, three jobs, no overlap. **Space Grotesk** for display and UI labels, weight 400 on light documents (the airy, editorial voice) and 700 on dark ones (the console voice), always with negative tracking: −.035em at hero size, −.02em at H2, −.015em at H3. **IBM Plex Sans** for every running paragraph, 1.6 line-height, measures capped in `ch` (56ch lead, 46ch body, 96ch legal). **IBM Plex Mono** for every eyebrow, every registry row, every number, every footer line — .2em tracking uppercase for eyebrows, .12em for footers. The mono is what makes the brand read as a lab notebook rather than a fintech landing page.

**Layout.** Full-bleed horizontal bands, stacked, separated by 1px hairlines. Nothing is centred; nothing is in a `max-width` container with side margins. Gutters are `72px` on light document pages, `34px` on dark lab pages, `18px` at 390px. Recurring grids: `1fr / 320px` hero with an aside, `1fr / 1px / 1fr` split with a divider, `64px / 1fr / 1.1fr` numbered rows, `repeat(3–4, 1fr)` card banks. Nothing is fixed or sticky in the brand pages themselves — the sticky bar in `ui_kits/website/index.html` is presentation chrome, not part of the design.

**Spacing.** Not a 4px grid, and deliberately so: `9, 11, 13, 18, 22, 26, 34` all appear in the source. Copy the literal values from `tokens/spacing.css`; do not round them.

**Backgrounds.** No photography as background, no repeating patterns, no textures, no grain. Two devices only:
- **Paired radial washes** — a gold field north-west and a violet field south-east, at 13–30% alpha over paper or ink. Always paired; a lone wash reads as a mistake.
- **The equity curve** — a stepped gain line, gold at bottom-left into violet at top-right, either as a 190px footer band or filling a 630px card. It is the only illustration in the system.

**Imagery.** Only two kinds exist: the two member portraits (warm, natural, plainly lit, no filter, cropped square with `object-position` tuning) and the two instance coin marks. Colour vibe is warm and unfiltered — no b&w, no cool grade, no grain. There is no stock photography and there are no illustrations of people or abstractions.

**Corner radii.** The surface decides. On paper: `6px` for buttons and cards, `3px` for portrait plates, `4px` for badges. On ink: `12–16px` for cards, `10–18px` for the logo plate. Pills (`999px`) only in the poster variant. The radius shift between light and dark is intentional — paper is a document, ink is an instrument.

**Cards.** On paper: a hairline border `rgba(26,23,18,.14–.22)`, `#FFFDF8` fill, `6px` radius, and **no drop shadow** — at most a 1px violet edge `0 1px 0 rgba(107,78,219,.06)`. On ink: `rgba(17,18,15,.9)` fill, gold-tinted hairline, `14px` radius. Glass cards (`rgba(255,255,255,.035)` + violet hairline, `16px`) only over a wash or the curve. Never a card with a coloured left border.

**Shadows.** Three in the whole system, and two of them belong to the logo: `--shadow-card` (`0 2px 10px rgba(0,0,0,.08)`, used for presentation frames, not page content), `--shadow-mark` (`inset 0 1px 0 rgba(255,255,255,.04), 0 0 22px rgba(245,184,79,.14)`) and `--shadow-mark-lg` (`0 0 32px rgba(245,184,79,.18)`). The mark's gold glow is the only glow permitted anywhere.

**Transparency and blur.** Transparency is used constantly and quietly — every border, wash and tint is an rgba value, so surfaces read through each other. Blur is used almost never: only on glass cards sitting over a wash or the curve, where a solid fill would kill the gradient underneath. No frosted navigation bars.

**Protection.** Type never sits on imagery, so there are no protection gradients and no capsules. Contrast is solved by band, not by scrim: the header is its own ink band, the footer is its own ink band.

**Rules and separators**, loudest to quietest: the 6px gradient rule (once per surface, directly under the header); a 2px solid ink rule (only above the BLYN/AI split); a 1px hairline (between sections and list rows); a 1px vertical gradient divider (only where the two columns map to the gold and violet axes).

**Motion.** Almost none, by design. 120–180ms on `cubic-bezier(.2,.6,.2,1)`, colour and border only. Nothing scales, nothing bounces, nothing slides in on scroll, nothing loops. A system that publishes losses does not animate.

**States.** Hover changes colour, never geometry: gold fills lighten to `#FFD987`; the gradient button gets `brightness(1.1)`; outline buttons take a 5% ink tint and keep their border; nav links lift from `--sand-200` to `--gold-200`; links go from violet to `--gold-900` on paper and gold-400 → gold-300 on ink. Press states are not separately defined in the source — use the hover colour with no transform. Disabled is `opacity:.45`, no colour change. Focus is a 2px violet outline at 2px offset. **Nothing shrinks on press** — the tactile-button idiom is wrong for this brand.

**Minimum sizes.** Mono eyebrows never below 10px. Body never below 12.5px. Tap targets never below 44px. Share-card headlines never below 52px (they are read at 27% in a chat bubble — that is 14px).

## ICONOGRAPHY

**There is no icon set, and that is the finding, not a gap.** Across both uploaded sources — a full three-variant home page, a mobile version, and fifteen share cards — not one UI icon appears. No arrows, no chevrons in buttons, no social glyphs, no feature icons. The brand communicates entirely through type, rules, numerals and two-tone fields.

What exists instead:

1. **The brand mark** — two gold chevrons enclosing a 2×2 ledger of dots (`assets/logo-mark.svg`, 40×40 viewBox, 2.6 stroke, round caps). It reads as brackets around data. Copied verbatim from `uploads/blynai-telegram-1a.svg`; also supplied as `logo-mark-mono.svg` (currentColor) and `logo-avatar-512.svg` (the 512px avatar with its radial ground).
2. **Two instance coin marks** — `coin-luko.svg` (gold `L` on `#0A0A0A` with a ring) and `coin-byko.svg` (dark `>` on `#7CCBFF`). These are the *members' own* marks, not brand assets: never recolour them, never restyle them to match the gold, never show one without the other.
3. **The equity curve** — `equity-curve-band.svg` / `equity-curve-full.svg`. Illustration, not iconography.
4. **Numerals as icons** — `01`–`04` in IBM Plex Mono, colour-ramped from gold to violet across a list. This is the brand's substitute for feature icons, and the reason no icon set is needed.
5. **Unicode as icons** — `·` (connector), `×` (LUKO × BYKO), `Λ` / `Δ` (member initials), `‹` (only inside the Messenger mock, which is a foreign UI). Nothing else.
6. **Emoji** — never.

**If you genuinely need an icon** (a burger for the 390px header, an external-link marker): draw it from primitives at 1.5px stroke in `--sand-200`, as `SiteHeader`'s burger does — three 17×1.5px bars. Do **not** import Lucide, Heroicons or any other set: the stroke vocabulary would not match the mark's 2.6/40 weight, and a full icon library in a brand that uses zero icons is a liability. If a future product surface (an admin console, a journal viewer) needs real iconography, that decision should be made from that product's code, not guessed here.

## PAGE SHELL, SEO AND FAVICONS

The shipped page is **one static HTML file** — no build step, no framework, one stylesheet block, a single `760px` breakpoint serving both widths. Keep that shape; it is a deliberate constraint for a two-person company.

**Required head block** (see the *Page head & favicons* card):

- `<title>` — "MB „BlynAI“ — algoritminės prekybos tyrimų bendrija". Legal name first, then the descriptor.
- `<meta name="description">` — ends on the limit, not the pitch: *"…Finansinių paslaugų neteikiame."*
- `rel="canonical"` → `https://blynai.eu/`
- `og:type=website`, `og:url`, `og:title`, `og:description` ("Algoritminė prekyba kriptovaliutomis. Tyrimai, inovacijos, sprendimai."), `og:image` → `/og.png` at exactly **1200×630**, `og:image:alt`, `og:locale=lt_LT`
- `twitter:card=summary_large_image`
- `theme-color` → `#050505` — the header ink, so mobile browser chrome continues the brand band
- Icons: `/favicon.ico` (32×32), `/assets/favicon.svg`, `/assets/apple-touch-icon.png`
- Fonts preconnected to `fonts.googleapis.com` and `fonts.gstatic.com` before the stylesheet link

**Favicon.** `assets/favicon.svg` — the mark on `#12100B` with a 96px corner radius and the chevron stroke thickened to 3.2 so it survives 16px. At 16px the four dots merge into two; the chevrons still read. Do not use the transparent `logo-mark.svg` as a favicon.

**Anchors.** The nav is in-page: `Apie → #vardas`, `Tyrimai → #tyrimai`, `Nariai → #nariai`, `Kontaktai → #rekvizitai`. There are no sub-pages.

**Accessibility, carried over from the shipped file.** The primary button uses the darkened gradient (`#8A6320 → #5B3FC4`) rather than `#F5B84F`, because white on raw gold measures about 1.9:1. Narrow-screen tap targets reach 44px by giving the brand lockup `min-height:44px` and the mail link `padding:14px 0; margin:-14px 0`, so the hit area grows without moving the line.

**Two layout fixes worth preserving.** The hero grid is `align-items:start` — with `end`, the 147px status card sank to the bottom of a 341px row and left the whole top-right corner empty. And the member portraits are sized by **height** (167px, `width:auto`, `aspect-ratio:1`) so the pair aligns to the bottom of the registry list beside it — reverted to full width below 760px, where the column it aligned to no longer exists.

## Intentional additions

The sources are hand-authored pages with inline styles, not a component library, so this system's inventory was derived from what those pages actually build. Four things go slightly beyond what the sources literally show, and are flagged here:

1. **Interaction states.** The uploads are static mock-ups with no hover, focus, press or disabled states. The states documented above and implemented in `Button` are authored conventions consistent with the brand's restraint (colour-only, 120–180ms). **Confirm them.**
2. **`Badge`.** The sources use small mono chips only in the presentation chrome (the `1a` / `2b` option labels), not in the product. `Badge` generalises that treatment for real use.
3. **`EquityCurve` as a component.** In the sources the curve is pasted SVG per card. Made reusable with `variant` / `direction` / `tone`.
4. **`Card` tones and `Section` tones.** Generalised from the four card treatments and five section backgrounds observed, so consumers stop hand-rolling containers.

Everything else — LogoMark, Wordmark, GradientRule, Button, Eyebrow, SiteHeader, SiteFooter, Section, DualPanel, DefinitionList, NumberedList, StatBar, StatusPanel, SyllableSplit, CoinCard, MemberCard, FeatureCard — maps one-to-one onto a block that exists in the uploaded pages.

## Caveats

- **Fonts are Google-hosted.** Space Grotesk, IBM Plex Sans and IBM Plex Mono are named in the sources but no font binaries were supplied, so `tokens/fonts.css` imports them from the Google Fonts CDN. All three are genuinely Google Fonts, so this is the correct source rather than a substitution — but if the company self-hosts woff2 files, send them and this becomes real `@font-face` rules.
- **Founder portraits are hot-linked** to `meetluko.eu`. On the live site they are local (`/assets/founder-lukas.png`, `/assets/founder-denisas.png`, 256×256, `loading="lazy"`); this project has no copies, so they will not render offline or in an exported bundle. Send the two PNGs and they go into `assets/`.
- **`og.png` is not in this project.** The live head points at `https://blynai.eu/og.png`. Render it from `templates/share-card/ShareCard.dc.html` or `ui_kits/social/index.html` at exactly 1200×630.
- **`favicon.ico` and `apple-touch-icon.png` are not generated** — only `favicon.svg`. Both raster forms still need exporting from it.
- **The earlier design system** referenced by the uploads (`_ds/blynai-capital-design-system-1cc724d9-…`) was not accessible. Token *names* here are new; token *values* are taken from the uploaded pages.
- **No English copy exists at all.** The shipped page dropped the LT · EN switch because there is no EN page. Every screen in this system is Lithuanian.
