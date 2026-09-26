import * as React from "react";

/** The 01-04 research directions list: index, title, body across three columns. */
export interface NumberedListProps extends React.HTMLAttributes<HTMLOListElement> {
  items?: Array<{ title: string; body: React.ReactNode }>;
  /** Single-column mobile stack. @default false */
  compact?: boolean;
}
export declare function NumberedList(props: NumberedListProps): JSX.Element;
