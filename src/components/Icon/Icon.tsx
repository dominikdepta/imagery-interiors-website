import { icons } from "./constants";
import type { IconProps } from "./types";

export const Icon = ({ type }: IconProps) => (
  <span
    className="inline-block h-2 lg:h-auto [&>svg]:h-full"
    dangerouslySetInnerHTML={{ __html: icons[type] }}
  />
);
