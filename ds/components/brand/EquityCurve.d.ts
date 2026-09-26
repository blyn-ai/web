import * as React from "react";

/** Brand graphic: the stepped gain curve used as a footer band or a full-bleed backdrop. */
export interface EquityCurveProps extends React.SVGAttributes<SVGSVGElement> {
  /** "band" is the 1200x190 footer strip; "full" fills a 1200x630 card. @default "band" */
  variant?: "band" | "full";
  /** Which end of the gradient the line starts from. @default "forward" */
  direction?: "forward" | "reverse";
  /** @default "paper" */
  tone?: "paper" | "ink";
}
export declare function EquityCurve(props: EquityCurveProps): JSX.Element;
