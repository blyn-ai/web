import React from "react";

import { Eyebrow } from "../core/Eyebrow.jsx";

const TONE = {
  paper:  { background: "var(--surface-page)", color: "var(--text-body)", border: "var(--border-hairline)" },
  raised: { background: "var(--surface-card)", color: "var(--text-body)", border: "var(--border-hairline)" },
  wash:   { background: "var(--wash-gold),var(--wash-violet),var(--paper-050)", color: "var(--text-body)", border: "var(--border-hairline)" },
  ink:    { background: "var(--surface-ink-soft)", color: "var(--text-body-on-ink)", border: "var(--border-hairline-on-ink)" },
  inkWash:{ background: "var(--wash-gold-ink),var(--wash-violet-ink),var(--ink-850)", color: "var(--text-body-on-ink)", border: "var(--border-hairline-on-ink)" }
};

/** Page section shell: consistent gutters, optional eyebrow + heading, hairline bottom edge. */
export function Section({ tone = "paper", eyebrow, heading, padding, divider = true, compact = false, children, style, ...rest }) {
  const t = TONE[tone] || TONE.paper;
  const onInk = tone === "ink" || tone === "inkWash";
  const pad = padding || (compact ? "var(--mobile-y) var(--mobile-x)" : "var(--section-y) var(--section-x)");
  return (
    <section style={{
      padding: pad, background: t.background, color: t.color,
      borderBottom: divider ? "1px solid " + t.border : undefined, ...style
    }} {...rest}>
      {eyebrow && <Eyebrow tone={onInk ? "gold" : "violet"} size={compact ? "sm" : "md"} style={{ marginBottom: heading ? 14 : 30 }}>{eyebrow}</Eyebrow>}
      {heading && (
        <h2 style={{
          margin: "0 0 34px", font: "var(--fw-medium) var(--fs-h2-lg)/var(--lh-h2) var(--font-display)",
          letterSpacing: "var(--track-h2)", color: onInk ? "var(--text-heading-on-ink)" : "var(--text-heading)"
        }}>{heading}</h2>
      )}
      {children}
    </section>
  );
}
