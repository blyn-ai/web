import * as React from "react";

/** Surface container. Cards on paper are hairline-bordered and flat; cards on ink are softer-cornered. */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** @default "paper" */
  tone?: "paper" | "raised" | "ink" | "glass";
  /** Optional top-down brand tint behind the content. */
  tint?: "gold" | "violet";
  /** @default "var(--pad-card)" (26px) */
  padding?: string | number;
}
export declare function Card(props: CardProps): JSX.Element;
