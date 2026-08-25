import * as React from "react";

/** Mono chip, 10.5px, 3x7 padding, 4px radius. */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** @default "neutral" */
  tone?: "neutral" | "gold" | "violet" | "ink";
}
export declare function Badge(props: BadgeProps): JSX.Element;
