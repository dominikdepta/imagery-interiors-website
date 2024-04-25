import type { ProcessStagesTabButtonProps } from "./types";

export const ProcessStagesTabButton = ({
  isActive,
  title,
  ...restProps
}: ProcessStagesTabButtonProps) => {
  return (
    <button
      className={`flex lg:justify-center grow basis-0 items-end shrink-0 pr-4 pb-4 lg:pb-10 lg:px-5 min-w-48 lg:min-w-0 border-b-2 border-darkGray text-base lg:text-lg text-left lg:text-center ${isActive ? "text-black" : "text-darkGray"}`}
      {...restProps}
    >
      {title}
    </button>
  );
};
