import type { PillProps } from "./types";

export const Pill = ({ className, children }: PillProps) => {
  return (
    <span
      className={`py-2 px-3 bg-white rounded-full text-xs text-lightBlack ${className}`}
    >
      {children}
    </span>
  );
};
