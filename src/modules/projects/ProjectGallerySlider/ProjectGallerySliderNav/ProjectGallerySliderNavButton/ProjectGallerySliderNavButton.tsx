import { memo } from "react";
import arrowLeft from "./arrow-left.svg";
import arrowRight from "./arrow-right.svg";
import type { ProjectGallerySliderNavButtonProps } from "./types";

export const ProjectGallerySliderNavButton = memo(
  ({ type, className, ...restProps }: ProjectGallerySliderNavButtonProps) => (
    <button
      className={`flex flex-col items-center gap-1 p-1 text-lg uppercase leading-none ${className}`}
      {...restProps}
    >
      <img
        src={type === "prev" ? arrowLeft.src : arrowRight.src}
        width={21}
        height={12}
      />
    </button>
  ),
);
