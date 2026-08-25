import * as React from "react";

/** 2-4 facts in a row, separated by 1px gaps that show the ink background through. */
export interface StatBarProps extends React.HTMLAttributes<HTMLDivElement> {
  items?: Array<{ label: string; value: React.ReactNode }>;
}
export declare function StatBar(props: StatBarProps): JSX.Element;
