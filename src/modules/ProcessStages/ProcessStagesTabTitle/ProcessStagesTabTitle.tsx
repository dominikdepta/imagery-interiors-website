import type { ButtonHTMLAttributes } from "react";

export interface ProcessStagesTabProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  isActive: boolean;
  title: string;
}

export const ProcessStagesTabTitle = ({
  isActive,
  title,
  ...restProps
}: ProcessStagesTabProps) => {
  return (
    <button
      className={`flex items-center shrink-0 pr-4 py-4 lg:py-10 lg:px-5 min-w-48 lg:min-w-0 border-b-2 border-darkGray text-base lg:text-lg text-left lg:text-center ${isActive ? "text-black" : "text-darkGray"}`}
      {...restProps}
    >
      {title}
    </button>
  );
};
