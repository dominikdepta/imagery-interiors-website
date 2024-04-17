import { SliderSlide } from "@components/Slider/SliderSlide";

export interface ProjectsSliderItemProps {
  alt: string;
  href: string;
  img: string;
  title: string;
  date?: string;
}

export const ProjectsSliderItem = ({
  alt,
  date,
  href,
  img,
  title,
}: ProjectsSliderItemProps) => (
  <SliderSlide className="flex flex-col w-72">
    <a href={href}>
      <img src={img} alt={alt} className="object-cover w-full h-96" />

      <div className="flex justify-between mt-1 text-sm lg:text-lg">
        <span className="text-lightBlack text-nowrap text-ellipsis overflow-hidden">
          {title}
        </span>
        {date && <span className="text-darkGray">{date}</span>}
      </div>
    </a>
  </SliderSlide>
);
