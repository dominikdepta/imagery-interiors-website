import type { HTMLAttributes } from "react";

export const ReviewsSliderNavContainer = ({
  children,
  className,
  ...restProps
}: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={`absolute left-1/2 -translate-x-1/2 bottom-28 lg:bottom-52 z-10 w-full max-w-4xl flex justify-between items-center ${className}`}
    {...restProps}
  >
    {children}
  </div>
);
