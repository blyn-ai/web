import * as React from "react";

/**
 * Site header. Always ink, always full-bleed, always followed by a GradientRule.
 */
export interface SiteHeaderProps extends React.HTMLAttributes<HTMLElement> {
  /** Nav items, 3-5 of them, one word each where possible. */
  nav?: Array<{ label: string; href?: string }>;
  /** Active language code. Omit to hide the switch entirely — blynai.eu ships LT only, there is no EN version yet. @default null */
  lang?: string | null;
  /** The other language, rendered as a link. @default "EN" */
  altLang?: string;
  /** Logo link target. @default "/" */
  href?: string;
  /** Mobile layout: smaller lockup, burger instead of nav. @default false */
  compact?: boolean;
  onMenu?: () => void;
}
export declare function SiteHeader(props: SiteHeaderProps): JSX.Element;
