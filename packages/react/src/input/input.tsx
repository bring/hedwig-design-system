import * as React from "react";
import { clsx } from "clsx";

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "children"> {
  id?: string;
  variant?: "default" | "white" | "lined";
  errorMessage?: React.ReactNode;
  labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>;
  label: React.ReactNode;
}

export function Input({
  variant = "default",
  errorMessage,
  labelProps,
  label,
  id,
  ...rest
}: InputProps) {
  const errorMessageId = React.useId();
  const inputId = React.useId();
  return (
    <div
      className={clsx("hds-input", {
        [`hds-input--${variant}`]: variant,
        "hds-input--error": errorMessage,
      })}
    >
      <label className="hds-input__label" {...labelProps} htmlFor={id || inputId}>
        {label}
      </label>
      {!!errorMessage && (
        <span className="hds-input__error-message" id={errorMessageId}>
          {errorMessage}
        </span>
      )}
      <input
        {...rest}
        aria-describedby={errorMessageId}
        className="hds-input__input"
        id={id || inputId}
      />
    </div>
  );
}
