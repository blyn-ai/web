Use SiteHeader at the top of every blynai.eu surface, immediately followed by GradientRule.

```jsx
<SiteHeader nav={[{ label: "Apie" }, { label: "Tyrimai" }, { label: "Publikacijos" }, { label: "Kontaktai" }]} />
<GradientRule />
```

- The header is ink even on the light document page — it is the brand band, not part of the page surface.
- Nav labels are single Lithuanian nouns, uppercase via CSS, never sentence case in source. The shipped set is Apie / Tyrimai / Nariai / Kontaktai, pointing at in-page anchors `#vardas` `#tyrimai` `#nariai` `#rekvizitai`.
- **No language switch by default.** blynai.eu is Lithuanian only; pass `lang="LT"` only once an EN page actually exists.
- `compact` at 390px.
