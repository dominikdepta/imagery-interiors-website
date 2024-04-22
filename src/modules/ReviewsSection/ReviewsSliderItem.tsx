import { SliderSlide } from "@components/Slider/SliderSlide";

export interface ReviewsSliderItemProps {
  author: string;
  content: string;
  className?: string;
}

export const ReviewsSliderItem = ({
  author,
  content,
  className,
}: ReviewsSliderItemProps) => (
  <SliderSlide className={`w-full py-28 lg:py-52 ${className}`}>
    <div className="px-4 max-w-4xl mx-auto text-center">
      <p className="mb-20 text-sm lg:text-lg text-lightBlack uppercase">
        {author}
      </p>
      <p className="font-serif text-3xl lg:text-5xl text-black tracking-tight leading-tight">
        {"“"}
        {content}
        {"”"}
      </p>
    </div>
  </SliderSlide>
);
