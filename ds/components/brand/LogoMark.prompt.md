Use LogoMark wherever the BlynAI mark appears — header lockups, social cards, favicons, avatar plates.

```jsx
<LogoMark size="md" />
<LogoMark size="lg" />
<LogoMark plate={false} tone="mono" style={{ color: "var(--ink-600)" }} />
```

- `size="lg"` switches the plate to solid ink with the wider glow — use it on 1200x630 social cards.
- `tone="mono"` is for single-colour contexts (stamps, print, favicon fallbacks). Never recolour the gold version.
- The mark is always plated on dark; on paper surfaces use `plate={false}` with `tone="mono"` or keep the ink plate.
