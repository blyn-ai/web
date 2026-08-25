import React from "react";

const PLATE = {
  sm: { box: 36, glyph: 26, radius: 10, glow: "var(--shadow-mark)" },
  md: { box: 42, glyph: 31, radius: 12, glow: "var(--shadow-mark)" },
  lg: { box: 64, glyph: 46, radius: 18, glow: "var(--shadow-mark-lg)" }
};

/** The BlynAI mark: two gold chevrons enclosing a 2x2 ledger of dots. */
export function LogoMark({ size = "md", plate = true, tone = "gold", style, ...rest }) {
  const p = PLATE[size] || PLATE.md;
  const id = "blynai-mark-" + size + "-" + tone;
  const gold = tone === "gold";
  const glyph = (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" style={{ width: p.glyph, height: p.glyph, display: "block" }}>
      {gold && (
        <defs>
          <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="var(--gold-300)" />
            <stop offset="1" stopColor="var(--gold-400)" />
          </linearGradient>
        </defs>
      )}
      <path d="M16.5 9 L8.5 20 L16.5 31" stroke={gold ? "url(#" + id + ")" : "currentColor"} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M23.5 9 L31.5 20 L23.5 31" stroke={gold ? "url(#" + id + ")" : "currentColor"} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="17" cy="17.5" r="2.1" fill={gold ? "var(--gold-300)" : "currentColor"} />
      <circle cx="23" cy="17.5" r="2.1" fill={gold ? "var(--gold-600)" : "currentColor"} opacity={gold ? 1 : 0.55} />
      <circle cx="17" cy="22.5" r="2.1" fill={gold ? "var(--gold-600)" : "currentColor"} opacity={gold ? 1 : 0.55} />
      <circle cx="23" cy="22.5" r="2.1" fill={gold ? "var(--gold-300)" : "currentColor"} />
    </svg>
  );
  if (!plate) return <span style={{ display: "inline-flex", ...style }} {...rest}>{glyph}</span>;
  return (
    <span
      style={{
        width: p.box, height: p.box, flex: "none", display: "grid", placeItems: "center",
        borderRadius: p.radius, background: size === "lg" ? "var(--ink-800)" : "rgba(0,0,0,.28)",
        border: "1px solid " + (size === "lg" ? "rgba(245,184,79,.34)" : "var(--border-gold)"),
        boxShadow: p.glow, ...style
      }}
      {...rest}
    >{glyph}</span>
  );
}
