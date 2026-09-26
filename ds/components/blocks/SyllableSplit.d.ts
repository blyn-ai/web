import * as React from "react";

/**
 * The name explainer: BLYN (Blockchain Ledger Yield Numerics) beside AI (Algorithmic Inference).
 */
export interface SyllableSplitProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Gold half. */
  left: { word: string; expansion: string; note: string };
  /** Violet half. */
  right: { word: string; expansion: string; note: string };
  /** Footnote under the split — usually the Lithuanian "blynai" reading. */
  note?: React.ReactNode;
  /** Top-down gold/violet tints behind each half. @default true */
  tinted?: boolean;
  compact?: boolean;
}
export declare function SyllableSplit(props: SyllableSplitProps): JSX.Element;
