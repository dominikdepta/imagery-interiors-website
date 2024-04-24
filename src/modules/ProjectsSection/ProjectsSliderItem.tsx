import { SliderSlide } from "@components/Slider/SliderSlide";
import type { ProjectsSliderItemProps } from "./types";
import { Pill } from "@components/Pill";

export const ProjectsSliderItem = ({
  alt,
  date,
  href,
  img,
  tags,
  title,
}: ProjectsSliderItemProps) => (
  <SliderSlide className="relative flex flex-col w-72">
    <a href={href}>
      <img src={img} alt={alt} className="object-cover w-full h-96" />

      <div className="flex justify-between mt-1 text-sm lg:text-lg">
        <span className="text-lightBlack text-nowrap text-ellipsis overflow-hidden">
          {title}
        </span>
        {date && <span className="text-darkGray">{date}</span>}
      </div>
    </a>

    {tags && tags.length > 0 && (
      <div className="absolute left-1.5 top-1.5 flex flex-wrap items-start gap-1.5">
        {tags.map(({ name }, i) => (
          <Pill key={i}>{name}</Pill>
        ))}
      </div>
    )}
  </SliderSlide>
);
