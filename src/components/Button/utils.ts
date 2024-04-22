import type { ButtonProps, LinkTypeProps, ButtonTypeProps } from "./types";

export const isLinkType = (props: ButtonProps): props is LinkTypeProps =>
  props.type === "link";

export const isButtonType = (props: ButtonProps): props is ButtonTypeProps =>
  props.type === "button";
