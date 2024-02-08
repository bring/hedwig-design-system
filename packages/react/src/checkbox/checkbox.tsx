import type { InputHTMLAttributes } from "react";
import React, { forwardRef } from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname/index.mjs";

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "defaultValue"> {
  variant?: "plain" | "bounding-box";
  hasError?: boolean;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ variant = "plain", hasError, children, className, ...rest }, ref) => {
    return (
      <label
        className={clsx(
          "hds-checkbox",
          {
            [`hds-checkbox--${variant}`]: variant === "bounding-box",
            "hds-checkbox--error": hasError,
          },
          className as undefined,
        )}
      >
        <input {...rest} ref={ref} type="checkbox" />
        <span className="hds-checkbox-checkmark" />
        {children}
      </label>
    );
  },
);
Checkbox.displayName = "Checkbox";