import { Slider } from "@components/Slider/Slider";
import { useSliderRef } from "@components/Slider/useSliderRef";
import { useCallback, useState } from "react";
import type Swiper from "swiper";
import {
  ReviewsSliderItem,
  type ReviewsSliderItemProps,
} from "./ReviewsSliderItem";
import { ReviewsSliderNavButton } from "./ReviewsSliderNav/ReviewsSliderNavButton";
import { ReviewsSliderNavPages } from "./ReviewsSliderNav/ReviewsSliderNavPages";
import { ReviewsSliderNavContainer } from "./ReviewsSliderNav/ReviewsSliderNavContainer";

export interface ReviewsSliderProps {
  items: ReviewsSliderItemProps[];
}

export const ReviewsSlider = ({ items }: ReviewsSliderProps) => {
  const itemClasses = ["bg-blue", "bg-brown", "bg-green"];
  const sliderRef = useSliderRef();
  const [activeIndexSync, setActiveIndexSync] = useState(0);

  const handlePrevBtnClick = useCallback(() => {
    sliderRef.current?.swiper.slidePrev();
  }, [sliderRef.current]);

  const handleNextBtnClick = useCallback(() => {
    sliderRef.current?.swiper.slideNext();
  }, [sliderRef.current]);

  const handlePageClick = useCallback(
    (slide: number) => () => {
      console.log("handlePageClick", slide);
      sliderRef.current?.swiper.slideToLoop(slide);
    },
    [sliderRef.current],
  );

  const handleSlideChange = useCallback((swiper: Swiper) => {
    setActiveIndexSync(swiper.realIndex);
  }, []);

  console.log(activeIndexSync);

  return (
    <div className="relative">
      <Slider
        autoHeight
        loop
        ref={sliderRef}
        autoplay={{ delay: 5000, pauseOnMouseEnter: true }}
        effect="fade"
        initialSlide={0}
        on={{
          realIndexChange: handleSlideChange,
        }}
        slidesPerView={1}
        spaceBetween={0}
        className="z-0"
      >
        {items.map((item, i) => (
          <ReviewsSliderItem
            key={i}
            className={itemClasses[i % itemClasses.length] as string}
            {...item}
          />
        ))}
      </Slider>

      <ReviewsSliderNavContainer>
        <ReviewsSliderNavButton type="prev" onClick={handlePrevBtnClick}>
          Prev
        </ReviewsSliderNavButton>

        <ReviewsSliderNavPages
          activeIndex={activeIndexSync}
          itemsCount={items.length}
          onPageClick={handlePageClick}
        />

        <ReviewsSliderNavButton type="next" onClick={handleNextBtnClick}>
          Next
        </ReviewsSliderNavButton>
      </ReviewsSliderNavContainer>
    </div>
  );
};
