# blynai.eu — build and design notes

What the site is and what the company is: [../README.md](../README.md). This file
is the working documentation. Every path below is relative to the repository
root, and every command is run from there.

The page is one static HTML file, no build step, no framework. The only script on
it is the twelve lines that open the disclaimer dialog.

Everything visual comes from the **BlynAI Capital design system**; nothing here
invents a colour, a size or a piece of copy.

```
index.html          the page
site.css            page styles — composed from design-system tokens only
og.png              1200x630 share card, rendered from og/og-card.html
favicon.ico         16 + 32 + 48, rendered from assets/favicon.svg
site.webmanifest    name, theme colour, app icons
robots.txt sitemap.xml

ds/                 the design system, vendored whole: readme, tokens, the 20
                    components, the four home directions, share cards, templates,
                    24 specimen cards. Only tokens/fonts.css is ours.
CLAUDE.md           what an agent needs to know before touching the design
.claude/skills/     the design system registered as the `blynai-design` skill
assets/             marks, coin marks, equity curves, member portraits, icons
fonts/              self-hosted woff2 (Space Grotesk, IBM Plex Sans, IBM Plex Mono)
og/og-card.html     source of og.png, at exactly 1200x630
aktas/              the founders' act, copied verbatim from the trading-bot repo:
                    aktas.pdf (linked from the registry block) and its own page
tools/              render.mjs (og.png + icons), fetch-fonts.mjs (webfonts)
```

## Which design was built

The design system ships four home-page directions. This page is the approved
one — **Variant 04 „Žurnalas“** (`ui_kits/website/HomeLedger.jsx`): the equity
curve carries the hero, the two syllables open the page, the ink stat strip sits
directly under the curve. Section order, type sizes, spacing and the narrow
(<= 760px) values are taken from that component; the head block, the in-page
anchors, the 760px breakpoint, the `background-clip:text` fallback, the
`align-items:start` hero fix and the 44px tap targets are taken from the
previously shipped page, which the design system's readme declares authoritative
on exactly those points.

The earlier hand-authored `index.html` (the one living in the trading-bot repo)
was **not** reused: it is the older „Dokumentas“-style layout with a different
H1, no equity curve, no stat strip, a 3px rule instead of 6px, and hard-coded
hex values instead of tokens.

House rules the page obeys: Lithuanian only, no performance numbers anywhere, no
green or red, no icon set and no emoji, the coin marks never restyled, and the
footer disclaimer reproduced verbatim.

## Deviations from the design system, and why

1. **Fonts are self-hosted** (`fonts/`, `ds/tokens/fonts.css`) instead of loaded
   from the Google Fonts CDN. An EU company page should not hand every visitor's
   IP to a third party for three typefaces. Sanctioned by the design system's
   readme; all three families are OFL. `ds/tokens/fonts.css` is the only file
   under `ds/` that is ours — everything else there is vendored verbatim.
2. **Member portraits are local** (`assets/founder-*.png`) instead of hot-linked
   to `meetluko.eu`.
3. **Styles are two linked files, not one inline `<style>` block.** The design
   system's production instructions say to copy `tokens/` and link `styles.css`;
   keeping that contract means a design-system update is a file copy, and the
   share card cannot drift from the page. Still no build step.
4. **The narrow-screen burger is a real menu** (`<details>`), not the design
   system's decorative button — the page has no JavaScript to open one, and a
   dead control is worse than no control.
5. **Content is capped to the 1160px canvas** (`--be-pad-x` in `site.css`). The
   design system says nothing is in a max-width container, but it draws every
   screen at 1160px, and its `ch`-capped measures (82ch note, 96ch legal) end at
   40% of a 1920px screen and read as broken line breaks. Bands keep their
   full-bleed backgrounds — header, stat strip, washes, equity curve and footer
   still run edge to edge; only the content inside them stays on the canvas, so
   the proportions match the design system's own renders at any width.
6. **The footer disclaimer sits behind „Skaityti plačiau“**, the same native
   `<dialog>` pattern the live journal uses (`showModal()`, close button, click
   on the backdrop, Esc from the browser). The footer keeps the first sentence;
   the dialog carries the text in full and verbatim, and a `<noscript>` block
   unfolds it into the footer band when scripting is off, so the compliance text
   is never hidden. The card itself is **paper**, not the journal's ink: this is
   a light document page, where the design system allows ink only as full-bleed
   bands and specifies cards as `#FFFDF8`, 6px, hairline, no shadow.
7. **Added:** `box-sizing:border-box` (the shipped page had it, `ds/tokens/base.css`
   does not), a `prefers-reduced-motion` block, `site.webmanifest`, `.nojekyll`
   (GitHub Pages would otherwise drop `ds/_ds_bundle.js`), and a schema.org
   Organization block containing only facts already on the page.

## Working on it

```bash
python3 -m http.server 8080     # then open http://127.0.0.1:8080
```

Re-render the share card and every icon after touching `og/og-card.html`,
`assets/favicon.svg` or `assets/logo-avatar-512.svg`:

```bash
node tools/render.mjs
```

Refresh the webfonts (rewrites `fonts/` and `ds/tokens/fonts.css`):

```bash
node tools/fetch-fonts.mjs
```

Both tools need only Node and a local Chrome; there are no npm dependencies and
no `package.json` on purpose.

## Deploying

Static hosting, document root at the repository root. Every path in the page is
relative, so the same files work three ways with no change: opened straight from
Finder (`file://`), served by any static server, and deployed at the domain root.
For GitHub Pages add a `CNAME` file containing `blynai.eu`.

## Open items

- `J. a. kodas` still reads *registruojama* — swap in the real company number in
  `index.html` once the registration completes.
- **`aktas/aktas.pdf` is the unsigned draft.** Its cover carries a NEPASIRAŠYTA
  stamp, the signature lines on page 3 are blank, and the header marks it
  VIDINIS DOKUMENTAS; by its own §7.1 it takes effect only once both founders
  sign. The registry block links to it as *"2026-08-24 pasirašytas steigėjų
  ketinimų aktas"*, so either a signed export replaces the file, or the link text
  drops the word *pasirašytas*. Its appendix also states a revenue target
  (5 000 USD/mėn.), which is the kind of number the brand rules keep off the
  site — worth a look before this goes public.
- Member portraits are 256x320; 512x512 originals would survive a retina screen
  better. The frame for Lukas is dropped 12% so the crop keeps his head.
- **The dialog's long disclaimer is new copy and wants a read-through.** Only its
  first three sentences come from the design system verbatim; the six sections
  after them were written here from facts already on the page, in the design
  system and in the founders' act (own funds only, two instances, no third-party
  assets, results are historical research data, open source as-is, company
  status). Nothing was copied from the live journal's disclaimer — that one is
  written for a project that is explicitly *not* a legal entity, the opposite of
  the MB. Worth a lawyer's eye before it goes public.
- No English version exists, by decision — do not add a language switch until
  an English page actually exists.
- No licence file yet. The site content is the company's; the software the
  company publishes is open source under its own repository.
