import type { HTMLAttributes } from "react";

export type IconType = "arrow";

export interface IconProps extends HTMLAttributes<HTMLSpanElement> {
  type: IconType;
}
