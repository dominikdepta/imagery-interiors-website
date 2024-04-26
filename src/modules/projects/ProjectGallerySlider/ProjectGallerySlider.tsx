import { Slider } from "@components/Slider/Slider";
import { ProjectGallerySliderItem } from "./ProjectGallerySliderItem";
import type { ProjectGallerySliderProps } from "./types";
import { useSliderRef } from "@components/Slider/useSliderRef";
import { useCallback, useState } from "react";
import type { Swiper } from "swiper/types";
import { ProjectGallerySliderNavContainer } from "./ProjectGallerySliderNav/ProjectGallerySliderNavContainer";
import { ProjectGallerySliderNavPages } from "./ProjectGallerySliderNav/ProjectGallerySliderNavPages";
import { ProjectGallerySliderNavButton } from "./ProjectGallerySliderNav/ProjectGallerySliderNavButton";

export const ProjectGallerySlider = ({ items }: ProjectGallerySliderProps) => {
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
      sliderRef.current?.swiper.slideTo(slide);
    },
    [sliderRef.current],
  );

  const handleSlideChange = useCallback((swiper: Swiper) => {
    setActiveIndexSync(swiper.realIndex);
  }, []);

  return (
    <div>
      <Slider
        autoHeight
        ref={sliderRef}
        on={{
          realIndexChange: handleSlideChange,
        }}
      >
        {items.map((item, i) => (
          <ProjectGallerySliderItem key={i} {...item} />
        ))}
      </Slider>

      <ProjectGallerySliderNavContainer>
        <ProjectGallerySliderNavButton
          type="prev"
          onClick={handlePrevBtnClick}
        />

        <ProjectGallerySliderNavPages
          activeIndex={activeIndexSync}
          itemsCount={items.length}
          onPageClick={handlePageClick}
        />

        <ProjectGallerySliderNavButton
          type="next"
          onClick={handleNextBtnClick}
        />
      </ProjectGallerySliderNavContainer>
    </div>
  );
};
