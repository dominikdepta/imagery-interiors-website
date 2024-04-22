import { Slider } from "@components/Slider/Slider";
import { useSliderRef } from "@components/Slider/useSliderRef";
import { useCallback } from "react";
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
  const sliderRef = useSliderRef();

  const handlePrevBtnClick = useCallback(() => {
    sliderRef.current?.swiper.slidePrev();
  }, [sliderRef.current]);

  const handleNextBtnClick = useCallback(() => {
    sliderRef.current?.swiper.slideNext();
  }, [sliderRef.current]);

  return (
    <div>
      <Slider
        loop
        ref={sliderRef}
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

        <button
          className="text-2xl absolute left-0 top-0"
          onClick={handlePrevBtnClick}
        >
          PREV
        </button>
        <button
          className="text-2xl absolute right-0 top-0"
          onClick={handleNextBtnClick}
        >
          NEXT
        </button>
      </Slider>
    </div>
  );
};
