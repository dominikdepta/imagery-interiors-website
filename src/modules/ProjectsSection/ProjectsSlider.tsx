import { Slider } from "@components/Slider/Slider";
import "swiper/css/bundle";
import {
  ProjectsSliderItem,
  type ProjectsSliderItemProps,
} from "./ProjectsSliderItem";

export interface ProjectsSliderProps {
  items: ProjectsSliderItemProps[];
}

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
      {items.map((item, i) => (
        <ProjectsSliderItem key={i} {...item} />
      ))}
    </Slider>
  );
};