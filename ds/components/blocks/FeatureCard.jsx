import React from "react";

import { Card } from "../core/Card.jsx";

/** A numbered or labelled research note. */
export function FeatureCard({ index, label, title, children, tone = "ink", style, ...rest }) {
  const onInk = tone === "ink" || tone === "glass";
  return (
    <Card tone={tone} padding={tone === "glass" ? "24px 22px" : "var(--pad-card)"} style={style} {...rest}>
      {(index || label) && (
        <p style={{
          margin: 0, font: "var(--fw-semibold) " + (label ? "var(--fs-eyebrow)" : "12px") + " var(--font-mono)",
          letterSpacing: label ? ".14em" : undefined, textTransform: label ? "uppercase" : undefined,
          color: onInk ? (label ? "var(--violet-400)" : "var(--gold-400)") : "var(--gold-700)"
        }}>{label || index}</p>
      )}
      <h3 style={{
        margin: "12px 0 9px", font: "var(--fw-semibold) " + (tone === "glass" ? "17px" : "var(--fs-h4)") + "/var(--lh-h3) var(--font-display)",
        color: onInk ? "var(--text-heading-on-ink)" : "var(--text-heading)"
      }}>{title}</h3>
      <p style={{ margin: 0, fontSize: tone === "glass" ? "13.5px" : "14px", lineHeight: "var(--lh-body-tight)", color: onInk ? "var(--text-body-on-ink)" : "var(--text-body)" }}>{children}</p>
    </Card>
  );
}
