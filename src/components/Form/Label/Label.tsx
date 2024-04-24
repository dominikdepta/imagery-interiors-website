import type { LabelProps } from "./types";

export const Label = ({ children, className, ...restProps }: LabelProps) => {
  return (
    <label
      className={`flex flex-col gap-1 text-sm lg:text-base text-darkGray uppercase ${className}`}
      {...restProps}
    >
      {children}
    </label>
  );
};
