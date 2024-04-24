import type { ButtonProps } from "./types";
import { isButtonType, isLinkType } from "./utils";

const classCommon =
  "inline-flex items-center justify-center gap-2.5 text-sm lg:text-lg font-normal";
const classBasic = "border-b-2 border-transparent hover:border-black";
const classPrimary =
  "bg-black py-2 px-3 lg:py-3.5 lg:px-6 text-white uppercase hover:bg-white hover:text-black transition";
const classSecondary = "uppercase";
const classUnderlined = "border-b-2 border-black uppercase";

export const Button = (props: ButtonProps) => {
  const classList = [
    classCommon,
    props.variant === "basic" && classBasic,
    props.variant === "primary" && classPrimary,
    props.variant === "secondary" && classSecondary,
    props.variant === "underlined" && classUnderlined,
  ];

  if (isLinkType(props)) {
    const {
      children,
      className,
      rightElement,
      type = "button",
      variant = "primary",
      ...restProps
    } = props;

    return (
      <a className={`${classList.join(" ")} ${className}`} {...restProps}>
        {children}

        {rightElement && <span>{rightElement}</span>}
      </a>
    );
  }

  if (isButtonType(props)) {
    const {
      children,
      className,
      rightElement,
      type = "button",
      variant = "primary",
      ...restProps
    } = props;

    return (
      <button className={`${classList.join(" ")} ${className}`} {...restProps}>
        {children}

        {rightElement && <span>{rightElement}</span>}
      </button>
    );
  }

  return null;
};
