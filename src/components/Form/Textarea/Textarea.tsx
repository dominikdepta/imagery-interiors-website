import type { TextareaProps } from "./types";

export const Textarea = ({ className, ...restProps }: TextareaProps) => {
  return (
    <textarea
      className={`py-3 px-2.5 lg:py-4 lg:px-3 bg-lightGray text-black text-base lg:text-lg leading-none lg:leading-none focus-visible:outline outline-2 outline-darkGray ${className}`}
      {...restProps}
    />
  );
};
