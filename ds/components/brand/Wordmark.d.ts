import * as React from "react";

/** The two-line name lockup: display wordmark above a mono descriptor. */
export interface WordmarkProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Surface the lockup sits on. @default "ink" */
  tone?: "ink" | "paper";
  /** @default "md" */
  size?: "sm" | "md" | "lg";
  /** Mono line under the name. Pass "" to hide it. @default "L&D Finance Lab" */
  descriptor?: string;
  /** Pipe-delimited so the middle segment renders gold. @default "Blyn|AI| Capital" */
  name?: string;
}
export declare function Wordmark(props: WordmarkProps): JSX.Element;
