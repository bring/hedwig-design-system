import * as React from "react";
import { clsx } from "clsx";
import { warnForStyleOverrides } from "../utils";
import "@posten-hedwig/css/dist/button/button.css";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size: "small" | "medium" | "large";
}

/**
 * Hedwig button element
 */
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
      className={clsx(
        "hwc-button",
        "hwc-button--primary",
        `hwc-button--${size}`,
      )}
      type="button"
      {...rest}
    >
      {children}
    </button>
  );
}

Button.displayName = "Button";
