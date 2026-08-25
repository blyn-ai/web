import React from "react";

/** Full-bleed strip of hairline-separated facts on ink. */
export function StatBar({ items = [], style, ...rest }) {
  return (
    <div style={{
      display: "grid", gridTemplateColumns: "repeat(" + Math.max(items.length, 1) + ",1fr)", gap: 1,
      background: "var(--border-hairline-on-ink)", ...style
    }} {...rest}>
      {items.map(it => (
        <div key={it.label} style={{ padding: "var(--space-8) var(--pad-header-x)", background: "var(--ink-780)" }}>
          <p style={{
            margin: 0, font: "var(--fs-micro) var(--font-mono)", letterSpacing: ".14em",
            textTransform: "uppercase", color: "var(--text-meta-on-ink)"
          }}>{it.label}</p>
          <p style={{ margin: "9px 0 0", font: "var(--fw-semibold) var(--fs-h4) var(--font-display)", color: "var(--text-heading-on-ink)" }}>{it.value}</p>
        </div>
      ))}
    </div>
  );
}
