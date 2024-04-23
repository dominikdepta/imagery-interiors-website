import { useCallback, useState } from "react";
import { ProcessStagesTabTitle } from "./ProcessStagesTabTitle";
import { ProcessStagesTabContent } from "./ProcessStagesTabContent";
import type { ProcessStagesProps } from "./types";

export const ProcessStages = ({ items }: ProcessStagesProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabTitleClick = useCallback(
    (index: number) => () => {
      setActiveIndex(index);
    },
    [setActiveIndex],
  );

  return (
    <div className="w-full">
      <div className="flex w-full min-w-80 overflow-x-scroll">
        {items.map(({ title }, i) => (
          <ProcessStagesTabTitle
            isActive={i === activeIndex}
            title={title}
            onClick={handleTabTitleClick(i)}
          />
        ))}
      </div>

      <ProcessStagesTabContent>
        {items[activeIndex]?.content}
      </ProcessStagesTabContent>
    </div>
  );
};
