import * as React from "react";

/** Research note card: index or mono label, display title, one paragraph. */
export interface FeatureCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Zero-padded number, e.g. "01". */
  index?: string;
  /** Mono uppercase label used instead of a number, e.g. "Kūrimas". */
  label?: string;
  title: React.ReactNode;
  /** @default "ink" */
  tone?: "ink" | "glass" | "paper";
}
export declare function FeatureCard(props: FeatureCardProps): JSX.Element;
