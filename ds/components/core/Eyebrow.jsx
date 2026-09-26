import React from "react";

const TONE = { violet: "var(--violet-700)", gold: "var(--gold-400)", lilac: "var(--violet-400)", muted: "var(--text-meta)" };

/** Mono, uppercase, wide-tracked label that opens almost every section. */
export function Eyebrow({ tone = "violet", size = "md", as = "p", children, style, ...rest }) {
  const Tag = as;
  return (
    <Tag style={{
      margin: 0,
      font: "var(--fw-semibold) " + (size === "sm" ? "var(--fs-micro)" : "var(--fs-eyebrow)") + "/1.2 var(--font-mono)",
      letterSpacing: size === "sm" ? "var(--track-eyebrow-tight)" : "var(--track-eyebrow)",
      textTransform: "uppercase", color: TONE[tone] || TONE.violet, ...style
    }} {...rest}>{children}</Tag>
  );
}
