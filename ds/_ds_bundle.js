/* @ds-bundle: {"format":4,"namespace":"BlynAICapitalDesignSystem_090ef4","components":[{"name":"CoinCard","sourcePath":"components/blocks/CoinCard.jsx"},{"name":"FeatureCard","sourcePath":"components/blocks/FeatureCard.jsx"},{"name":"MemberCard","sourcePath":"components/blocks/MemberCard.jsx"},{"name":"SyllableSplit","sourcePath":"components/blocks/SyllableSplit.jsx"},{"name":"EquityCurve","sourcePath":"components/brand/EquityCurve.jsx"},{"name":"GradientRule","sourcePath":"components/brand/GradientRule.jsx"},{"name":"LogoMark","sourcePath":"components/brand/LogoMark.jsx"},{"name":"Wordmark","sourcePath":"components/brand/Wordmark.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"DefinitionList","sourcePath":"components/data/DefinitionList.jsx"},{"name":"NumberedList","sourcePath":"components/data/NumberedList.jsx"},{"name":"StatBar","sourcePath":"components/data/StatBar.jsx"},{"name":"StatusPanel","sourcePath":"components/data/StatusPanel.jsx"},{"name":"DualPanel","sourcePath":"components/layout/DualPanel.jsx"},{"name":"Section","sourcePath":"components/layout/Section.jsx"},{"name":"SiteFooter","sourcePath":"components/layout/SiteFooter.jsx"},{"name":"SiteHeader","sourcePath":"components/layout/SiteHeader.jsx"}],"sourceHashes":{"components/blocks/CoinCard.jsx":"4a8cf3fa2f28","components/blocks/FeatureCard.jsx":"303ce6678292","components/blocks/MemberCard.jsx":"e551d6fa6fb6","components/blocks/SyllableSplit.jsx":"e59ce6ab9c16","components/brand/EquityCurve.jsx":"af8b68165d32","components/brand/GradientRule.jsx":"10cdf9ba1e9f","components/brand/LogoMark.jsx":"1122bb8e41ef","components/brand/Wordmark.jsx":"fd2e85288233","components/core/Badge.jsx":"a9c061b7a4fa","components/core/Button.jsx":"0ec3a1689e38","components/core/Card.jsx":"7633f569482e","components/core/Eyebrow.jsx":"d31b28f1e141","components/data/DefinitionList.jsx":"8940d4bdb5f8","components/data/NumberedList.jsx":"9add107c937a","components/data/StatBar.jsx":"64186e915af6","components/data/StatusPanel.jsx":"b67a0143ec64","components/layout/DualPanel.jsx":"727e88397422","components/layout/Section.jsx":"f95dd63922eb","components/layout/SiteFooter.jsx":"623962ee4847","components/layout/SiteHeader.jsx":"33b6f2e4a03f","ui_kits/social/OGCard.jsx":"246927c0c3c8","ui_kits/website/HomeDocument.jsx":"bb7fac9b3e3a","ui_kits/website/HomeLab.jsx":"4a91097ab3b5","ui_kits/website/HomeLedger.jsx":"a1f74ee4852d","ui_kits/website/HomePoster.jsx":"44cf0c4081f9","ui_kits/website/content.js":"e2ee443e09ca"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.BlynAICapitalDesignSystem_090ef4 = window.BlynAICapitalDesignSystem_090ef4 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/blocks/CoinCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const MEMBERS = {
  luko: {
    name: "LUKO",
    domain: "blynai.meetluko.eu",
    href: "https://meetluko.eu",
    label: "var(--luko-label)",
    line: "var(--luko-line)",
    tintInk: "rgba(201,168,106,.06)",
    borderInk: "rgba(201,168,106,.28)",
    labelInk: "#e8d5ac",
    coin: /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 512 512",
      "aria-hidden": "true",
      style: {
        width: "100%",
        height: "100%"
      }
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "256",
      cy: "256",
      r: "256",
      fill: "var(--luko-ink)"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "256",
      cy: "256",
      r: "248",
      fill: "none",
      stroke: "var(--luko-coin)",
      strokeOpacity: ".5",
      strokeWidth: "8"
    }), /*#__PURE__*/React.createElement("g", {
      transform: "translate(-117.1 -89.7) scale(1.4463)"
    }, /*#__PURE__*/React.createElement("g", {
      opacity: ".3"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M144 164L182 122V167Z",
      fill: "var(--luko-coin)"
    }), /*#__PURE__*/React.createElement("g", {
      fill: "none",
      stroke: "var(--luko-coin)",
      strokeWidth: "15"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "306",
      cy: "186",
      r: "58"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M364 186V312"
    }))), /*#__PURE__*/React.createElement("path", {
      d: "M182 122h52V312H346l16 16V358H182Z",
      fill: "var(--luko-coin)"
    })))
  },
  byko: {
    name: "BYKO",
    domain: "blynai.bykovas.lt",
    href: "https://byko.bykovas.lt",
    label: "var(--byko-label)",
    line: "var(--byko-line)",
    tintInk: "rgba(124,203,255,.06)",
    borderInk: "rgba(124,203,255,.28)",
    labelInk: "var(--byko-tint)",
    coin: /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 32 32",
      "aria-hidden": "true",
      style: {
        width: "100%",
        height: "100%"
      }
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "16",
      cy: "16",
      r: "16",
      fill: "var(--byko-coin)"
    }), /*#__PURE__*/React.createElement("g", {
      transform: "translate(2.1875 1.25) scale(.3125)",
      fill: "none",
      stroke: "var(--byko-ink)",
      strokeWidth: "13"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M24 14V82"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M40 20L70 48 40 76"
    })))
  }
};

/** One bot instance: its coin mark, its short name, its subdomain. */
function CoinCard({
  member = "luko",
  layout = "stack",
  tone = "paper",
  coinSize = 44,
  style,
  ...rest
}) {
  const m = MEMBERS[member] || MEMBERS.luko;
  const onInk = tone === "ink";
  return /*#__PURE__*/React.createElement("a", _extends({
    href: m.href,
    style: {
      display: "flex",
      flexDirection: layout === "stack" ? "column" : "row",
      alignItems: layout === "stack" ? "flex-start" : "center",
      gap: layout === "stack" ? 12 : 13,
      padding: layout === "stack" ? "var(--pad-card-sm)" : 14,
      minWidth: 0,
      border: "1px solid " + (onInk ? m.borderInk : m.line),
      borderRadius: onInk ? "var(--radius-lg)" : "var(--radius-sm)",
      background: onInk ? m.tintInk : "var(--paper-000)",
      textDecoration: "none",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: coinSize,
      height: coinSize,
      flex: "none"
    }
  }, m.coin), /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      display: "block",
      font: "var(--fw-semibold) 16px var(--font-display)",
      letterSpacing: ".02em",
      color: onInk ? m.labelInk : m.label
    }
  }, m.name), /*#__PURE__*/React.createElement("small", {
    style: {
      font: "11.5px var(--font-mono)",
      color: onInk ? "var(--text-meta-on-ink)" : "var(--text-meta)"
    }
  }, m.domain)));
}
Object.assign(__ds_scope, { CoinCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/blocks/CoinCard.jsx", error: String((e && e.message) || e) }); }

// components/blocks/MemberCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** A partner: square portrait plate, name in Space Grotesk, role in mono. */
function MemberCard({
  name,
  role,
  src,
  alt,
  shape = "plate",
  accent = "gold",
  objectPosition,
  tone = "paper",
  style,
  ...rest
}) {
  const onInk = tone === "ink";
  const border = accent === "violet" ? "1px solid rgba(107,78,219,.30)" : "1px solid rgba(185,127,46,.35)";
  const circle = shape === "circle";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: circle ? "flex" : "block",
      alignItems: "center",
      gap: 16,
      minWidth: 0,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt || name,
    style: {
      width: circle ? 56 : "100%",
      height: circle ? 56 : undefined,
      flex: circle ? "none" : undefined,
      aspectRatio: circle ? undefined : "1",
      objectFit: "cover",
      objectPosition,
      borderRadius: circle ? "var(--radius-circle)" : shape === "soft" ? "var(--radius-2xl)" : "var(--radius-hair)",
      background: onInk ? "rgba(246,218,160,.08)" : "rgba(26,23,18,.06)",
      border: onInk ? "1px solid var(--border-card-on-ink)" : border
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      marginTop: circle ? 0 : 12,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      display: "block",
      font: "var(--fw-medium) 15px var(--font-display)",
      color: onInk ? "var(--text-heading-on-ink)" : "var(--text-heading)"
    }
  }, name), /*#__PURE__*/React.createElement("small", {
    style: {
      font: "12px var(--font-mono)",
      color: onInk ? "var(--text-meta-on-ink)" : "var(--text-meta)"
    }
  }, role)));
}
Object.assign(__ds_scope, { MemberCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/blocks/MemberCard.jsx", error: String((e && e.message) || e) }); }

// components/blocks/SyllableSplit.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** BLYN / AI: the name split into its two halves, gold measurement beside violet inference. */
function SyllableSplit({
  left,
  right,
  note,
  tinted = true,
  compact = false,
  style,
  ...rest
}) {
  const cell = (d, side) => /*#__PURE__*/React.createElement("div", {
    style: {
      padding: compact ? "20px 0 22px" : "var(--pad-card-lg)",
      borderRight: !compact && side === 0 ? "1px solid var(--border-hairline)" : undefined,
      borderBottom: compact && side === 0 ? "1px solid var(--border-hairline)" : undefined,
      background: tinted ? side === 0 ? "var(--tint-gold-fade)" : "var(--tint-violet-fade)" : undefined
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      display: "block",
      font: "var(--fw-regular) " + (compact ? "40px" : "var(--fs-syllable)") + "/1 var(--font-display)",
      letterSpacing: "var(--track-h2)",
      color: side === 0 ? "var(--gold-700)" : "var(--violet-700)"
    }
  }, d.word), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: (compact ? "14px" : "20px") + " 0 0",
      font: "var(--fw-regular) " + (compact ? "17px" : "var(--fs-h3)") + "/1.35 var(--font-display)",
      color: "var(--text-heading)"
    }
  }, d.expansion), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: (compact ? "9px" : "12px") + " 0 0",
      font: (compact ? "13px" : "var(--fs-body-sm)") + "/var(--lh-body) var(--font-body)",
      color: "var(--text-muted)"
    }
  }, d.note));
  return /*#__PURE__*/React.createElement("div", _extends({
    style: style
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: compact ? "block" : "grid",
      gridTemplateColumns: compact ? undefined : "1fr 1fr",
      borderTop: "var(--rule-strong)"
    }
  }, cell(left, 0), cell(right, 1)), note && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "20px 0 0",
      font: "13px/var(--lh-body) var(--font-body)",
      color: "var(--text-muted)",
      maxWidth: "82ch"
    }
  }, note));
}
Object.assign(__ds_scope, { SyllableSplit });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/blocks/SyllableSplit.jsx", error: String((e && e.message) || e) }); }

