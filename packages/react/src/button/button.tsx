import * as React from "react";
import { clsx } from "clsx";
import { warnForStyleOverrides } from "../utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size?: "small" | "medium" | "large";
}

export function Button({
  children,
  style,
  className,
  size = "medium",
  ...rest
}: ButtonProps): JSX.Element {
  warnForStyleOverrides(style, className);
  return (
    <button
      className={clsx("hds-button", "hds-button--primary", `hds-button--${size}`)}
      type="button"
      {...rest}
    >
      {children}
    </button>
  );
}

Button.displayName = "Button";
