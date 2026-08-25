import * as React from "react";

/** Tile for one of the two bot instances, LUKO or BYKO, each with its own coin mark and subdomain. */
export interface CoinCardProps extends React.HTMLAttributes<HTMLAnchorElement> {
  /** @default "luko" */
  member?: "luko" | "byko";
  /** Coin above name, or coin beside name. @default "stack" */
  layout?: "stack" | "row";
  /** @default "paper" */
  tone?: "paper" | "ink";
  /** Coin mark size in px. @default 44 */
  coinSize?: number;
}
export declare function CoinCard(props: CoinCardProps): JSX.Element;
