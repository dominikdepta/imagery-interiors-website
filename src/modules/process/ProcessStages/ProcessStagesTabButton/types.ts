import type { ButtonHTMLAttributes } from "react";

export interface ProcessStagesTabButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  isActive: boolean;
  title: string;
}
