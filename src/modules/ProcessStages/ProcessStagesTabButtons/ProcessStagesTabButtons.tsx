import { useEffect, useRef } from "react";
import { ProcessStagesTabTitle } from "../ProcessStagesTabTitle";
import type { ProcessStagesTabButtonsProps } from "./types";

export const ProcessStagesTabButtons = ({
  items,
  activeIndex,
  onItemClick,
}: ProcessStagesTabButtonsProps) => {
  const stagesTabWrapperRef = useRef<HTMLDivElement>(null);
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
      ref={stagesTabWrapperRef}
      className="relative flex w-full h-auto min-w-80 overflow-x-scroll"
    >
      {items.map(({ title }, i) => (
        <ProcessStagesTabTitle
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
  );
};
