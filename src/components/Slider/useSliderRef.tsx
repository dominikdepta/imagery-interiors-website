import { useRef } from "react";
import type { SwiperContainer } from "swiper/element";

export const useSliderRef = () => {
  return useRef<SwiperContainer>(null);
};