// components/brand/EquityCurve.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const BAND = "M0 150 L100 140 L190 156 L290 120 L380 134 L480 96 L570 112 L670 72 L760 88 L860 50 L950 66 L1060 26 L1130 40 L1200 8";
const FULL = "M0 560 L90 548 L170 566 L250 512 L330 528 L410 470 L490 486 L570 424 L650 448 L730 380 L810 398 L890 330 L970 352 L1060 268 L1130 288 L1200 210";

/** The signature equity curve: a stepped gain line running gold (bottom-left) into violet (top-right). */
function EquityCurve({
  variant = "band",
  direction = "forward",
  tone = "paper",
  style,
  ...rest
}) {
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
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 1200 " + h,
    "aria-hidden": "true",
    preserveAspectRatio: "none",
    style: {
      display: "block",
      width: "100%",
      height: h,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: id,
    x1: "0",
    y1: "1",
    x2: "1",
    y2: "0"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: from
  }), /*#__PURE__*/React.createElement("stop", {
    offset: ".55",
    stopColor: "var(--bridge-500)"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: to
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: id + "-f",
    x1: "0",
    y1: "0",
    x2: "1",
    y2: "0"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: fillA
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: fillB
  }))), /*#__PURE__*/React.createElement("path", {
    d: d + " L1200 " + h + " L0 " + h + " Z",
    fill: "url(#" + id + "-f)"
  }), /*#__PURE__*/React.createElement("path", {
    d: d,
    fill: "none",
    stroke: "url(#" + id + ")",
    strokeWidth: band ? 6 : 7,
    strokeLinejoin: "round",
    strokeLinecap: "round"
  }));
}
Object.assign(__ds_scope, { EquityCurve });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/EquityCurve.jsx", error: String((e && e.message) || e) }); }

