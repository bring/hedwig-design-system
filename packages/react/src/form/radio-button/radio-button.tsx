import { forwardRef, type InputHTMLAttributes, type ReactNode } from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname";
import { type RadioGroupProps, useRadioGroupContext } from "./radio-group";

export interface RadioButtonProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "defaultValue" | "size"> {
  children: ReactNode;
  variant?: "plain" | "bounding-box";
  /**
   * Set to `true` to add error styling. The component will take care of aria to indicate invalid state.
   *
   * Normally you don't need this, as you should wrap your Radio buttons in the RadioGroup component.
   * When providing an errorMessage to RadioGroup, all contained Radio buttons will get correct hasError state.
   *
   * You can use this when your Radio button is part of a non-HDS fieldset which shows an error message.
   */
  title?: string;
  size?: "small" | "";
}

const isChecked = ({
  checked,
  selectedValue,
  value,
}: Pick<RadioButtonProps, "checked" | "value"> & {
  selectedValue: RadioGroupProps["value"];
}) => {
  if (typeof checked !== "undefined") return checked;
  if (typeof selectedValue !== "undefined") return value === selectedValue;
  return undefined;
};

export const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(
  ({ checked, value, variant = "plain", title, children, className, size = "", ...rest }, ref) => {
    const { value: selectedValue, ...context } = useRadioGroupContext();

    return (
      <div
        className={clsx(
          "hds-radio-button",
          {
            [`hds-radio-button--${variant}`]: variant === "bounding-box",
            [`hds-radio-button--${size}`]: size,
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
          <span aria-hidden className="hds-radio-button__checkmark" />
          {title ? <p className="hds-radio-button__title">{title}</p> : children}
        </label>
        {title ? children : null}
      </div>
    );
  },
);

RadioButton.displayName = "RadioButton";
