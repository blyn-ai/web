import React from "react";

const TONE = {
  neutral: { bg: "rgba(0,0,0,.08)", color: "var(--ink-600)", border: "none" },
  gold:    { bg: "rgba(245,184,79,.14)", color: "var(--gold-900)", border: "1px solid var(--border-gold)" },
  violet:  { bg: "rgba(107,78,219,.10)", color: "var(--violet-700)", border: "1px solid var(--border-violet)" },
  ink:     { bg: "var(--ink-600)", color: "var(--paper-000)", border: "none" }
};

/** Small mono chip for a state, a reference id or a count. */
export function Badge({ tone = "neutral", children, style, ...rest }) {
  const t = TONE[tone] || TONE.neutral;
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", padding: "3px 7px", borderRadius: "var(--radius-xs)",
      font: "var(--fw-semibold) 10.5px/1.4 var(--font-mono)", letterSpacing: ".04em",
      background: t.bg, color: t.color, border: t.border, ...style
    }} {...rest}>{children}</span>
  );
}
