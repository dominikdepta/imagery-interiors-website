import type { ProjectGallerySliderNavPagesProps } from "./types";

export const ProjectGallerySliderNavPages = ({
  activeIndex,
  itemsCount,
  onPageClick,
}: ProjectGallerySliderNavPagesProps) => {
  return (
    <div className="flex gap-2 w-full justify-center">
      {[...new Array(itemsCount).keys()].map((_item, i) => (
        <button
          key={i}
          className={`text-sm lg:text-lg p-1 leading-none ${i === activeIndex ? "text-black" : "text-darkGray"}`}
          onClick={onPageClick(i)}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
};
