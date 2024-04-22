import type { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = ({ className, ...restProps }: InputProps) => {
  return (
    <input
      className={`py-2 px-2.5 lg:py-3.5 lg:px-3 bg-lightGray text-black text-base lg:text-lg leading-none lg:leading-none focus-visible:outline outline-2 outline-darkGray ${className}`}
      {...restProps}
    />
  );
};