// components/brand/GradientRule.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** The gold-to-violet hairline. It separates the brand band from content and appears once per surface. */
function GradientRule({
  height = 3,
  direction = "forward",
  style,
  ...rest
}) {
  const g = direction === "reverse" ? "linear-gradient(90deg,var(--violet-700),var(--violet-500) 26%,var(--bridge-500) 58%,var(--gold-400))" : "var(--gradient-rule)";
  return /*#__PURE__*/React.createElement("div", _extends({
    "aria-hidden": "true",
    style: {
      height,
      background: g,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { GradientRule });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/GradientRule.jsx", error: String((e && e.message) || e) }); }

// components/brand/LogoMark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const PLATE = {
  sm: {
    box: 36,
    glyph: 26,
    radius: 10,
    glow: "var(--shadow-mark)"
  },
  md: {
    box: 42,
    glyph: 31,
    radius: 12,
    glow: "var(--shadow-mark)"
  },
  lg: {
    box: 64,
    glyph: 46,
    radius: 18,
    glow: "var(--shadow-mark-lg)"
  }
};

/** The BlynAI mark: two gold chevrons enclosing a 2x2 ledger of dots. */
function LogoMark({
  size = "md",
  plate = true,
  tone = "gold",
  style,
  ...rest
}) {
  const p = PLATE[size] || PLATE.md;
  const id = "blynai-mark-" + size + "-" + tone;
  const gold = tone === "gold";
  const glyph = /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 40 40",
    fill: "none",
    "aria-hidden": "true",
    style: {
      width: p.glyph,
      height: p.glyph,
      display: "block"
    }
  }, gold && /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: id,
    x1: "0",
    y1: "0",
    x2: "1",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "var(--gold-300)"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "var(--gold-400)"
  }))), /*#__PURE__*/React.createElement("path", {
    d: "M16.5 9 L8.5 20 L16.5 31",
    stroke: gold ? "url(#" + id + ")" : "currentColor",
    strokeWidth: "2.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M23.5 9 L31.5 20 L23.5 31",
    stroke: gold ? "url(#" + id + ")" : "currentColor",
    strokeWidth: "2.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "17",
    cy: "17.5",
    r: "2.1",
    fill: gold ? "var(--gold-300)" : "currentColor"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "23",
    cy: "17.5",
    r: "2.1",
    fill: gold ? "var(--gold-600)" : "currentColor",
    opacity: gold ? 1 : 0.55
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "17",
    cy: "22.5",
    r: "2.1",
    fill: gold ? "var(--gold-600)" : "currentColor",
    opacity: gold ? 1 : 0.55
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "23",
    cy: "22.5",
    r: "2.1",
    fill: gold ? "var(--gold-300)" : "currentColor"
  }));
  if (!plate) return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      ...style
    }
  }, rest), glyph);
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      width: p.box,
      height: p.box,
      flex: "none",
      display: "grid",
      placeItems: "center",
      borderRadius: p.radius,
      background: size === "lg" ? "var(--ink-800)" : "rgba(0,0,0,.28)",
      border: "1px solid " + (size === "lg" ? "rgba(245,184,79,.34)" : "var(--border-gold)"),
      boxShadow: p.glow,
      ...style
    }
  }, rest), glyph);
}
Object.assign(__ds_scope, { LogoMark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/LogoMark.jsx", error: String((e && e.message) || e) }); }

// components/brand/Wordmark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** "BlynAI Capital" set in Space Grotesk with the AI in gold, over the mono descriptor line. */
function Wordmark({
  tone = "ink",
  size = "md",
  descriptor = "L&D Finance Lab",
  name = "Blyn|AI| Capital",
  style,
  ...rest
}) {
  const onInk = tone === "ink";
  const S = {
    sm: [15, 9],
    md: [17, 10],
    lg: [27, 13]
  }[size] || [17, 10];
  const parts = name.split("|");
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("b", {
    style: {
      font: "var(--fw-semibold) " + S[0] + "px/1.05 var(--font-display)",
      letterSpacing: ".01em",
      whiteSpace: "nowrap",
      color: onInk ? "var(--text-heading-on-ink)" : "var(--text-heading)"
    }
  }, parts[0], /*#__PURE__*/React.createElement("i", {
    style: {
      fontStyle: "normal",
      color: onInk ? "var(--gold-400)" : "var(--gold-700)"
    }
  }, parts[1]), parts[2]), descriptor && /*#__PURE__*/React.createElement("small", {
    style: {
      font: S[1] + "px var(--font-mono)",
      textTransform: "uppercase",
      letterSpacing: size === "lg" ? "var(--track-eyebrow-tight)" : ".14em",
      whiteSpace: "nowrap",
      color: onInk ? "var(--violet-400)" : "var(--violet-700)"
    }
  }, descriptor));
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONE = {
  neutral: {
    bg: "rgba(0,0,0,.08)",
    color: "var(--ink-600)",
    border: "none"
  },
  gold: {
    bg: "rgba(245,184,79,.14)",
    color: "var(--gold-900)",
    border: "1px solid var(--border-gold)"
  },
  violet: {
    bg: "rgba(107,78,219,.10)",
    color: "var(--violet-700)",
    border: "1px solid var(--border-violet)"
  },
  ink: {
    bg: "var(--ink-600)",
    color: "var(--paper-000)",
    border: "none"
  }
};

/** Small mono chip for a state, a reference id or a count. */
function Badge({
  tone = "neutral",
  children,
  style,
  ...rest
}) {
  const t = TONE[tone] || TONE.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      padding: "3px 7px",
      borderRadius: "var(--radius-xs)",
      font: "var(--fw-semibold) 10.5px/1.4 var(--font-mono)",
      letterSpacing: ".04em",
      background: t.bg,
      color: t.color,
      border: t.border,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const V = {
  gold: {
    bg: "var(--gold-400)",
    hover: "var(--gold-300)",
    color: "#151006",
    border: "none",
    radius: "var(--radius-md)"
  },
  gradient: {
    bg: "var(--gradient-action)",
    hover: "var(--gradient-action)",
    color: "#fff",
    border: "none",
    radius: "var(--radius-sm)"
  },
  outline: {
    bg: "transparent",
    hover: "rgba(26,23,18,.05)",
    color: "var(--text-heading)",
    border: "1px solid var(--border-strong)",
    radius: "var(--radius-sm)"
  },
  outlineInk: {
    bg: "transparent",
    hover: "rgba(246,218,160,.07)",
    color: "var(--text-heading-on-ink)",
    border: "1px solid rgba(246,218,160,.24)",
    radius: "var(--radius-md)"
  },
  pill: {
    bg: "var(--gold-400)",
    hover: "var(--gold-300)",
    color: "#151006",
    border: "none",
    radius: "var(--radius-pill)"
  },
  pillViolet: {
    bg: "rgba(161,138,255,.14)",
    hover: "rgba(161,138,255,.22)",
    color: "var(--violet-200)",
    border: "1px solid var(--border-violet-strong)",
    radius: "var(--radius-pill)"
  }
};
const H = {
  sm: "var(--control-h-sm)",
  md: "var(--control-h)",
  lg: "var(--control-h-lg)"
};

/** The brand's action control. Gold means "the live thing"; gradient means "the company"; outlines are secondary. */
function Button({
  variant = "gold",
  size = "md",
  as = "a",
  block = false,
  disabled = false,
  children,
  style,
  ...rest
}) {
  const [hot, setHot] = React.useState(false);
  const v = V[variant] || V.gold;
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    onMouseEnter: () => setHot(true),
    onMouseLeave: () => setHot(false),
    "aria-disabled": disabled || undefined,
    style: {
      display: block ? "flex" : "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      height: H[size] || H.md,
      padding: block ? 0 : "0 var(--pad-button-x)",
      width: block ? "100%" : undefined,
      boxSizing: "border-box",
      borderRadius: v.radius,
      background: hot && !disabled ? v.hover : v.bg,
      border: v.border,
      color: v.color,
      font: "var(--type-button)",
      textDecoration: "none",
      cursor: disabled ? "not-allowed" : "pointer",
      filter: variant === "gradient" && hot && !disabled ? "brightness(1.1)" : undefined,
      opacity: disabled ? 0.45 : 1,
      transition: "background-color var(--dur-fast) var(--ease),filter var(--dur-fast) var(--ease)",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONE = {
  paper: {
    background: "var(--surface-card)",
    border: "1px solid var(--border-card)",
    borderRadius: "var(--radius-sm)",
    boxShadow: "var(--shadow-violet-edge)",
    color: "var(--text-body)"
  },
  raised: {
    background: "var(--surface-raised)",
    border: "1px solid var(--border-card)",
    borderRadius: "var(--radius-sm)",
    color: "var(--text-body)"
  },
  ink: {
    background: "var(--surface-card-on-ink)",
    border: "1px solid var(--border-hairline-on-ink)",
    borderRadius: "var(--radius-xl)",
    color: "var(--text-body-on-ink)"
  },
  glass: {
    background: "var(--surface-glass-on-ink)",
    border: "1px solid rgba(161,138,255,.28)",
    borderRadius: "var(--radius-2xl)",
    color: "var(--lilac-100)"
  }
};
const TINT = {
  gold: "var(--tint-gold-fade)",
  violet: "var(--tint-violet-fade)"
};

/** Container primitive. Radius follows the surface: 6px on paper, 14-16px on ink. */
function Card({
  tone = "paper",
  tint,
  padding = "var(--pad-card)",
  children,
  style,
  ...rest
}) {
  const t = TONE[tone] || TONE.paper;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      ...t,
      padding,
      backgroundImage: tint ? TINT[tint] : undefined,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/blocks/FeatureCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** A numbered or labelled research note. */
function FeatureCard({
  index,
  label,
  title,
  children,
  tone = "ink",
  style,
  ...rest
}) {
  const onInk = tone === "ink" || tone === "glass";
  return /*#__PURE__*/React.createElement(__ds_scope.Card, _extends({
    tone: tone,
    padding: tone === "glass" ? "24px 22px" : "var(--pad-card)",
    style: style
  }, rest), (index || label) && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: "var(--fw-semibold) " + (label ? "var(--fs-eyebrow)" : "12px") + " var(--font-mono)",
      letterSpacing: label ? ".14em" : undefined,
      textTransform: label ? "uppercase" : undefined,
      color: onInk ? label ? "var(--violet-400)" : "var(--gold-400)" : "var(--gold-700)"
    }
  }, label || index), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "12px 0 9px",
      font: "var(--fw-semibold) " + (tone === "glass" ? "17px" : "var(--fs-h4)") + "/var(--lh-h3) var(--font-display)",
      color: onInk ? "var(--text-heading-on-ink)" : "var(--text-heading)"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: tone === "glass" ? "13.5px" : "14px",
      lineHeight: "var(--lh-body-tight)",
      color: onInk ? "var(--text-body-on-ink)" : "var(--text-body)"
    }
  }, children));
}
Object.assign(__ds_scope, { FeatureCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/blocks/FeatureCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONE = {
  violet: "var(--violet-700)",
  gold: "var(--gold-400)",
  lilac: "var(--violet-400)",
  muted: "var(--text-meta)"
};

/** Mono, uppercase, wide-tracked label that opens almost every section. */
function Eyebrow({
  tone = "violet",
  size = "md",
  as = "p",
  children,
  style,
  ...rest
}) {
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      margin: 0,
      font: "var(--fw-semibold) " + (size === "sm" ? "var(--fs-micro)" : "var(--fs-eyebrow)") + "/1.2 var(--font-mono)",
      letterSpacing: size === "sm" ? "var(--track-eyebrow-tight)" : "var(--track-eyebrow)",
      textTransform: "uppercase",
      color: TONE[tone] || TONE.violet,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/data/DefinitionList.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Mono key/value rows — the registry voice. Values are facts, never sentences. */
function DefinitionList({
  items = [],
  tone = "paper",
  style,
  ...rest
}) {
  const onInk = tone === "ink";
  return /*#__PURE__*/React.createElement("dl", _extends({
    style: {
      display: "grid",
      gridTemplateColumns: "auto 1fr",
      gap: "13px var(--space-8)",
      margin: 0,
      font: "var(--fs-meta) var(--font-mono)",
      ...style
    }
  }, rest), items.map(it => [/*#__PURE__*/React.createElement("dt", {
    key: it.term + "-t",
    style: {
      color: onInk ? "var(--text-meta-on-ink)" : "var(--text-meta)"
    }
  }, it.term), /*#__PURE__*/React.createElement("dd", {
    key: it.term + "-d",
    style: {
      margin: 0,
      color: onInk ? "var(--text-on-ink)" : "var(--text-heading)"
    }
  }, it.href ? /*#__PURE__*/React.createElement("a", {
    href: it.href,
    style: {
      color: onInk ? "var(--link-on-ink)" : "var(--link)",
      textDecoration: "none"
    }
  }, it.value) : it.value)]));
}
Object.assign(__ds_scope, { DefinitionList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/DefinitionList.jsx", error: String((e && e.message) || e) }); }

// components/data/NumberedList.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const RAMP = ["var(--gold-700)", "var(--gold-800)", "var(--violet-600)", "var(--violet-700)"];

/** Numbered research rows. The index colour walks the gold axis into the violet axis. */
function NumberedList({
  items = [],
  compact = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("ol", _extends({
    style: {
      margin: 0,
      padding: 0,
      listStyle: "none",
      display: "flex",
      flexDirection: "column",
      gap: 0,
      ...style
    }
  }, rest), items.map((it, i) => /*#__PURE__*/React.createElement("li", {
    key: it.title,
    style: {
      display: compact ? "block" : "grid",
      gridTemplateColumns: compact ? undefined : "var(--grid-numbered)",
      gap: compact ? undefined : "var(--gap-col)",
      padding: compact ? "20px 0" : "var(--pad-row-y) 0",
      borderTop: "1px solid var(--border-hairline)",
      borderBottom: i === items.length - 1 ? "1px solid var(--border-hairline)" : undefined
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: (compact ? "13px" : "15px") + " var(--font-mono)",
      color: RAMP[i % RAMP.length]
    }
  }, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: compact ? "8px 0" : 0,
      font: "var(--fw-medium) " + (compact ? "var(--fs-h4)" : "var(--fs-h3)") + "/var(--lh-h3) var(--font-display)",
      letterSpacing: "var(--track-h3)",
      color: "var(--text-heading)"
    }
  }, it.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: compact ? "13.5px" : "var(--fs-body)",
      lineHeight: "var(--lh-body)",
      color: "var(--text-body)"
    }
  }, it.body))));
}
Object.assign(__ds_scope, { NumberedList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/NumberedList.jsx", error: String((e && e.message) || e) }); }

// components/data/StatBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Full-bleed strip of hairline-separated facts on ink. */
function StatBar({
  items = [],
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(" + Math.max(items.length, 1) + ",1fr)",
      gap: 1,
      background: "var(--border-hairline-on-ink)",
      ...style
    }
  }, rest), items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.label,
    style: {
      padding: "var(--space-8) var(--pad-header-x)",
      background: "var(--ink-780)"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: "var(--fs-micro) var(--font-mono)",
      letterSpacing: ".14em",
      textTransform: "uppercase",
      color: "var(--text-meta-on-ink)"
    }
  }, it.label), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "9px 0 0",
      font: "var(--fw-semibold) var(--fs-h4) var(--font-display)",
      color: "var(--text-heading-on-ink)"
    }
  }, it.value))));
}
Object.assign(__ds_scope, { StatBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/StatBar.jsx", error: String((e && e.message) || e) }); }

// components/data/StatusPanel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** The "Būsena" panel: a mono, line-per-fact statement of what is and isn't running. */
function StatusPanel({
  title = "Būsena",
  lines = [],
  tone = "paper",
  style,
  ...rest
}) {
  const onInk = tone === "ink" || tone === "glass";
  return /*#__PURE__*/React.createElement(__ds_scope.Card, _extends({
    tone: tone,
    padding: "24px 26px",
    style: style
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    tone: onInk ? "lilac" : "violet",
    size: "sm",
    style: {
      marginBottom: 14
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: "13.5px/var(--lh-mono) var(--font-mono)",
      color: onInk ? "var(--text-on-ink)" : "var(--text-heading)"
    }
  }, lines.map((l, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, l, i < lines.length - 1 && /*#__PURE__*/React.createElement("br", null)))));
}
Object.assign(__ds_scope, { StatusPanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/StatusPanel.jsx", error: String((e && e.message) || e) }); }

// components/layout/DualPanel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Two columns with the brand's 1px separator — plain hairline, or the vertical gold-to-violet gradient. */
function DualPanel({
  divider = "hairline",
  gap = "var(--gap-wide)",
  left,
  right,
  children,
  style,
  ...rest
}) {
  const kids = children ? React.Children.toArray(children) : [left, right];
  const bg = divider === "gradient" ? "var(--gradient-divider-v)" : divider === "hairline" ? "var(--border-hairline)" : "transparent";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "grid",
      gridTemplateColumns: "var(--grid-split)",
      gap: "0 " + gap,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, kids[0]), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      background: bg
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, kids[1]));
}
Object.assign(__ds_scope, { DualPanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/DualPanel.jsx", error: String((e && e.message) || e) }); }

// components/layout/Section.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONE = {
  paper: {
    background: "var(--surface-page)",
    color: "var(--text-body)",
    border: "var(--border-hairline)"
  },
  raised: {
    background: "var(--surface-card)",
    color: "var(--text-body)",
    border: "var(--border-hairline)"
  },
  wash: {
    background: "var(--wash-gold),var(--wash-violet),var(--paper-050)",
    color: "var(--text-body)",
    border: "var(--border-hairline)"
  },
  ink: {
    background: "var(--surface-ink-soft)",
    color: "var(--text-body-on-ink)",
    border: "var(--border-hairline-on-ink)"
  },
  inkWash: {
    background: "var(--wash-gold-ink),var(--wash-violet-ink),var(--ink-850)",
    color: "var(--text-body-on-ink)",
    border: "var(--border-hairline-on-ink)"
  }
};

/** Page section shell: consistent gutters, optional eyebrow + heading, hairline bottom edge. */
function Section({
  tone = "paper",
  eyebrow,
  heading,
  padding,
  divider = true,
  compact = false,
  children,
  style,
  ...rest
}) {
  const t = TONE[tone] || TONE.paper;
  const onInk = tone === "ink" || tone === "inkWash";
  const pad = padding || (compact ? "var(--mobile-y) var(--mobile-x)" : "var(--section-y) var(--section-x)");
  return /*#__PURE__*/React.createElement("section", _extends({
    style: {
      padding: pad,
      background: t.background,
      color: t.color,
      borderBottom: divider ? "1px solid " + t.border : undefined,
      ...style
    }
  }, rest), eyebrow && /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    tone: onInk ? "gold" : "violet",
    size: compact ? "sm" : "md",
    style: {
      marginBottom: heading ? 14 : 30
    }
  }, eyebrow), heading && /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "0 0 34px",
      font: "var(--fw-medium) var(--fs-h2-lg)/var(--lh-h2) var(--font-display)",
      letterSpacing: "var(--track-h2)",
      color: onInk ? "var(--text-heading-on-ink)" : "var(--text-heading)"
    }
  }, heading), children);
}
Object.assign(__ds_scope, { Section });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Section.jsx", error: String((e && e.message) || e) }); }

