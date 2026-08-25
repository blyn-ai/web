import React from "react";

const MEMBERS = {
  luko: {
    name: "LUKO", domain: "blynai.meetluko.eu", href: "https://meetluko.eu",
    label: "var(--luko-label)", line: "var(--luko-line)", tintInk: "rgba(201,168,106,.06)", borderInk: "rgba(201,168,106,.28)", labelInk: "#e8d5ac",
    coin: (
      <svg viewBox="0 0 512 512" aria-hidden="true" style={{ width: "100%", height: "100%" }}>
        <circle cx="256" cy="256" r="256" fill="var(--luko-ink)" />
        <circle cx="256" cy="256" r="248" fill="none" stroke="var(--luko-coin)" strokeOpacity=".5" strokeWidth="8" />
        <g transform="translate(-117.1 -89.7) scale(1.4463)">
          <g opacity=".3">
            <path d="M144 164L182 122V167Z" fill="var(--luko-coin)" />
            <g fill="none" stroke="var(--luko-coin)" strokeWidth="15"><circle cx="306" cy="186" r="58" /><path d="M364 186V312" /></g>
          </g>
          <path d="M182 122h52V312H346l16 16V358H182Z" fill="var(--luko-coin)" />
        </g>
      </svg>
    )
  },
  byko: {
    name: "BYKO", domain: "blynai.bykovas.lt", href: "https://byko.bykovas.lt",
    label: "var(--byko-label)", line: "var(--byko-line)", tintInk: "rgba(124,203,255,.06)", borderInk: "rgba(124,203,255,.28)", labelInk: "var(--byko-tint)",
    coin: (
      <svg viewBox="0 0 32 32" aria-hidden="true" style={{ width: "100%", height: "100%" }}>
        <circle cx="16" cy="16" r="16" fill="var(--byko-coin)" />
        <g transform="translate(2.1875 1.25) scale(.3125)" fill="none" stroke="var(--byko-ink)" strokeWidth="13"><path d="M24 14V82" /><path d="M40 20L70 48 40 76" /></g>
      </svg>
    )
  }
};

/** One bot instance: its coin mark, its short name, its subdomain. */
export function CoinCard({ member = "luko", layout = "stack", tone = "paper", coinSize = 44, style, ...rest }) {
  const m = MEMBERS[member] || MEMBERS.luko;
  const onInk = tone === "ink";
  return (
    <a href={m.href} style={{
      display: "flex", flexDirection: layout === "stack" ? "column" : "row",
      alignItems: layout === "stack" ? "flex-start" : "center", gap: layout === "stack" ? 12 : 13,
      padding: layout === "stack" ? "var(--pad-card-sm)" : 14, minWidth: 0,
      border: "1px solid " + (onInk ? m.borderInk : m.line),
      borderRadius: onInk ? "var(--radius-lg)" : "var(--radius-sm)",
      background: onInk ? m.tintInk : "var(--paper-000)", textDecoration: "none", ...style
    }} {...rest}>
      <span style={{ width: coinSize, height: coinSize, flex: "none" }}>{m.coin}</span>
      <span style={{ minWidth: 0 }}>
        <b style={{ display: "block", font: "var(--fw-semibold) 16px var(--font-display)", letterSpacing: ".02em", color: onInk ? m.labelInk : m.label }}>{m.name}</b>
        <small style={{ font: "11.5px var(--font-mono)", color: onInk ? "var(--text-meta-on-ink)" : "var(--text-meta)" }}>{m.domain}</small>
      </span>
    </a>
  );
}
