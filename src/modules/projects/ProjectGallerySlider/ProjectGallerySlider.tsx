import { Slider } from "@components/Slider/Slider";
import { ProjectGallerySliderItem } from "./ProjectGallerySliderItem";
import type { ProjectGallerySliderProps } from "./types";

export const ProjectGallerySlider = ({ items }: ProjectGallerySliderProps) => {
  return (
    <Slider autoHeight>
      {items.map((item, i) => (
        <ProjectGallerySliderItem key={i} {...item} />
      ))}
    </Slider>
  );
};
