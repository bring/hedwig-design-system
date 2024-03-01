import type { InputHTMLAttributes } from "react";
import React, { forwardRef } from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname/index.mjs";

export interface RadiobuttonProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "defaultValue"> {
  variant?: "plain" | "bounding-box";
  hasError?: boolean;
  title?: string;
}

export const Radiobutton = forwardRef<HTMLInputElement, RadiobuttonProps>(
  ({ variant = "plain", hasError, title, children, className, ...rest }, ref) => {
    return (
      <label
        className={clsx(
          "hds-radiobutton",
          {
            [`hds-radiobutton--${variant}`]: variant === "bounding-box",
            "hds-radiobutton--error": hasError,
          },
          className as undefined,
        )}
      >
        <input {...rest} ref={ref} type="radio" />
        <span className="hds-radiobutton__checkmark" />
        {title ? <p className="hds-radiobutton__title">{title}</p> : null}
        {children}
      </label>
    );
  },
);
Radiobutton.displayName = "Radiobutton";
