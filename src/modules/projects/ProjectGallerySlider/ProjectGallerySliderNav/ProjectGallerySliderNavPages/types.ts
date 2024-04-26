import type { MouseEvent } from "react";

export interface ProjectGallerySliderNavPagesProps {
  activeIndex: number;
  itemsCount: number;
  onPageClick: (index: number) => (e?: MouseEvent<HTMLButtonElement>) => void;
}
