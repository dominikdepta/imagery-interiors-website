import { SliderSlide } from "@components/Slider/SliderSlide";
import type { ProjectGallerySliderItemProps } from "./types";

export const ProjectGallerySliderItem = ({
  img,
  alt,
}: ProjectGallerySliderItemProps) => (
  <SliderSlide>
    <img src={img} alt={alt} />
  </SliderSlide>
);
