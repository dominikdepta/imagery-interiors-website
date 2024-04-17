import React, { useEffect, useRef } from "react";
import { register, type SwiperContainer } from "swiper/element/bundle";
import "swiper/css/bundle";
import type { SwiperOptions } from "swiper/types";

export interface SliderProps extends Omit<SwiperOptions, "class"> {
  className?: string;
  children: React.ReactNode;
}

export const Slider = ({ children, className, ...restProps }: SliderProps) => {
  const swiperRef = useRef<SwiperContainer>();

  useEffect(() => {
    register();
  }, []);

  useEffect(() => {
    if (!swiperRef.current) {
      return;
    }

    Object.assign(swiperRef.current, restProps);
    swiperRef.current.initialize();
  }, [restProps]);

  return (
    <swiper-container ref={swiperRef} init="false" class={className}>
      {children}
    </swiper-container>
  );
};
