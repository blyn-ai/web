import * as React from "react";

/** Hero-side panel stating operational status in three flat mono lines. */
export interface StatusPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  /** @default "Būsena" */
  title?: string;
  /** One short declarative sentence per line. */
  lines?: string[];
  /** @default "paper" */
  tone?: "paper" | "ink" | "glass";
}
export declare function StatusPanel(props: StatusPanelProps): JSX.Element;
