import { useEffect, useRef } from "react";
import { useIsOverflowing } from "@hooks/useIsOverflowing";
import { ProcessStagesTabButton } from "../ProcessStagesTabButton";
import type { ProcessStagesTabButtonsProps } from "./types";

const leftOverflowClass =
  'before:content-[""] before:absolute before:top-0 before:left-0 before:h-full before:w-9 before:bg-gradient-to-r before:from-mediumGray before:transition-opacity before:pointer-events-none';
const rightOverflowClass =
  'after:content-[""] after:absolute after:top-0 after:right-0 after:h-full after:w-9 after:bg-gradient-to-l after:from-mediumGray after:transition-opacity after:pointer-events-none';

export const ProcessStagesTabButtons = ({
  items,
  activeIndex,
  onItemClick,
}: ProcessStagesTabButtonsProps) => {
  const stagesTabWrapperRef = useRef<HTMLDivElement>(null);
  const [isOverflowingLeft, isOverflowingRight] =
    useIsOverflowing(stagesTabWrapperRef);
  const slidingBarRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!stagesTabWrapperRef.current || !slidingBarRef.current) {
      return;
    }

    const activeChild =
      stagesTabWrapperRef.current.querySelectorAll("button")[activeIndex];

    if (!activeChild) {
      return;
    }

    const rect = activeChild.getBoundingClientRect();
    slidingBarRef.current.style.left = `${activeChild.offsetLeft}px`;
    slidingBarRef.current.style.width = `${rect?.width}px`;
  }, [activeIndex]);

  return (
    <div
      className={`relative ${leftOverflowClass} ${rightOverflowClass} ${isOverflowingLeft ? "before:opacity-65" : "before:opacity-0"} ${isOverflowingRight ? "after:opacity-65" : "after:opacity-0"}`}
    >
      <div
        ref={stagesTabWrapperRef}
        className="relative flex overflow-x-scroll"
      >
        {items.map(({ title }, i) => (
          <ProcessStagesTabButton
            key={i}
            isActive={i === activeIndex}
            title={title}
            onClick={onItemClick(i)}
          />
        ))}

        <span
          ref={slidingBarRef}
          className="absolute transition-all left-0 bottom-0 w-[100px] h-[2px] bg-black"
        ></span>
      </div>
    </div>
  );
};
