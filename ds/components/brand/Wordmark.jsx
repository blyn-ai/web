import React from "react";

/** "BlynAI Capital" set in Space Grotesk with the AI in gold, over the mono descriptor line. */
export function Wordmark({ tone = "ink", size = "md", descriptor = "L&D Finance Lab", name = "Blyn|AI| Capital", style, ...rest }) {
  const onInk = tone === "ink";
  const S = { sm: [15, 9], md: [17, 10], lg: [27, 13] }[size] || [17, 10];
  const parts = name.split("|");
  return (
    <span style={{ display: "flex", flexDirection: "column", gap: 2, ...style }} {...rest}>
      <b style={{
        font: "var(--fw-semibold) " + S[0] + "px/1.05 var(--font-display)",
        letterSpacing: ".01em", whiteSpace: "nowrap",
        color: onInk ? "var(--text-heading-on-ink)" : "var(--text-heading)"
      }}>
        {parts[0]}
        <i style={{ fontStyle: "normal", color: onInk ? "var(--gold-400)" : "var(--gold-700)" }}>{parts[1]}</i>
        {parts[2]}
      </b>
      {descriptor && (
        <small style={{
          font: S[1] + "px var(--font-mono)", textTransform: "uppercase",
          letterSpacing: size === "lg" ? "var(--track-eyebrow-tight)" : ".14em",
          whiteSpace: "nowrap",
          color: onInk ? "var(--violet-400)" : "var(--violet-700)"
        }}>{descriptor}</small>
      )}
    </span>
  );
}
