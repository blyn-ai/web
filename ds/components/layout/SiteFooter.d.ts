import * as React from "react";

/** Footer band. Carries the "not a financial institution" disclaimer verbatim. */
export interface SiteFooterProps extends React.HTMLAttributes<HTMLElement> {
  /** The full legal paragraph. Never abbreviate it. */
  legal?: React.ReactNode;
  /** Mono line: domain, copyright year, legal name. */
  meta?: string;
  /** @default "34px var(--section-x) 44px" */
  padding?: string;
}
export declare function SiteFooter(props: SiteFooterProps): JSX.Element;
