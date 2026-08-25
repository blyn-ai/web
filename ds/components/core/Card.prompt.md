Use Card for any bounded block: a status panel, a research note, a coin tile wrapper.

```jsx
<Card tone="ink" padding="var(--pad-card)">
  <Eyebrow tone="gold">Būsena</Eyebrow>
  <p style={{ font: "var(--type-mono)", marginTop: 14 }}>Botai veikia be pertraukos.</p>
</Card>
```

- Paper cards get a hairline border and no drop shadow. Never add a shadow to lift a card on paper.
- `tint="gold" | "violet"` is reserved for the BLYN / AI pairing; do not tint ordinary content cards.
