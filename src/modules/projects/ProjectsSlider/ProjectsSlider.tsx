import { Slider } from "@components/Slider/Slider";
import "swiper/css/bundle";
import { ProjectsSliderItem } from "./ProjectsSliderItem";
import type { ProjectsSliderProps } from "./types";

export const ProjectsSlider = ({ items }: ProjectsSliderProps) => {
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
      {items.map((item) => (
        <ProjectsSliderItem key={item.id} {...item} />
      ))}
    </Slider>
  );
};
