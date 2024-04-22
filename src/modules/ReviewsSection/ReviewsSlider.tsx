import { Slider } from "@components/Slider/Slider";
import {
  ReviewsSliderItem,
  type ReviewsSliderItemProps,
} from "./ReviewsSliderItem";
import sliderStyles from "./sliderStyles.css?url";

export interface ReviewsSliderProps {
  items: ReviewsSliderItemProps[];
}

export const ReviewsSlider = ({ items }: ReviewsSliderProps) => {
  const itemClasses = ["bg-blue", "bg-brown", "bg-green"];

  return (
    <Slider
      loop
      navigation
      autoplay={{ delay: 5000, pauseOnMouseEnter: true }}
      effect="fade"
      injectStylesUrls={[sliderStyles]}
      pagination={{
        clickable: true,
        type: "bullets",
        renderBullet: (index, className) =>
          `<span class="${className}">${index + 1}</span>`,
      }}
      slidesPerView={1}
      spaceBetween={0}
    >
      {items.map((item, i) => (
        <ReviewsSliderItem
          key={i}
          className={itemClasses[i % itemClasses.length] as string}
          {...item}
        />
      ))}
    </Slider>
  );
};
