import type { ButtonHTMLAttributes } from "react";

export interface ProjectGallerySliderNavButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type" | "children"> {
  type: "prev" | "next";
}
