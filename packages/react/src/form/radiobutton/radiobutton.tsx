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
      <div
        className={clsx(
          "hds-radiobutton",
          {
            [`hds-radiobutton--${variant}`]: variant === "bounding-box",
            "hds-radiobutton--error": hasError,
          },
          className as undefined,
        )}
      >
        <label>
          <input {...rest} ref={ref} type="radio" />
          <span aria-hidden className="hds-radiobutton__checkmark" />
          {title ? <p className="hds-radiobutton__title">{title}</p> : children}
        </label>
        {title ? children : null}
      </div>
    );
  },
);
Radiobutton.displayName = "Radiobutton";
