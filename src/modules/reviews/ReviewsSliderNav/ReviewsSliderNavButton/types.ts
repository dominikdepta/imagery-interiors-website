import type { ButtonHTMLAttributes } from "react";

export interface ReviewsSliderNavButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type"> {
  type: "prev" | "next";
}
