import type { MouseEvent } from "react";
import type { ProcessStageItem } from "../types";

export interface ProcessStagesTabButtonsProps {
  items: ProcessStageItem[];
  activeIndex: number;
  onItemClick: (index: number) => (e?: MouseEvent<HTMLButtonElement>) => void;
}
