import * as React from "react";

/** Section shell with the brand's gutters (72px on paper, 34px on ink) and hairline separators. */
export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  /** @default "paper" */
  tone?: "paper" | "raised" | "wash" | "ink" | "inkWash";
  /** Mono opener above the heading. */
  eyebrow?: React.ReactNode;
  /** Section h2. */
  heading?: React.ReactNode;
  /** Override the default padding. */
  padding?: string;
  /** Hairline bottom border. @default true */
  divider?: boolean;
  /** Mobile gutters (18px). @default false */
  compact?: boolean;
}
export declare function Section(props: SectionProps): JSX.Element;
