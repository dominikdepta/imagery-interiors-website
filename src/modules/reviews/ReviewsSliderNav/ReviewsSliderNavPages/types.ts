import type { MouseEvent } from "react";

export interface ReviewsSliderNavPagesProps {
  activeIndex: number;
  itemsCount: number;
  onPageClick: (index: number) => (e?: MouseEvent<HTMLButtonElement>) => void;
}
