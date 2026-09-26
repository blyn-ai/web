import React from "react";

/** Two columns with the brand's 1px separator — plain hairline, or the vertical gold-to-violet gradient. */
export function DualPanel({ divider = "hairline", gap = "var(--gap-wide)", left, right, children, style, ...rest }) {
  const kids = children ? React.Children.toArray(children) : [left, right];
  const bg = divider === "gradient" ? "var(--gradient-divider-v)" : divider === "hairline" ? "var(--border-hairline)" : "transparent";
  return (
    <div style={{ display: "grid", gridTemplateColumns: "var(--grid-split)", gap: "0 " + gap, ...style }} {...rest}>
      <div style={{ minWidth: 0 }}>{kids[0]}</div>
      <div aria-hidden="true" style={{ background: bg }} />
      <div style={{ minWidth: 0 }}>{kids[1]}</div>
    </div>
  );
}
