import classNames from "classnames";
import { ComponentProps, CSSProperties, ReactElement } from "react";
import * as styles from "./styles/Button.css";

export type ButtonType = "button" | "submit" | "reset";
export type ButtonVariant = "defaultButton" | "gray" | "primary" | "icon";

interface ButtonProps extends ComponentProps<"button"> {
  variant?: ButtonVariant;
  icon?: JSX.Element;
  type?: ButtonType;
  width?: string | number;
  height?: string | number;
}

export const Button = (props: ButtonProps): ReactElement => {
  const {
    variant = "defaultButton",
    className,
    type = "button",
    icon,
    children,
    disabled,
    width,
    height,
    ...rest
  } = props;

  const style: CSSProperties = {
    width: `${width}px`,
    height: `${height}px`,
  };

  return (
    <button
      className={classNames(className, styles[variant])}
      type={type}
      disabled={disabled}
      {...rest}
      style={style}
    >
      {children}
    </button>
  );
};
