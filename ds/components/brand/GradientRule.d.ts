import * as React from "react";

/** Full-bleed gradient hairline: gold, through the bridge tone, into violet. */
export interface GradientRuleProps extends React.HTMLAttributes<HTMLDivElement> {
  /** 3 for page chrome, 6 for social cards. @default 3 */
  height?: number;
  /** @default "forward" */
  direction?: "forward" | "reverse";
}
export declare function GradientRule(props: GradientRuleProps): JSX.Element;
