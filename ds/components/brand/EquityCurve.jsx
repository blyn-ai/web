import React from "react";

const BAND = "M0 150 L100 140 L190 156 L290 120 L380 134 L480 96 L570 112 L670 72 L760 88 L860 50 L950 66 L1060 26 L1130 40 L1200 8";
const FULL = "M0 560 L90 548 L170 566 L250 512 L330 528 L410 470 L490 486 L570 424 L650 448 L730 380 L810 398 L890 330 L970 352 L1060 268 L1130 288 L1200 210";

/** The signature equity curve: a stepped gain line running gold (bottom-left) into violet (top-right). */
export function EquityCurve({ variant = "band", direction = "forward", tone = "paper", style, ...rest }) {
  const band = variant === "band";
  const h = band ? 190 : 630;
  const d = band ? BAND : FULL;
  const id = "eq-" + variant + "-" + direction + "-" + tone;
  const gold = "var(--gold-400)";
  const violet = tone === "ink" ? "var(--violet-400)" : "var(--violet-700)";
  const from = direction === "reverse" ? violet : gold;
  const to = direction === "reverse" ? gold : violet;
  const fillA = direction === "reverse" ? "rgba(107,78,219,.20)" : "rgba(245,184,79,.22)";
  const fillB = direction === "reverse" ? "rgba(245,184,79,.22)" : "rgba(107,78,219,.18)";
  return (
    <svg viewBox={"0 0 1200 " + h} aria-hidden="true" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: h, ...style }} {...rest}>
      <defs>
        <linearGradient id={id} x1="0" y1="1" x2="1" y2="0"><stop offset="0" stopColor={from} /><stop offset=".55" stopColor="var(--bridge-500)" /><stop offset="1" stopColor={to} /></linearGradient>
        <linearGradient id={id + "-f"} x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor={fillA} /><stop offset="1" stopColor={fillB} /></linearGradient>
      </defs>
      <path d={d + " L1200 " + h + " L0 " + h + " Z"} fill={"url(#" + id + "-f)"} />
      <path d={d} fill="none" stroke={"url(#" + id + ")"} strokeWidth={band ? 6 : 7} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
