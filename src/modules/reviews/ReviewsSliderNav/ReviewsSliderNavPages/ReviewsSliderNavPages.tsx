import type { ReviewsSliderNavPagesProps } from "./types";

export const ReviewsSliderNavPages = ({
  activeIndex,
  itemsCount,
  onPageClick,
}: ReviewsSliderNavPagesProps) => {
  return (
    <div className="flex gap-2 w-full justify-center">
      {[...new Array(itemsCount).keys()].map((_item, i) => (
        <button
          key={i}
          className={`text-lg p-1 ${i === activeIndex ? "text-white" : "text-black"}`}
          onClick={onPageClick(i)}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
};
