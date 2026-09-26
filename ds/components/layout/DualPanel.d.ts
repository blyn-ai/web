import * as React from "react";

/** 1fr / 1px / 1fr grid used for "registry data" beside "members". */
export interface DualPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  /** @default "hairline" */
  divider?: "hairline" | "gradient" | "none";
  /** Column gap. @default "var(--gap-wide)" */
  gap?: string;
  left?: React.ReactNode;
  right?: React.ReactNode;
}
export declare function DualPanel(props: DualPanelProps): JSX.Element;
