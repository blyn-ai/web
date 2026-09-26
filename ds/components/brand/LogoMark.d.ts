import * as React from "react";

/**
 * The BlynAI mark — two gold chevrons around a 2x2 dot ledger, on an optional dark plate.
 */
export interface LogoMarkProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Plate + glyph size. @default "md" */
  size?: "sm" | "md" | "lg";
  /** Render the dark rounded plate behind the glyph. @default true */
  plate?: boolean;
  /** "gold" uses the brand gradient; "mono" inherits currentColor. @default "gold" */
  tone?: "gold" | "mono";
}
export declare function LogoMark(props: LogoMarkProps): JSX.Element;
