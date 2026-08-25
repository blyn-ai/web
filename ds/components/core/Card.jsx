import React from "react";

const TONE = {
  paper: { background: "var(--surface-card)", border: "1px solid var(--border-card)", borderRadius: "var(--radius-sm)", boxShadow: "var(--shadow-violet-edge)", color: "var(--text-body)" },
  raised:{ background: "var(--surface-raised)", border: "1px solid var(--border-card)", borderRadius: "var(--radius-sm)", color: "var(--text-body)" },
  ink:   { background: "var(--surface-card-on-ink)", border: "1px solid var(--border-hairline-on-ink)", borderRadius: "var(--radius-xl)", color: "var(--text-body-on-ink)" },
  glass: { background: "var(--surface-glass-on-ink)", border: "1px solid rgba(161,138,255,.28)", borderRadius: "var(--radius-2xl)", color: "var(--lilac-100)" }
};
const TINT = { gold: "var(--tint-gold-fade)", violet: "var(--tint-violet-fade)" };

/** Container primitive. Radius follows the surface: 6px on paper, 14-16px on ink. */
export function Card({ tone = "paper", tint, padding = "var(--pad-card)", children, style, ...rest }) {
  const t = TONE[tone] || TONE.paper;
  return (
    <div style={{
      ...t, padding,
      backgroundImage: tint ? TINT[tint] : undefined,
      ...style
    }} {...rest}>{children}</div>
  );
}
