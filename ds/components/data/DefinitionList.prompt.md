Use DefinitionList for company registry data, technical specs, anything a reader might verify.

```jsx
<DefinitionList items={[
  { term: "Pavadinimas", value: "MB „BlynAI“" },
  { term: "J. a. kodas", value: "registruojama" },
  { term: "Paštas", value: "info@blynai.eu", href: "mailto:info@blynai.eu" }
]} />
```

- Unknown values are stated plainly ("registruojama"), never hidden or faked.
