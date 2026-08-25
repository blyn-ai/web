import * as React from "react";

/**
 * Action control. Five variants, all 44-48px tall, all set in Space Grotesk 600/13.5.
 */
export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  /** gold = primary on ink; gradient = primary on paper; outline/outlineInk = secondary; pill* = poster layouts. @default "gold" */
  variant?: "gold" | "gradient" | "outline" | "outlineInk" | "pill" | "pillViolet";
  /** 44 / 46 / 48px. @default "md" */
  size?: "sm" | "md" | "lg";
  /** Element to render. @default "a" */
  as?: "a" | "button";
  /** Stretch to the container width (mobile stacks). @default false */
  block?: boolean;
  disabled?: boolean;
  href?: string;
}
export declare function Button(props: ButtonProps): JSX.Element;
