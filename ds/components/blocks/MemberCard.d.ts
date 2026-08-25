import * as React from "react";

/** One of the two partners. Portraits are supplied by the company; there are no stock stand-ins. */
export interface MemberCardProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  /** Mono role line, e.g. "MB vadovas · Λ". */
  role: string;
  src: string;
  alt?: string;
  /** 3px plate, 16px soft plate, or 56px circle. @default "plate" */
  shape?: "plate" | "soft" | "circle";
  /** Border accent. @default "gold" */
  accent?: "gold" | "violet";
  /** CSS object-position for framing. */
  objectPosition?: string;
  /** @default "paper" */
  tone?: "paper" | "ink";
}
export declare function MemberCard(props: MemberCardProps): JSX.Element;
