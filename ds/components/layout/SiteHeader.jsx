import React from "react";

import { LogoMark } from "../brand/LogoMark.jsx";
import { Wordmark } from "../brand/Wordmark.jsx";

/** The ink header band: mark + lockup left, mono nav and LT/EN switch right. */
export function SiteHeader({ nav = [], lang = null, altLang = "EN", href = "/", compact = false, onMenu, style, ...rest }) {
  return (
    <header style={{
      display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between",
      gap: "18px 24px", padding: compact ? "14px 18px" : "var(--pad-header-y) var(--pad-header-x)",
      background: "var(--surface-ink)", ...style
    }} {...rest}>
      <a href={href} style={{ display: "inline-flex", alignItems: "center", gap: 12, color: "inherit", textDecoration: "none" }}>
        <LogoMark size={compact ? "sm" : "md"} />
        <Wordmark tone="ink" size={compact ? "sm" : "md"} />
      </a>
      {compact ? (
        <button type="button" aria-label="Meniu" onClick={onMenu} style={{
          width: "var(--tap-min)", height: "var(--tap-min)", flex: "none", display: "grid", placeItems: "center",
          border: "1px solid rgba(246,218,160,.18)", borderRadius: "var(--radius-md)", background: "transparent", cursor: "pointer"
        }}>
          <span style={{ display: "flex", flexDirection: "column", gap: 5 }}>
            {[0, 1, 2].map(i => <i key={i} style={{ display: "block", width: 17, height: 1.5, background: "var(--sand-200)" }} />)}
          </span>
        </button>
      ) : (
        <nav style={{
          display: "flex", alignItems: "center", gap: "var(--gap-nav)",
          font: "var(--fs-eyebrow) var(--font-mono)", letterSpacing: "var(--track-nav)", textTransform: "uppercase"
        }}>
          {nav.map(item => (
            <a key={item.label} href={item.href || "#"} style={{ color: "var(--link-nav-on-ink)", textDecoration: "none" }}>{item.label}</a>
          ))}
          {lang && (
            <span style={{ display: "flex", gap: "var(--gap-inline-xs)", paddingLeft: 8, borderLeft: "1px solid rgba(246,218,160,.14)" }}>
              <b style={{ fontWeight: 500, color: "var(--gold-300)" }}>{lang}</b>
              <span style={{ color: "var(--sand-600)" }}>·</span>
              <a href="#" style={{ color: "var(--text-meta-on-ink)", textDecoration: "none" }}>{altLang}</a>
            </span>
          )}
        </nav>
      )}
    </header>
  );
}