// components/layout/SiteFooter.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Ink footer: the regulatory disclaimer, then a mono domain/copyright line. */
function SiteFooter({
  legal,
  meta = "blynai.eu · © 2026 MB „BlynAI“",
  padding = "34px var(--section-x) 44px",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("footer", _extends({
    style: {
      padding,
      background: "var(--surface-ink)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: "var(--measure-legal)",
      font: "12.5px/1.6 var(--font-body)",
      color: "var(--text-meta-on-ink)"
    }
  }, legal), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "20px 0 0",
      font: "var(--fs-eyebrow) var(--font-mono)",
      letterSpacing: "var(--track-foot)",
      textTransform: "uppercase",
      color: "var(--sand-600)"
    }
  }, meta));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// components/layout/SiteHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** The ink header band: mark + lockup left, mono nav and LT/EN switch right. */
function SiteHeader({
  nav = [],
  lang = null,
  altLang = "EN",
  href = "/",
  compact = false,
  onMenu,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "18px 24px",
      padding: compact ? "14px 18px" : "var(--pad-header-y) var(--pad-header-x)",
      background: "var(--surface-ink)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 12,
      color: "inherit",
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.LogoMark, {
    size: compact ? "sm" : "md"
  }), /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    tone: "ink",
    size: compact ? "sm" : "md"
  })), compact ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Meniu",
    onClick: onMenu,
    style: {
      width: "var(--tap-min)",
      height: "var(--tap-min)",
      flex: "none",
      display: "grid",
      placeItems: "center",
      border: "1px solid rgba(246,218,160,.18)",
      borderRadius: "var(--radius-md)",
      background: "transparent",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 5
    }
  }, [0, 1, 2].map(i => /*#__PURE__*/React.createElement("i", {
    key: i,
    style: {
      display: "block",
      width: 17,
      height: 1.5,
      background: "var(--sand-200)"
    }
  })))) : /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--gap-nav)",
      font: "var(--fs-eyebrow) var(--font-mono)",
      letterSpacing: "var(--track-nav)",
      textTransform: "uppercase"
    }
  }, nav.map(item => /*#__PURE__*/React.createElement("a", {
    key: item.label,
    href: item.href || "#",
    style: {
      color: "var(--link-nav-on-ink)",
      textDecoration: "none"
    }
  }, item.label)), lang && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      gap: "var(--gap-inline-xs)",
      paddingLeft: 8,
      borderLeft: "1px solid rgba(246,218,160,.14)"
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      fontWeight: 500,
      color: "var(--gold-300)"
    }
  }, lang), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--sand-600)"
    }
  }, "\xB7"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "var(--text-meta-on-ink)",
      textDecoration: "none"
    }
  }, altLang))));
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/social/OGCard.jsx
try { (() => {
const DS = window.BlynAICapitalDesignSystem_090ef4 || {};
const {
  LogoMark,
  Wordmark,
  GradientRule,
  EquityCurve,
  Eyebrow,
  CoinCard
} = DS;
const C = window.BLYN || {};
const PAD = 64;
function Lock({
  tone = 'paper'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: PAD,
      top: 60,
      display: 'flex',
      alignItems: 'center',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(LogoMark, {
    size: "lg"
  }), /*#__PURE__*/React.createElement(Wordmark, {
    tone: tone === 'ink' ? 'ink' : 'paper',
    size: "lg"
  }));
}
function Foot({
  bottom = 52,
  tone = 'paper'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: PAD,
      right: PAD,
      bottom,
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      gap: 24,
      font: '16px var(--font-mono)',
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: tone === 'ink' ? 'var(--sand-500)' : 'var(--text-meta)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "blynai.eu"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "MB \u201EBlynAI\u201C \xB7 Lietuva"));
}
const SHELL = {
  position: 'relative',
  width: 1200,
  height: 630,
  overflow: 'hidden',
  background: 'var(--wash-gold),var(--wash-violet),var(--paper-050)'
};
const SHELL_INK = {
  position: 'relative',
  width: 1200,
  height: 630,
  overflow: 'hidden',
  background: 'var(--wash-gold-ink),var(--wash-violet-ink),var(--ink-850)'
};
const HEAD = {
  margin: 0,
  font: 'var(--fw-regular) 52px/1.14 var(--font-display)',
  letterSpacing: 'var(--track-display)',
  color: 'var(--text-heading)'
};
const GRAD = {
  fontStyle: 'normal',
  background: 'var(--gradient-text)',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  color: 'transparent'
};

/** OG card — a claim in two lines over the equity curve. The default share image. */
function OGSentence() {
  return /*#__PURE__*/React.createElement("div", {
    style: SHELL
  }, /*#__PURE__*/React.createElement(GradientRule, {
    height: 6,
    style: {
      position: 'absolute',
      inset: '0 0 auto 0'
    }
  }), /*#__PURE__*/React.createElement(Lock, null), /*#__PURE__*/React.createElement("p", {
    style: {
      ...HEAD,
      position: 'absolute',
      left: PAD,
      top: 196,
      width: 1072
    }
  }, "Algoritmin\u0117 prekyba kriptovaliutomis.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
    style: GRAD
  }, "Tyrimai, inovacijos, sprendimai.")), /*#__PURE__*/React.createElement(EquityCurve, {
    variant: "band",
    style: {
      position: 'absolute',
      left: 0,
      bottom: 0,
      width: 1200,
      height: 190
    }
  }), /*#__PURE__*/React.createElement(Foot, {
    bottom: 172
  }));
}

/** OG card — the name, split and expanded. Use when the audience does not know the brand yet. */
function OGName() {
  return /*#__PURE__*/React.createElement("div", {
    style: SHELL
  }, /*#__PURE__*/React.createElement(GradientRule, {
    height: 6,
    style: {
      position: 'absolute',
      inset: '0 0 auto 0'
    }
  }), /*#__PURE__*/React.createElement(Lock, null), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: PAD,
      top: 180,
      display: 'flex',
      alignItems: 'baseline',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      width: 268,
      font: '400 92px/1 var(--font-display)',
      letterSpacing: '-.04em',
      color: 'var(--gold-700)'
    }
  }, "BLYN"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: '400 92px/1 var(--font-display)',
      letterSpacing: '-.04em',
      color: 'var(--violet-700)'
    }
  }, "AI")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: PAD,
      top: 300,
      display: 'flex',
      gap: 24,
      font: '18px/1.5 var(--font-mono)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      width: 268,
      color: 'var(--gold-900)'
    }
  }, "Blockchain Ledger", /*#__PURE__*/React.createElement("br", null), "Yield Numerics"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      width: 268,
      color: 'var(--violet-800)'
    }
  }, "Algorithmic", /*#__PURE__*/React.createElement("br", null), "Inference")), /*#__PURE__*/React.createElement(EquityCurve, {
    variant: "band",
    style: {
      position: 'absolute',
      left: 0,
      bottom: 0,
      width: 1200,
      height: 190
    }
  }), /*#__PURE__*/React.createElement(Foot, {
    bottom: 172
  }));
}

/** OG card — dark. For the research journal and anything published from the bot's own console. */
function OGDark() {
  return /*#__PURE__*/React.createElement("div", {
    style: SHELL_INK
  }, /*#__PURE__*/React.createElement(GradientRule, {
    height: 6,
    style: {
      position: 'absolute',
      inset: '0 0 auto 0'
    }
  }), /*#__PURE__*/React.createElement(EquityCurve, {
    variant: "full",
    tone: "ink",
    style: {
      position: 'absolute',
      inset: 0,
      width: 1200,
      height: 630
    }
  }), /*#__PURE__*/React.createElement(Lock, {
    tone: "ink"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: PAD,
      top: 206,
      display: 'flex',
      alignItems: 'baseline',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      width: 272,
      font: '400 96px/1 var(--font-display)',
      letterSpacing: '-.04em',
      color: 'var(--gold-400)'
    }
  }, "BLYN"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: '400 96px/1 var(--font-display)',
      letterSpacing: '-.04em',
      color: 'var(--violet-400)'
    }
  }, "AI")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: PAD,
      top: 320,
      display: 'flex',
      gap: 20,
      font: '17px/1.5 var(--font-mono)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      width: 272,
      color: '#E0C48B'
    }
  }, "Blockchain Ledger", /*#__PURE__*/React.createElement("br", null), "Yield Numerics"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--lilac-400)'
    }
  }, "Algorithmic", /*#__PURE__*/React.createElement("br", null), "Inference")), /*#__PURE__*/React.createElement(Foot, {
    tone: "ink"
  }));
}

