import * as React from "react";
import { warnForStyleOverrides } from "../utils";
import "@posten-hedwig/css/dist/button/button.css";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({
  children,
  style,
  className,
  ...rest
}: ButtonProps): JSX.Element {
  warnForStyleOverrides(style, className);
  return (
    <button className="hwc-button hwc-button--primary" type="button" {...rest}>
      {children}
    </button>
  );
}

Button.displayName = "Button";
