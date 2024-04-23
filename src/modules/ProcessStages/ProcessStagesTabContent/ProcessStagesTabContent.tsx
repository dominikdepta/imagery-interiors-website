import { SmoothHeight } from "@components/SmoothHeight";
import type { ReactNode } from "react";

export interface ProcessStagesTabContentProps {
  children: ReactNode;
}

export const ProcessStagesTabContent = ({
  children,
}: ProcessStagesTabContentProps) => (
  <div className="mt-6 lg:mt-10 text-base text-left lg:text-center">
    <SmoothHeight>{children}</SmoothHeight>
  </div>
);
