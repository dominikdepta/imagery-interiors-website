import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { register, type SwiperContainer } from "swiper/element/bundle";
import type { SwiperOptions } from "swiper/types";

register();

export interface SliderProps extends Omit<SwiperOptions, "class"> {
  className?: string;
  children: React.ReactNode;
}

export const Slider = forwardRef<SwiperContainer, SliderProps>(
  ({ children, className, ...restProps }, forwardedRef) => {
    const swiperRef = useRef<SwiperContainer>(null);

    useImperativeHandle(forwardedRef, () => swiperRef.current!);

    useEffect(() => {
      if (!swiperRef.current) {
        return;
      }

      Object.assign(swiperRef.current, restProps);
      swiperRef.current.initialize();
    }, [swiperRef.current, restProps]);

    return (
      <swiper-container ref={swiperRef} init="false" class={className}>
        {children}
      </swiper-container>
    );
  },
);
