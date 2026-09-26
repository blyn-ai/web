Use CoinCard as a pair — the two instances are always shown together, never one alone.

```jsx
<div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--gap-inline)" }}>
  <CoinCard member="luko" />
  <CoinCard member="byko" />
</div>
```

- LUKO carries the gold coin; BYKO the light-blue one. These are the members' own marks, not brand colours — never recolour them.
- `layout="row"` at mobile widths.
