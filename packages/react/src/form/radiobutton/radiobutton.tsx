import type { InputHTMLAttributes } from "react";
import React, { forwardRef } from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname";
import { type RadioGroupProps, useRadioGroupContext } from "./radiogroup";

export interface RadiobuttonProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "defaultValue"> {
  variant?: "plain" | "bounding-box";
  hasError?: boolean;
  title?: string;
}

const isChecked = ({
  checked,
  selectedValue,
  value,
}: Pick<RadiobuttonProps, "checked" | "value"> & {
  selectedValue: RadioGroupProps["value"];
}) => {
  if (typeof checked !== "undefined") return checked;
  if (typeof selectedValue !== "undefined") return value === selectedValue;
  return undefined;
};

export const Radiobutton = forwardRef<HTMLInputElement, RadiobuttonProps>(
  (
    {
      checked,
      value,
      variant = "plain",
      hasError: hasErrorProp,
      title,
      children,
      className,
      ...rest
    },
    ref,
  ) => {
    const { value: selectedValue, hasError: hasErrorContext, ...context } = useRadioGroupContext();
    const hasError = hasErrorContext || hasErrorProp;
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
          <input
            {...context}
            {...rest}
            checked={isChecked({ checked, selectedValue, value })}
            value={value}
            ref={ref}
            type="radio"
          />
          <span aria-hidden className="hds-radiobutton__checkmark" />
          {title ? <p className="hds-radiobutton__title">{title}</p> : children}
        </label>
        {title ? children : null}
      </div>
    );
  },
);

Radiobutton.displayName = "Radiobutton";
