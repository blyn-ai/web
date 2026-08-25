import React from "react";

/** The gold-to-violet hairline. It separates the brand band from content and appears once per surface. */
export function GradientRule({ height = 3, direction = "forward", style, ...rest }) {
  const g = direction === "reverse"
    ? "linear-gradient(90deg,var(--violet-700),var(--violet-500) 26%,var(--bridge-500) 58%,var(--gold-400))"
    : "var(--gradient-rule)";
  return <div aria-hidden="true" style={{ height, background: g, ...style }} {...rest} />;
}
