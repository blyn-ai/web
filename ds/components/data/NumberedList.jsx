import React from "react";

const RAMP = ["var(--gold-700)", "var(--gold-800)", "var(--violet-600)", "var(--violet-700)"];

/** Numbered research rows. The index colour walks the gold axis into the violet axis. */
export function NumberedList({ items = [], compact = false, style, ...rest }) {
  return (
    <ol style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 0, ...style }} {...rest}>
      {items.map((it, i) => (
        <li key={it.title} style={{
          display: compact ? "block" : "grid",
          gridTemplateColumns: compact ? undefined : "var(--grid-numbered)",
          gap: compact ? undefined : "var(--gap-col)",
          padding: compact ? "20px 0" : "var(--pad-row-y) 0",
          borderTop: "1px solid var(--border-hairline)",
          borderBottom: i === items.length - 1 ? "1px solid var(--border-hairline)" : undefined
        }}>
          <span style={{ font: (compact ? "13px" : "15px") + " var(--font-mono)", color: RAMP[i % RAMP.length] }}>
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3 style={{
            margin: compact ? "8px 0" : 0,
            font: "var(--fw-medium) " + (compact ? "var(--fs-h4)" : "var(--fs-h3)") + "/var(--lh-h3) var(--font-display)",
            letterSpacing: "var(--track-h3)", color: "var(--text-heading)"
          }}>{it.title}</h3>
          <p style={{ margin: 0, fontSize: compact ? "13.5px" : "var(--fs-body)", lineHeight: "var(--lh-body)", color: "var(--text-body)" }}>{it.body}</p>
        </li>
      ))}
    </ol>
  );
}
