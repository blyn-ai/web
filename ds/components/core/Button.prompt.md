Use Button for the two or three actions a BlynAI page actually offers — the live journal, the source repository, contact.

```jsx
<div style={{ display: "flex", gap: "var(--gap-inline)" }}>
  <Button variant="gradient" href="#">Gyvas žurnalas</Button>
  <Button variant="outline" href="#">GitHub · atvirasis kodas</Button>
</div>
```

- Never more than one filled button per view. `gradient` on paper, `gold` on ink.
- Labels are noun phrases, sentence case, often with a mono-style middle dot: "GitHub · atvirasis kodas".
- On mobile the pair stacks with `block`.
