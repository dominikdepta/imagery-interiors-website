import { useMemo } from "react";
import { Slider } from "@components/Slider/Slider";
import "swiper/css/bundle";
import { ProjectsSliderItem } from "./ProjectsSliderItem";
import type { ProjectsSliderProps } from "./types";

export const ProjectsSlider = ({ items }: ProjectsSliderProps) => {
  const minSlidesCount = 7;
  const slides = useMemo(
    () =>
      items.length < minSlidesCount
        ? [...items, ...items.slice(0, minSlidesCount - items.length)]
        : items,
    [items],
  );

  return (
    <Slider
      centeredSlides={true}
      loop={true}
      slidesPerView={"auto"}
      spaceBetween={20}
      updateOnWindowResize={true}
      initialSlide={0}
      breakpoints={{
        1024: {
          spaceBetween: 90,
        },
      }}
    >
      {slides.map((slide, i) => (
        <ProjectsSliderItem key={i} {...slide} />
      ))}
    </Slider>
  );
};
