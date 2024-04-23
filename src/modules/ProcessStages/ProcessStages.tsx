import { useCallback, useState } from "react";
import { ProcessStagesTabButtons } from "./ProcessStagesTabButtons";
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
      <ProcessStagesTabButtons
        items={items}
        activeIndex={activeIndex}
        onItemClick={handleTabTitleClick}
      />

      <ProcessStagesTabContent>
        {items[activeIndex]?.content}
      </ProcessStagesTabContent>
    </div>
  );
};
