import * as React from "react";

/** The section opener: IBM Plex Mono 600, uppercase, .2em tracking. */
export interface EyebrowProps extends React.HTMLAttributes<HTMLElement> {
  /** violet on paper, gold on ink, lilac on violet-ink. @default "violet" */
  tone?: "violet" | "gold" | "lilac" | "muted";
  /** "sm" is the 10px mobile size. @default "md" */
  size?: "sm" | "md";
  /** @default "p" */
  as?: "p" | "span" | "div";
}
export declare function Eyebrow(props: EyebrowProps): JSX.Element;
