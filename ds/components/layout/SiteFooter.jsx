import React from "react";

/** Ink footer: the regulatory disclaimer, then a mono domain/copyright line. */
export function SiteFooter({ legal, meta = "blynai.eu · © 2026 MB „BlynAI“", padding = "34px var(--section-x) 44px", style, ...rest }) {
  return (
    <footer style={{ padding, background: "var(--surface-ink)", ...style }} {...rest}>
      <p style={{
        margin: 0, maxWidth: "var(--measure-legal)",
        font: "12.5px/1.6 var(--font-body)", color: "var(--text-meta-on-ink)"
      }}>{legal}</p>
      <p style={{
        margin: "20px 0 0", font: "var(--fs-eyebrow) var(--font-mono)",
        letterSpacing: "var(--track-foot)", textTransform: "uppercase", color: "var(--sand-600)"
      }}>{meta}</p>
    </footer>
  );
}
