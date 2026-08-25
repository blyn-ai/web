import * as React from "react";

/**
 * Registry table: term left, value right, IBM Plex Mono 13px throughout.
 */
export interface DefinitionListProps extends React.HTMLAttributes<HTMLDListElement> {
  items?: Array<{ term: string; value: React.ReactNode; href?: string }>;
  /** @default "paper" */
  tone?: "paper" | "ink";
}
export declare function DefinitionList(props: DefinitionListProps): JSX.Element;
