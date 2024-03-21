import type { InputHTMLAttributes } from "react";
import React, { forwardRef } from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname";

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "defaultValue"> {
  variant?: "plain" | "bounding-box";
  hasError?: boolean;
  title?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ variant = "plain", hasError, title, children, className, ...rest }, ref) => {
    return (
      <div
        className={clsx(
          "hds-checkbox",
          {
            [`hds-checkbox--${variant}`]: variant === "bounding-box",
            "hds-checkbox--error": hasError,
          },
          className as undefined,
        )}
      >
        <label>
          <input {...rest} aria-invalid={hasError ? true : undefined} ref={ref} type="checkbox" />
          <span aria-hidden className="hds-checkbox__checkmark" />
          {title ? <p className="hds-checkbox__title">{title}</p> : children}
        </label>
        {title ? children : null}
      </div>
    );
  },
);
Checkbox.displayName = "Checkbox";
