import { memo, type HTMLAttributes } from "react";
import arrowLeft from "./navigationArrowLeft.svg";
import arrowRight from "./navigationArrowRight.svg";

export interface ReviewsSliderNavButtonProps
  extends HTMLAttributes<HTMLButtonElement> {
  type: "prev" | "next";
}

export const ReviewsSliderNavButton = memo(
  ({
    type,
    children,
    className,
    ...restProps
  }: ReviewsSliderNavButtonProps) => (
    <button
      className={`hidden lg:flex flex-col items-center gap-1 p-1 text-lg uppercase leading-none ${className}`}
      {...restProps}
    >
      {children}

      <img
        src={type === "prev" ? arrowLeft.src : arrowRight.src}
        width={47}
        height={10}
      />
    </button>
  ),
);
