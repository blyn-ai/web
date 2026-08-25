import React from "react";

/** A partner: square portrait plate, name in Space Grotesk, role in mono. */
export function MemberCard({ name, role, src, alt, shape = "plate", accent = "gold", objectPosition, tone = "paper", style, ...rest }) {
  const onInk = tone === "ink";
  const border = accent === "violet" ? "1px solid rgba(107,78,219,.30)" : "1px solid rgba(185,127,46,.35)";
  const circle = shape === "circle";
  return (
    <div style={{ display: circle ? "flex" : "block", alignItems: "center", gap: 16, minWidth: 0, ...style }} {...rest}>
      <img src={src} alt={alt || name} style={{
        width: circle ? 56 : "100%", height: circle ? 56 : undefined, flex: circle ? "none" : undefined,
        aspectRatio: circle ? undefined : "1", objectFit: "cover", objectPosition,
        borderRadius: circle ? "var(--radius-circle)" : shape === "soft" ? "var(--radius-2xl)" : "var(--radius-hair)",
        background: onInk ? "rgba(246,218,160,.08)" : "rgba(26,23,18,.06)",
        border: onInk ? "1px solid var(--border-card-on-ink)" : border
      }} />
      <span style={{ display: "block", marginTop: circle ? 0 : 12, minWidth: 0 }}>
        <b style={{ display: "block", font: "var(--fw-medium) 15px var(--font-display)", color: onInk ? "var(--text-heading-on-ink)" : "var(--text-heading)" }}>{name}</b>
        <small style={{ font: "12px var(--font-mono)", color: onInk ? "var(--text-meta-on-ink)" : "var(--text-meta)" }}>{role}</small>
      </span>
    </div>
  );
}
