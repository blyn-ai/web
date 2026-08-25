import React from "react";

const V = {
  gold:      { bg: "var(--gold-400)", hover: "var(--gold-300)", color: "#151006", border: "none", radius: "var(--radius-md)" },
  gradient:  { bg: "var(--gradient-action)", hover: "var(--gradient-action)", color: "#fff", border: "none", radius: "var(--radius-sm)" },
  outline:   { bg: "transparent", hover: "rgba(26,23,18,.05)", color: "var(--text-heading)", border: "1px solid var(--border-strong)", radius: "var(--radius-sm)" },
  outlineInk:{ bg: "transparent", hover: "rgba(246,218,160,.07)", color: "var(--text-heading-on-ink)", border: "1px solid rgba(246,218,160,.24)", radius: "var(--radius-md)" },
  pill:      { bg: "var(--gold-400)", hover: "var(--gold-300)", color: "#151006", border: "none", radius: "var(--radius-pill)" },
  pillViolet:{ bg: "rgba(161,138,255,.14)", hover: "rgba(161,138,255,.22)", color: "var(--violet-200)", border: "1px solid var(--border-violet-strong)", radius: "var(--radius-pill)" }
};
const H = { sm: "var(--control-h-sm)", md: "var(--control-h)", lg: "var(--control-h-lg)" };

/** The brand's action control. Gold means "the live thing"; gradient means "the company"; outlines are secondary. */
export function Button({ variant = "gold", size = "md", as = "a", block = false, disabled = false, children, style, ...rest }) {
  const [hot, setHot] = React.useState(false);
  const v = V[variant] || V.gold;
  const Tag = as;
  return (
    <Tag
      onMouseEnter={() => setHot(true)}
      onMouseLeave={() => setHot(false)}
      aria-disabled={disabled || undefined}
      style={{
        display: block ? "flex" : "inline-flex", alignItems: "center", justifyContent: "center",
        height: H[size] || H.md, padding: block ? 0 : "0 var(--pad-button-x)",
        width: block ? "100%" : undefined, boxSizing: "border-box",
        borderRadius: v.radius, background: hot && !disabled ? v.hover : v.bg, border: v.border,
        color: v.color, font: "var(--type-button)", textDecoration: "none", cursor: disabled ? "not-allowed" : "pointer",
        filter: variant === "gradient" && hot && !disabled ? "brightness(1.1)" : undefined,
        opacity: disabled ? 0.45 : 1, transition: "background-color var(--dur-fast) var(--ease),filter var(--dur-fast) var(--ease)",
        ...style
      }}
      {...rest}
    >{children}</Tag>
  );
}
