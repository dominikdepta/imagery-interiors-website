import type { SwiperSlide } from "swiper/element";
import type React from "react";

export interface SliderSlideProps
  extends Partial<Omit<SwiperSlide, "className" | "children">> {
  className?: string;
  children: React.ReactNode;
}

export const SliderSlide = ({
  children,
  className,
  ...restProps
}: SliderSlideProps) => (
  <swiper-slide class={className} {...restProps}>
    {children}
  </swiper-slide>
);
