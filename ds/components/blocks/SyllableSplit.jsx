import React from "react";

/** BLYN / AI: the name split into its two halves, gold measurement beside violet inference. */
export function SyllableSplit({ left, right, note, tinted = true, compact = false, style, ...rest }) {
  const cell = (d, side) => (
    <div style={{
      padding: compact ? "20px 0 22px" : "var(--pad-card-lg)",
      borderRight: !compact && side === 0 ? "1px solid var(--border-hairline)" : undefined,
      borderBottom: compact && side === 0 ? "1px solid var(--border-hairline)" : undefined,
      background: tinted ? (side === 0 ? "var(--tint-gold-fade)" : "var(--tint-violet-fade)") : undefined
    }}>
      <b style={{
        display: "block", font: "var(--fw-regular) " + (compact ? "40px" : "var(--fs-syllable)") + "/1 var(--font-display)",
        letterSpacing: "var(--track-h2)", color: side === 0 ? "var(--gold-700)" : "var(--violet-700)"
      }}>{d.word}</b>
      <p style={{ margin: (compact ? "14px" : "20px") + " 0 0", font: "var(--fw-regular) " + (compact ? "17px" : "var(--fs-h3)") + "/1.35 var(--font-display)", color: "var(--text-heading)" }}>{d.expansion}</p>
      <p style={{ margin: (compact ? "9px" : "12px") + " 0 0", font: (compact ? "13px" : "var(--fs-body-sm)") + "/var(--lh-body) var(--font-body)", color: "var(--text-muted)" }}>{d.note}</p>
    </div>
  );
  return (
    <div style={style} {...rest}>
      <div style={{
        display: compact ? "block" : "grid", gridTemplateColumns: compact ? undefined : "1fr 1fr",
        borderTop: "var(--rule-strong)"
      }}>
        {cell(left, 0)}
        {cell(right, 1)}
      </div>
      {note && <p style={{ margin: "20px 0 0", font: "13px/var(--lh-body) var(--font-body)", color: "var(--text-muted)", maxWidth: "82ch" }}>{note}</p>}
    </div>
  );
}
