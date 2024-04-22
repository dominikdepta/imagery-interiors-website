import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

export type ButtonVariant = "primary" | "secondary" | "basic" | "underlined";

export interface ButtonBaseProps {
  variant?: ButtonVariant;
  rightElement?: ReactNode;
}

export interface ButtonTypeProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonBaseProps {
  type: "button";
}

export interface LinkTypeProps
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    ButtonBaseProps {
  type: "link";
}

export type ButtonProps = ButtonTypeProps | LinkTypeProps;
