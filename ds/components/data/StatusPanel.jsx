import React from "react";

import { Card } from "../core/Card.jsx";
import { Eyebrow } from "../core/Eyebrow.jsx";

/** The "Būsena" panel: a mono, line-per-fact statement of what is and isn't running. */
export function StatusPanel({ title = "Būsena", lines = [], tone = "paper", style, ...rest }) {
  const onInk = tone === "ink" || tone === "glass";
  return (
    <Card tone={tone} padding="24px 26px" style={style} {...rest}>
      <Eyebrow tone={onInk ? "lilac" : "violet"} size="sm" style={{ marginBottom: 14 }}>{title}</Eyebrow>
      <p style={{ margin: 0, font: "13.5px/var(--lh-mono) var(--font-mono)", color: onInk ? "var(--text-on-ink)" : "var(--text-heading)" }}>
        {lines.map((l, i) => <React.Fragment key={i}>{l}{i < lines.length - 1 && <br />}</React.Fragment>)}
      </p>
    </Card>
  );
}