/** OG card — the two instances. For posts about a specific account's results. */
function OGCoins() {
  return /*#__PURE__*/React.createElement("div", {
    style: SHELL
  }, /*#__PURE__*/React.createElement(GradientRule, {
    height: 6,
    style: {
      position: 'absolute',
      inset: '0 0 auto 0'
    }
  }), /*#__PURE__*/React.createElement(Lock, null), /*#__PURE__*/React.createElement("p", {
    style: {
      ...HEAD,
      position: 'absolute',
      left: PAD,
      bottom: 150,
      width: 520,
      fontSize: 62,
      lineHeight: 1.04
    }
  }, "Vienas kodas, ", /*#__PURE__*/React.createElement("em", {
    style: GRAD
  }, "dvi s\u0105skaitos"), "."), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: PAD,
      top: 196,
      display: 'flex',
      alignItems: 'center',
      gap: 34
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/coin-luko.svg",
    alt: "",
    style: {
      width: 150,
      height: 150
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: '600 20px var(--font-display)',
      letterSpacing: 'var(--track-coin)',
      color: 'var(--luko-label)'
    }
  }, "LUKO")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: '300 40px var(--font-display)',
      color: 'var(--text-faint)'
    }
  }, "\xD7"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/coin-byko.svg",
    alt: "",
    style: {
      width: 150,
      height: 150
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: '600 20px var(--font-display)',
      letterSpacing: 'var(--track-coin)',
      color: 'var(--byko-label)'
    }
  }, "BYKO"))), /*#__PURE__*/React.createElement(Foot, null));
}
Object.assign(window, {
  OGSentence,
  OGName,
  OGDark,
  OGCoins
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/social/OGCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeDocument.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const DS = window.BlynAICapitalDesignSystem_090ef4 || {};
const {
  LogoMark,
  Wordmark,
  GradientRule,
  EquityCurve,
  Button,
  Eyebrow,
  Badge,
  Card,
  SiteHeader,
  SiteFooter,
  Section,
  DualPanel,
  DefinitionList,
  NumberedList,
  StatBar,
  StatusPanel,
  SyllableSplit,
  CoinCard,
  MemberCard,
  FeatureCard
} = DS;
const C = window.BLYN || {};
function CoinPair({
  narrow,
  tone
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: narrow ? 10 : 12
    }
  }, /*#__PURE__*/React.createElement(CoinCard, {
    member: "luko",
    tone: tone,
    layout: narrow ? 'row' : 'stack',
    coinSize: narrow ? 30 : 44
  }), /*#__PURE__*/React.createElement(CoinCard, {
    member: "byko",
    tone: tone,
    layout: narrow ? 'row' : 'stack',
    coinSize: narrow ? 30 : 44
  }));
}

/** Variant A — "Dokumentas": light, academic, the gold-to-violet axis running left to right. */
function HomeDocument({
  narrow = false
}) {
  const [menu, setMenu] = React.useState(false);
  const px = narrow ? 'var(--mobile-x)' : 'var(--section-x)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-page)',
      color: 'var(--text-heading)'
    }
  }, /*#__PURE__*/React.createElement(SiteHeader, {
    compact: narrow,
    nav: C.nav,
    onMenu: () => setMenu(m => !m)
  }), /*#__PURE__*/React.createElement(GradientRule, null), menu && narrow && /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--ink-800)',
      padding: '8px 18px 14px'
    }
  }, C.nav.map(n => /*#__PURE__*/React.createElement("a", {
    key: n.label,
    href: "#",
    style: {
      padding: '11px 0',
      font: 'var(--fs-eyebrow) var(--font-mono)',
      letterSpacing: 'var(--track-nav)',
      textTransform: 'uppercase',
      color: 'var(--link-nav-on-ink)'
    }
  }, n.label))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: narrow ? '32px 18px 30px' : '44px var(--section-x) 48px',
      borderBottom: '1px solid var(--border-hairline)',
      background: 'var(--wash-gold),var(--wash-violet),var(--paper-050)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    size: narrow ? 'sm' : 'md'
  }, C.eyebrow), /*#__PURE__*/React.createElement("div", {
    style: {
      display: narrow ? 'block' : 'grid',
      gridTemplateColumns: 'var(--grid-hero)',
      gap: 'var(--gap-wide)',
      marginTop: 22,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      font: 'var(--fw-regular) ' + (narrow ? '34px' : 'var(--fs-hero)') + '/var(--lh-display) var(--font-display)',
      letterSpacing: 'var(--track-display)',
      maxWidth: 'var(--measure-heading)'
    }
  }, "Skai\u010Diai apie tai, kaip ", /*#__PURE__*/React.createElement("span", {
    className: "blyn-grad"
  }, "programa prekiauja"), "."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '30px 0 0',
      maxWidth: 'var(--measure-lead)',
      font: 'var(--type-lead)',
      color: 'var(--text-body)'
    }
  }, C.leadDoc), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: narrow ? 'column' : 'row',
      flexWrap: 'wrap',
      gap: narrow ? 10 : 12,
      marginTop: 34
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "gradient",
    size: narrow ? 'lg' : 'md',
    block: narrow,
    href: C.urls.journal
  }, C.cta.journal), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: narrow ? 'lg' : 'md',
    block: narrow,
    href: C.urls.github
  }, C.cta.github))), /*#__PURE__*/React.createElement(StatusPanel, {
    lines: C.status,
    style: {
      marginTop: narrow ? 24 : 0
    }
  }))), /*#__PURE__*/React.createElement(Section, {
    tone: "raised",
    id: "vardas",
    eyebrow: "Vardas \xB7 du skiemenys",
    compact: narrow,
    padding: narrow ? '32px 18px' : undefined
  }, /*#__PURE__*/React.createElement(SyllableSplit, _extends({}, C.syllable, {
    compact: narrow
  }))), /*#__PURE__*/React.createElement(Section, {
    id: "tyrimai",
    eyebrow: "Tyrim\u0173 kryptys",
    compact: narrow,
    padding: narrow ? '32px 18px' : undefined
  }, /*#__PURE__*/React.createElement(NumberedList, {
    items: C.directions,
    compact: narrow
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      display: narrow ? 'block' : 'grid',
      gridTemplateColumns: 'minmax(0,1fr) 440px',
      gap: 'var(--gap-section)',
      alignItems: 'center',
      padding: narrow ? '32px 18px' : '52px var(--section-x)',
      borderBottom: '1px solid var(--border-hairline)',
      background: 'radial-gradient(620px 380px at 0% 50%,rgba(245,184,79,.16),transparent 70%),radial-gradient(620px 380px at 100% 50%,rgba(107,78,219,.13),transparent 70%),var(--paper-000)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    size: narrow ? 'sm' : 'md'
  }, C.instances.eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '14px 0 0',
      font: 'var(--fw-medium) ' + (narrow ? '22px' : 'var(--fs-h2)') + '/var(--lh-h2) var(--font-display)',
      letterSpacing: 'var(--track-h2)'
    }
  }, C.instances.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '13px 0 0',
      maxWidth: 'var(--measure-body)',
      font: '400 ' + (narrow ? '14px' : '15px') + '/var(--lh-body) var(--font-body)',
      color: 'var(--text-body)'
    }
  }, C.instances.body)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: narrow ? 20 : 0
    }
  }, /*#__PURE__*/React.createElement(CoinPair, {
    narrow: narrow
  }))), /*#__PURE__*/React.createElement(Section, {
    id: "nariai",
    compact: narrow,
    padding: narrow ? '32px 18px' : undefined,
    divider: false
  }, narrow ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    size: "sm",
    style: {
      marginBottom: 20
    }
  }, "Nariai \xB7 po 50 %"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, C.members.map(m => /*#__PURE__*/React.createElement(MemberCard, _extends({
    key: m.name
  }, m)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28,
      paddingTop: 24,
      borderTop: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    size: "sm",
    id: "rekvizitai",
    style: {
      marginBottom: 18
    }
  }, "Registro duomenys"), /*#__PURE__*/React.createElement(DefinitionList, {
    items: C.registry
  }))) : /*#__PURE__*/React.createElement(DualPanel, {
    divider: "gradient",
    left: /*#__PURE__*/React.createElement("div", {
      id: "rekvizitai"
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      style: {
        marginBottom: 24
      }
    }, "Registro duomenys"), /*#__PURE__*/React.createElement(DefinitionList, {
      items: C.registry
    })),
    right: /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
      style: {
        marginBottom: 24
      }
    }, "Nariai \xB7 po 50 %"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 'var(--gap-grid)'
      }
    }, C.members.map(m => /*#__PURE__*/React.createElement(MemberCard, _extends({
      key: m.name
    }, m)))))
  })), /*#__PURE__*/React.createElement(SiteFooter, {
    legal: C.legal,
    padding: narrow ? '28px 18px 34px' : undefined
  }));
}
Object.assign(window, {
  HomeDocument,
  CoinPair
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeDocument.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeLab.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const DS = window.BlynAICapitalDesignSystem_090ef4 || {};
const {
  LogoMark,
  Wordmark,
  GradientRule,
  EquityCurve,
  Button,
  Eyebrow,
  Badge,
  Card,
  SiteHeader,
  SiteFooter,
  Section,
  DualPanel,
  DefinitionList,
  NumberedList,
  StatBar,
  StatusPanel,
  SyllableSplit,
  CoinCard,
  MemberCard,
  FeatureCard
} = DS;
const C = window.BLYN || {};

/** Variant B — "Laboratorija": dark, continues the bot's own console identity. */
function HomeLab({
  narrow = false
}) {
  const px = narrow ? 'var(--mobile-x)' : 'var(--section-x-ink)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'linear-gradient(150deg,var(--ink-900),var(--ink-780) 55%,#080C0B)',
      color: 'var(--text-on-ink)'
    }
  }, /*#__PURE__*/React.createElement(SiteHeader, {
    compact: narrow,
    nav: C.navLab,
    style: {
      background: 'transparent',
      borderBottom: '1px solid var(--border-hairline-on-ink)'
    }
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      display: narrow ? 'block' : 'grid',
      gridTemplateColumns: 'var(--grid-hero-ink)',
      gap: 'var(--gap-section)',
      padding: narrow ? '36px 18px 32px' : 'var(--hero-y-ink) var(--section-x-ink) 56px',
      borderBottom: '1px solid var(--border-hairline-on-ink)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "gold",
    size: narrow ? 'sm' : 'md',
    style: {
      letterSpacing: 'var(--track-eyebrow-tight)'
    }
  }, "Ma\u017Eoji bendrija \xB7 Lietuvos Respublika"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '18px 0 0',
      font: 'var(--fw-bold) ' + (narrow ? '34px' : 'var(--fs-h1)') + '/var(--lh-h1) var(--font-display)',
      letterSpacing: 'var(--track-h1)',
      color: 'var(--text-heading-on-ink)'
    }
  }, "Algoritmin\u0117s prekybos", /*#__PURE__*/React.createElement("br", null), "tyrim\u0173 laboratorija."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '22px 0 0',
      maxWidth: '44ch',
      font: '400 ' + (narrow ? '15.5px' : 'var(--fs-body-lg)') + '/var(--lh-body-tight) var(--font-body)',
      color: '#d8cfc0'
    }
  }, C.leadLab), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: narrow ? 'column' : 'row',
      gap: narrow ? 10 : 12,
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "gold",
    size: narrow ? 'lg' : 'sm',
    block: narrow,
    href: C.urls.journal
  }, C.cta.journal), /*#__PURE__*/React.createElement(Button, {
    variant: "outlineInk",
    size: narrow ? 'lg' : 'sm',
    block: narrow,
    href: C.urls.github
  }, C.cta.github))), /*#__PURE__*/React.createElement(Card, {
    id: "vardas",
    tone: "ink",
    style: {
      marginTop: narrow ? 26 : 0,
      borderRadius: 'var(--radius-2xl)',
      background: 'rgba(0,0,0,.3)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "muted",
    size: "sm",
    style: {
      color: 'var(--text-meta-on-ink)',
      letterSpacing: '.14em',
      marginBottom: 18
    }
  }, "Vardas"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, [C.syllable.left, C.syllable.right].map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s.word,
    style: {
      paddingTop: i ? 20 : 0,
      borderTop: i ? '1px solid var(--border-hairline-on-ink)' : undefined
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--fw-bold) 34px/1 var(--font-display)',
      letterSpacing: 'var(--track-h2)',
      color: i ? 'var(--gold-400)' : 'var(--text-heading-on-ink)'
    }
  }, s.word), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '11px 0 0',
      font: '15px/1.45 var(--font-body)',
      color: 'var(--text-on-ink)'
    }
  }, s.expansion), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '6px 0 0',
      font: '12.5px/1.5 var(--font-mono)',
      color: 'var(--text-meta-on-ink)'
    }
  }, s.note)))))), /*#__PURE__*/React.createElement(StatBar, {
    items: C.stats,
    style: {
      borderBottom: '1px solid var(--border-hairline-on-ink)'
    }
  }), /*#__PURE__*/React.createElement(Section, {
    id: "tyrimai",
    tone: "ink",
    eyebrow: "Tyrim\u0173 programa",
    heading: "Trys klausimai, \u012F kuriuos ie\u0161kome atsakymo",
    padding: narrow ? '32px 18px' : '56px var(--section-x-ink)',
    style: {
      background: 'transparent'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: narrow ? '1fr' : 'repeat(3,1fr)',
      gap: 'var(--gap-card)'
    }
  }, C.questions.map(q => /*#__PURE__*/React.createElement(FeatureCard, {
    key: q.index,
    index: q.index,
    title: q.title
  }, q.body)))), /*#__PURE__*/React.createElement("section", {
    style: {
      display: narrow ? 'block' : 'grid',
      gridTemplateColumns: 'minmax(0,1fr) 470px',
      gap: 'var(--gap-section)',
      alignItems: 'center',
      padding: narrow ? '32px 18px' : '48px var(--section-x-ink)',
      borderBottom: '1px solid var(--border-hairline-on-ink)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: 'var(--fw-bold) ' + (narrow ? '22px' : '26px') + '/var(--lh-h2) var(--font-display)',
      letterSpacing: 'var(--track-h2)',
      color: 'var(--text-heading-on-ink)'
    }
  }, "Rezultatai skelbiami vie\u0161ai, kol jie vyksta"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '14px 0 0',
      maxWidth: 'var(--measure-body)',
      font: '400 15px/var(--lh-body-tight) var(--font-body)',
      color: 'var(--text-body-on-ink)'
    }
  }, "Du nariai \u2014 du nepriklausomi bot\u0173 egzemplioriai, du atskiri \u017Eurnalai. Skai\u010Diai neredaguojami po fakto.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12,
      marginTop: narrow ? 20 : 0
    }
  }, /*#__PURE__*/React.createElement(CoinCard, {
    member: "luko",
    tone: "ink",
    layout: "row",
    coinSize: 38
  }), /*#__PURE__*/React.createElement(CoinCard, {
    member: "byko",
    tone: "ink",
    layout: "row",
    coinSize: 38
  }))), /*#__PURE__*/React.createElement(Section, {
    tone: "ink",
    padding: narrow ? '32px 18px' : '52px var(--section-x-ink)',
    divider: false,
    style: {
      background: 'transparent'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: narrow ? 'block' : 'grid',
      gridTemplateColumns: 'minmax(0,1fr) 1px minmax(0,1fr)',
      gap: '0 var(--gap-section)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    id: "rekvizitai"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "lilac",
    style: {
      marginBottom: 22
    }
  }, "Juridiniai duomenys"), /*#__PURE__*/React.createElement(DefinitionList, {
    tone: "ink",
    items: C.registry
  })), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      background: 'var(--border-hairline-on-ink)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    id: "nariai",
    style: {
      marginTop: narrow ? 28 : 0
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "lilac",
    style: {
      marginBottom: 22
    }
  }, "Nariai"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, C.members.map(m => /*#__PURE__*/React.createElement(MemberCard, _extends({
    key: m.name
  }, m, {
    tone: "ink",
    shape: "circle",
    role: m.role.replace('MB vadovas', 'narys 50 % · direktorius').replace('MB narys', 'narys 50 %')
  }))))))), /*#__PURE__*/React.createElement(SiteFooter, {
    legal: C.legal,
    padding: narrow ? '28px 18px 34px' : '30px var(--section-x-ink) 40px',
    style: {
      background: 'transparent'
    }
  }));
}
Object.assign(window, {
  HomeLab
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeLab.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeLedger.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const DS = window.BlynAICapitalDesignSystem_090ef4 || {};
const {
  LogoMark,
  Wordmark,
  GradientRule,
  EquityCurve,
  Button,
  Eyebrow,
  Badge,
  Card,
  SiteHeader,
  SiteFooter,
  Section,
  DualPanel,
  DefinitionList,
  NumberedList,
  StatBar,
  StatusPanel,
  SyllableSplit,
  CoinCard,
  MemberCard,
  FeatureCard
} = DS;
const C = window.BLYN || {};

/** Variant D — "Žurnalas": light document, but the equity curve carries the hero and the page opens on the two syllables. */
function HomeLedger({
  narrow = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-page)',
      color: 'var(--text-heading)'
    }
  }, /*#__PURE__*/React.createElement(SiteHeader, {
    compact: narrow,
    nav: C.nav
  }), /*#__PURE__*/React.createElement(GradientRule, {
    height: narrow ? 3 : 6
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--wash-gold),var(--wash-violet),var(--paper-000)',
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      padding: narrow ? '32px 18px 0' : '44px var(--section-x) 0'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    size: narrow ? 'sm' : 'md'
  }, C.eyebrow), /*#__PURE__*/React.createElement("div", {
    style: {
      display: narrow ? 'block' : 'grid',
      gridTemplateColumns: 'minmax(0,1fr) 300px',
      gap: 'var(--gap-wide)',
      marginTop: 24,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      font: 'var(--fw-regular) ' + (narrow ? '34px' : '54px') + '/var(--lh-display) var(--font-display)',
      letterSpacing: 'var(--track-display)',
      maxWidth: narrow ? '18ch' : undefined
    }
  }, "Programa prekiauja. ", /*#__PURE__*/React.createElement("span", {
    className: "blyn-grad"
  }, "Mes tyrin\u0117jame, kaip.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: narrow ? 20 : 34,
      marginTop: 26,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: '30ch',
      font: '400 15px/var(--lh-body) var(--font-body)',
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      font: '600 13px var(--font-mono)',
      letterSpacing: '.1em',
      color: 'var(--gold-900)'
    }
  }, "BLYN"), /*#__PURE__*/React.createElement("br", null), "Blockchain Ledger Yield Numerics \u2014 grandin\u0117, \u017Eurnalas, pelno kreiv\u0117."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: '30ch',
      font: '400 15px/var(--lh-body) var(--font-body)',
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      font: '600 13px var(--font-mono)',
      letterSpacing: '.1em',
      color: 'var(--violet-800)'
    }
  }, "AI"), /*#__PURE__*/React.createElement("br", null), "Algorithmic Inference \u2014 i\u0161vada ir orderis, priimtas taisykli\u0173.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: narrow ? 'column' : 'row',
      gap: narrow ? 10 : 12,
      marginTop: 30
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "gradient",
    size: narrow ? 'lg' : 'md',
    block: narrow,
    href: C.urls.journal
  }, C.cta.journal), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: narrow ? 'lg' : 'md',
    block: narrow,
    href: C.urls.github
  }, C.cta.github))), /*#__PURE__*/React.createElement(StatusPanel, {
    lines: C.status,
    style: {
      marginTop: narrow ? 24 : 4
    }
  }))), /*#__PURE__*/React.createElement(EquityCurve, {
    variant: "band",
    style: {
      marginTop: narrow ? 24 : 30,
      height: narrow ? 96 : 150
    }
  })), /*#__PURE__*/React.createElement(StatBar, {
    items: C.stats
  }), /*#__PURE__*/React.createElement(Section, {
    id: "tyrimai",
    eyebrow: "Tyrim\u0173 kryptys",
    compact: narrow,
    padding: narrow ? '32px 18px' : undefined,
    tone: "raised"
  }, /*#__PURE__*/React.createElement(NumberedList, {
    items: C.directions,
    compact: narrow
  })), /*#__PURE__*/React.createElement(Section, {
    id: "vardas",
    eyebrow: "Vardas \xB7 du skiemenys",
    compact: narrow,
    padding: narrow ? '32px 18px' : undefined
  }, /*#__PURE__*/React.createElement(SyllableSplit, _extends({}, C.syllable, {
    compact: narrow
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      display: narrow ? 'block' : 'grid',
      gridTemplateColumns: 'minmax(0,1fr) 440px',
      gap: 'var(--gap-section)',
      alignItems: 'center',
      padding: narrow ? '32px 18px' : '52px var(--section-x)',
      borderBottom: '1px solid var(--border-hairline)',
      background: 'var(--paper-000)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    size: narrow ? 'sm' : 'md'
  }, C.instances.eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '14px 0 0',
      font: 'var(--fw-medium) ' + (narrow ? '22px' : 'var(--fs-h2)') + '/var(--lh-h2) var(--font-display)',
      letterSpacing: 'var(--track-h2)'
    }
  }, C.instances.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '13px 0 0',
      maxWidth: 'var(--measure-body)',
      font: '400 15px/var(--lh-body) var(--font-body)',
      color: 'var(--text-body)'
    }
  }, C.instances.body)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12,
      marginTop: narrow ? 20 : 0
    }
  }, /*#__PURE__*/React.createElement(CoinCard, {
    member: "luko",
    layout: narrow ? 'row' : 'stack',
    coinSize: narrow ? 30 : 44
  }), /*#__PURE__*/React.createElement(CoinCard, {
    member: "byko",
    layout: narrow ? 'row' : 'stack',
    coinSize: narrow ? 30 : 44
  }))), /*#__PURE__*/React.createElement(Section, {
    id: "nariai",
    compact: narrow,
    padding: narrow ? '32px 18px' : undefined,
    divider: false,
    tone: "raised"
  }, narrow ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    size: "sm",
    style: {
      marginBottom: 20
    }
  }, "Nariai \xB7 po 50 %"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, C.members.map(m => /*#__PURE__*/React.createElement(MemberCard, _extends({
    key: m.name
  }, m)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28,
      paddingTop: 24,
      borderTop: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    size: "sm",
    id: "rekvizitai",
    style: {
      marginBottom: 18
    }
  }, "Registro duomenys"), /*#__PURE__*/React.createElement(DefinitionList, {
    items: C.registry
  }))) : /*#__PURE__*/React.createElement(DualPanel, {
    divider: "gradient",
    left: /*#__PURE__*/React.createElement("div", {
      id: "rekvizitai"
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      style: {
        marginBottom: 24
      }
    }, "Registro duomenys"), /*#__PURE__*/React.createElement(DefinitionList, {
      items: C.registry
    })),
    right: /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
      style: {
        marginBottom: 24
      }
    }, "Nariai \xB7 po 50 %"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 'var(--gap-grid)'
      }
    }, C.members.map(m => /*#__PURE__*/React.createElement(MemberCard, _extends({
      key: m.name
    }, m)))))
  })), /*#__PURE__*/React.createElement(SiteFooter, {
    legal: C.legal,
    padding: narrow ? '28px 18px 34px' : undefined
  }));
}
Object.assign(window, {
  HomeLedger
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeLedger.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomePoster.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const DS = window.BlynAICapitalDesignSystem_090ef4 || {};
const {
  LogoMark,
  Wordmark,
  GradientRule,
  EquityCurve,
  Button,
  Eyebrow,
  Badge,
  Card,
  SiteHeader,
  SiteFooter,
  Section,
  DualPanel,
  DefinitionList,
  NumberedList,
  StatBar,
  StatusPanel,
  SyllableSplit,
  CoinCard,
  MemberCard,
  FeatureCard
} = DS;
const C = window.BLYN || {};

/** Variant C — "Plakatas": violet-ink, poster typography, the two axes as full-bleed halves. */
function HomePoster({
  narrow = false
}) {
  const px = narrow ? 'var(--mobile-x)' : 'var(--section-x-ink-wide)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--ink-760)',
      color: 'var(--lilac-100)'
    }
  }, /*#__PURE__*/React.createElement(SiteHeader, {
    compact: narrow,
    nav: C.navPoster,
    style: {
      background: 'transparent',
      borderBottom: '1px solid rgba(161,138,255,.18)',
      padding: narrow ? '14px 18px' : 'var(--pad-header-y) var(--section-x-ink-wide)'
    }
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      padding: narrow ? '38px 18px 34px' : '74px var(--section-x-ink-wide) 60px',
      borderBottom: '1px solid rgba(161,138,255,.18)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 'auto -120px -220px auto',
      width: 620,
      height: 620,
      borderRadius: '50%',
      background: 'radial-gradient(circle,rgba(107,78,219,.34),transparent 68%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: '-180px auto auto -140px',
      width: 520,
      height: 520,
      borderRadius: '50%',
      background: 'radial-gradient(circle,rgba(245,184,79,.16),transparent 66%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: narrow ? 'block' : 'grid',
      gridTemplateColumns: 'var(--grid-hero)',
      gap: 'var(--gap-wide)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "lilac",
    size: narrow ? 'sm' : 'md'
  }, "MB \u201EBlynAI\u201C \xB7 blynai.eu"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '22px 0 0',
      font: 'var(--fw-bold) ' + (narrow ? '36px' : 'var(--fs-display)') + '/.98 var(--font-display)',
      letterSpacing: '-.04em',
      color: 'var(--text-heading-on-ink)',
      maxWidth: '17ch'
    }
  }, "Programa prekiauja. ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--violet-400)'
    }
  }, "Mes tyrin\u0117jame, kaip ji tai daro.")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '28px 0 0',
      maxWidth: '52ch',
      font: '400 ' + (narrow ? '15.5px' : '17.5px') + '/var(--lh-body-tight) var(--font-body)',
      color: 'var(--violet-300)'
    }
  }, C.leadPoster), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: narrow ? 'column' : 'row',
      flexWrap: 'wrap',
      gap: 12,
      marginTop: 36
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "pill",
    block: narrow,
    href: C.urls.journal
  }, C.cta.journal), /*#__PURE__*/React.createElement(Button, {
    variant: "pillViolet",
    block: narrow,
    href: C.urls.github
  }, C.cta.github))), /*#__PURE__*/React.createElement(StatusPanel, {
    tone: "glass",
    lines: C.status,
    style: {
      marginTop: narrow ? 24 : 0
    }
  }))), /*#__PURE__*/React.createElement("div", {
    id: "vardas",
    style: {
      display: narrow ? 'block' : 'grid',
      gridTemplateColumns: '1fr 1fr',
      borderBottom: '1px solid rgba(161,138,255,.18)'
    }
  }, [C.syllable.left, C.syllable.right].map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s.word,
    style: {
      padding: narrow ? '30px 18px' : '46px var(--section-x-ink-wide)',
      borderRight: !narrow && i === 0 ? '1px solid rgba(161,138,255,.18)' : undefined,
      borderBottom: narrow && i === 0 ? '1px solid rgba(161,138,255,.18)' : undefined,
      background: i ? 'rgba(107,78,219,.1)' : undefined
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--fw-bold) ' + (narrow ? '44px' : '60px') + '/1 var(--font-display)',
      letterSpacing: '-.03em',
      color: i ? 'var(--violet-400)' : 'var(--gold-400)'
    }
  }, s.word), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '18px 0 0',
      font: 'var(--fw-medium) 22px/1.3 var(--font-display)',
      color: 'var(--text-heading-on-ink)'
    }
  }, s.expansion), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '14px 0 0',
      maxWidth: '40ch',
      font: '400 var(--fs-body)/var(--lh-body) var(--font-body)',
      color: 'var(--lilac-400)'
    }
  }, s.note)))), /*#__PURE__*/React.createElement("section", {
    id: "tyrimai",
    style: {
      padding: narrow ? '32px 18px' : '56px var(--section-x-ink-wide)',
      borderBottom: '1px solid rgba(161,138,255,.18)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      gap: 24,
      flexWrap: 'wrap',
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: 'var(--fw-bold) ' + (narrow ? '24px' : 'var(--fs-h2-lg)') + '/var(--lh-h2) var(--font-display)',
      letterSpacing: '-.025em',
      color: 'var(--text-heading-on-ink)'
    }
  }, "K\u0105 bendrija i\u0161 tikr\u0173j\u0173 daro"), /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "muted",
    size: "sm",
    style: {
      color: 'var(--lilac-600)',
      letterSpacing: '.14em'
    }
  }, "Keturios veiklos, viena veiklos sritis")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: narrow ? '1fr' : 'repeat(4,1fr)',
      gap: 14
    }
  }, C.activities.map(a => /*#__PURE__*/React.createElement(FeatureCard, {
    key: a.label,
    tone: "glass",
    label: a.label,
    title: a.title
  }, a.body)))), /*#__PURE__*/React.createElement("section", {
    style: {
      display: narrow ? 'block' : 'grid',
      gridTemplateColumns: 'minmax(0,1fr) 440px',
      gap: 'var(--gap-section)',
      alignItems: 'center',
      padding: narrow ? '32px 18px' : '52px var(--section-x-ink-wide)',
      borderBottom: '1px solid rgba(161,138,255,.18)',
      background: 'rgba(107,78,219,.07)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "lilac",
    size: narrow ? 'sm' : 'md'
  }, C.instances.eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '14px 0 0',
      font: 'var(--fw-bold) ' + (narrow ? '22px' : '26px') + '/var(--lh-h2) var(--font-display)',
      letterSpacing: 'var(--track-h2)',
      color: 'var(--text-heading-on-ink)'
    }
  }, C.instances.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '13px 0 0',
      maxWidth: '44ch',
      font: '400 15px/var(--lh-body-tight) var(--font-body)',
      color: 'var(--lilac-400)'
    }
  }, C.instances.body)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12,
      marginTop: narrow ? 20 : 0
    }
  }, /*#__PURE__*/React.createElement(CoinCard, {
    member: "luko",
    tone: "ink",
    layout: narrow ? 'row' : 'stack'
  }), /*#__PURE__*/React.createElement(CoinCard, {
    member: "byko",
    tone: "ink",
    layout: narrow ? 'row' : 'stack'
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      display: narrow ? 'block' : 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
      gap: 'var(--gap-section)',
      padding: narrow ? '32px 18px' : '52px var(--section-x-ink-wide)',
      borderBottom: '1px solid rgba(161,138,255,.18)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    id: "nariai"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "lilac",
    style: {
      marginBottom: 22
    }
  }, "Nariai \xB7 po 50 %"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 18
    }
  }, C.members.map(m => /*#__PURE__*/React.createElement(MemberCard, _extends({
    key: m.name
  }, m, {
    tone: "ink",
    shape: "soft"
  }))))), /*#__PURE__*/React.createElement("div", {
    id: "rekvizitai",
    style: {
      marginTop: narrow ? 28 : 0
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "lilac",
    style: {
      marginBottom: 22
    }
  }, "Rekvizitai"), /*#__PURE__*/React.createElement(DefinitionList, {
    tone: "ink",
    items: C.registry
  }))), /*#__PURE__*/React.createElement(SiteFooter, {
    legal: C.legal,
    padding: narrow ? '28px 18px 34px' : '32px var(--section-x-ink-wide) 44px',
    style: {
      background: 'transparent'
    }
  }));
}
Object.assign(window, {
  HomePoster
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomePoster.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/content.js
try { (() => {
/* blynai.eu — real copy from the company pages. Lithuanian is the primary language. */
window.BLYN = {
  /* Live site nav — labels and in-page anchors as shipped on blynai.eu. */
  nav: [{
    label: 'Apie',
    href: '#vardas'
  }, {
    label: 'Tyrimai',
    href: '#tyrimai'
  }, {
    label: 'Nariai',
    href: '#nariai'
  }, {
    label: 'Kontaktai',
    href: '#rekvizitai'
  }],
  /* Real destinations. Do not swap these for placeholders. */
  urls: {
    journal: 'https://blynai.meetluko.eu',
    github: 'https://github.com/bykovas/trading-bot',
    luko: 'https://meetluko.eu',
    byko: 'https://byko.bykovas.lt',
    mail: 'mailto:info@blynai.eu'
  },
  cta: {
    journal: 'Gyvas žurnalas',
    github: 'GitHub · atvirasis kodas',
    programme: 'Tyrimų programa'
  },
  navLab: [{
    label: 'Veikla',
    href: '#vardas'
  }, {
    label: 'Tyrimai',
    href: '#tyrimai'
  }, {
    label: 'Atvirasis kodas',
    href: '#tyrimai'
  }, {
    label: 'Nariai',
    href: '#nariai'
  }],
  navPoster: [{
    label: 'Bendrija',
    href: '#vardas'
  }, {
    label: 'Laboratorija',
    href: '#tyrimai'
  }, {
    label: 'Kodas',
    href: '#tyrimai'
  }, {
    label: 'Kontaktai',
    href: '#rekvizitai'
  }],
  eyebrow: 'Mažoji bendrija · įsteigta Lietuvoje',
  leadDoc: 'MB „BlynAI“ yra tyrimų bendrija: kuriame algoritminės prekybos programinę įrangą, leidžiame jai veikti su savo pinigais ir skelbiame viską, ką ji nusprendė — įskaitant tai, kur suklydo. Programinė įranga platinama atvirojo kodo principu, kad rezultatą galėtų pakartoti kas nors kitas.',
  leadLab: 'Rašome programinę įrangą, kuri pati sprendžia, kada pirkti ir kada parduoti — ir tikriname ją tikrais pinigais, savo. Kiekvienas sprendimas įrašomas ir paskelbiamas. Kodas atviras.',
  leadPoster: 'Mažoji bendrija, kurios visas turinys — algoritmai, jų sprendimai ir atviras kodas. Prekiaujame savo lėšomis, skelbiame kiekvieną orderį, neteikiame finansinių paslaugų.',
  status: ['Botai veikia be pertraukos.', 'Žurnalas atviras.', 'Klientų lėšų — nėra ir nebus.'],
  stats: [{
    label: 'Teisinė forma',
    value: 'Mažoji bendrija'
  }, {
    label: 'Nariai',
    value: '2 · po 50 %'
  }, {
    label: 'Kodo licencija',
    value: 'Atvirasis kodas'
  }],
  syllable: {
    left: {
      word: 'BLYN',
      expansion: 'Blockchain Ledger Yield Numerics',
      note: 'Kas matuojama: grandinės duomenys, orderių žurnalas, pelno kreivė ir skaičiai, kuriuos iš jų galima gauti.'
    },
    right: {
      word: 'AI',
      expansion: 'Algorithmic Inference',
      note: 'Kas iš to daroma: išvada ir orderis, priimtas taisyklių, o ne nuojautos. Be žmogaus rankos ir be jo nuotaikos.'
    },
    note: 'Lietuviškai tas pats žodis skaitomas kaip „blynai“. Bendrija sąmoningai laikosi abiejų skaitymų: pirmasis paaiškina, ką darome, antrasis — kad nesame rimtesni, nei esame.'
  },
  directions: [{
    title: 'Paaiškinamas sprendimas',
    body: 'Kiekvienas orderis įrašomas su signalais, rizikos ribomis ir atmestomis alternatyvomis. Jei sprendimo negalima perskaityti po savaitės — jis netinka tyrimui.'
  }, {
    title: 'Simuliacija prieš tikrovę',
    body: 'Tas pats algoritmas vienu metu leidžiamas istoriniuose duomenyse ir gyvoje rinkoje. Matuojame ne pelną, o atotrūkį tarp dviejų kreivių.'
  }, {
    title: 'Rizikos mechanika',
    body: 'Pozicijų dydis, atvėsimo periodai, avarinis stabdys. Tikriname juos realaus kritimo metu, nes lentelėje jie visada atrodo veikiantys.'
  }, {
    title: 'Atkuriamumas',
    body: 'Kodas, parametrai ir duomenų momentinės kopijos skelbiami atvirai, kad rezultatą galėtų pakartoti trečiasis asmuo be mūsų dalyvavimo.'
  }],
  questions: [{
    index: '01',
    title: 'Ar sprendimą galima paaiškinti?',
    body: 'Kiekvienam pirkimui ir pardavimui fiksuojame įėjimo signalus, rizikos ribas ir atmestas alternatyvas. Sprendimas be paaiškinimo mums yra klaida.'
  }, {
    index: '02',
    title: 'Kur baigiasi backtesto tiesa?',
    body: 'Lyginame istorinę simuliaciją su tuo pačiu algoritmu, veikiančiu realiu laiku ir realiomis lėšomis. Atotrūkis tarp šių dviejų kreivių — pagrindinis mūsų matavimas.'
  }, {
    index: '03',
    title: 'Kiek rizikos atlaiko automatas?',
    body: 'Stop-loss, atvėsimo periodai, pozicijų dydis, avarinis stabdys. Tikriname, kaip šie mechanizmai laikosi realaus rinkos kritimo metu, o ne lentelėje.'
  }],
  activities: [{
    label: 'Kūrimas',
    title: 'Prekybos programinė įranga',
    body: 'Signalai, rizikos valdymas, biržų API integracijos, žurnalas. Viskas rašoma iš naujo, ne konfigūruojama.'
  }, {
    label: 'Tyrimas',
    title: 'Eksperimentai su savo lėšomis',
    body: 'Hipotezė, ribos, laikotarpis, rezultatas. Nepavykę eksperimentai skelbiami taip pat, kaip pavykę.'
  }, {
    label: 'Skelbimas',
    title: 'Atvirasis kodas',
    body: 'Programinė įranga platinama atvirai, kad rezultatą galėtų pakartoti kas nors, kas mumis netiki.'
  }, {
    label: 'Riba',
    title: 'Ko nedarome',
    body: 'Nevaldome trečiųjų asmenų lėšų, neteikiame rekomendacijų, nepriimame investicijų. Niekada.'
  }],
  registry: [{
    term: 'Pavadinimas',
    value: 'MB „BlynAI“'
  }, {
    term: 'Forma',
    value: 'Mažoji bendrija'
  }, {
    term: 'J. a. kodas',
    value: 'registruojama'
  }, {
    term: 'Buveinė',
    value: 'Lietuvos Respublika'
  }, {
    term: 'Direktorius',
    value: 'Lukas Peciukonis'
  }, {
    term: 'Paštas',
    value: 'info@blynai.eu',
    href: 'mailto:info@blynai.eu'
  }],
  members: [{
    name: 'Lukas Peciukonis',
    role: 'MB vadovas · Λ',
    src: 'https://meetluko.eu/assets/founder-lukas.png',
    objectPosition: '50% 12%',
    accent: 'gold'
  }, {
    name: 'Denisas Bykovas',
    role: 'MB narys · Δ',
    src: 'https://meetluko.eu/assets/founder-denisas.png',
    accent: 'violet'
  }],
  instances: {
    eyebrow: 'Du nariai, dvi valiutos',
    title: 'L&D: dvi nepriklausomos boto instancijos',
    body: 'Tas pats kodas, atskiros sąskaitos, atskiri žurnalai. Jei rezultatai skiriasi — skirtumas irgi yra duomenys.'
  },
  legal: 'MB „BlynAI“ nėra finansų įstaiga, investicijų valdytojas ar finansinių paslaugų teikėja. Bendrija neteikia investavimo rekomendacijų, nepriima ir nesaugo trečiųjų asmenų pinigų ar kriptoturto ir nevaldo trečiųjų asmenų biržos sąskaitų. Bendrija prekiauja tik savo lėšomis; paskelbti rezultatai yra tyrimo duomenys, o ne pasiūlymas ar prognozė.'
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/content.js", error: String((e && e.message) || e) }); }

__ds_ns.CoinCard = __ds_scope.CoinCard;

__ds_ns.FeatureCard = __ds_scope.FeatureCard;

__ds_ns.MemberCard = __ds_scope.MemberCard;

__ds_ns.SyllableSplit = __ds_scope.SyllableSplit;

__ds_ns.EquityCurve = __ds_scope.EquityCurve;

__ds_ns.GradientRule = __ds_scope.GradientRule;

__ds_ns.LogoMark = __ds_scope.LogoMark;

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.DefinitionList = __ds_scope.DefinitionList;

__ds_ns.NumberedList = __ds_scope.NumberedList;

__ds_ns.StatBar = __ds_scope.StatBar;

__ds_ns.StatusPanel = __ds_scope.StatusPanel;

__ds_ns.DualPanel = __ds_scope.DualPanel;

__ds_ns.Section = __ds_scope.Section;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

})();
