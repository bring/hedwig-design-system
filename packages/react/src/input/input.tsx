import { useId, forwardRef } from "react";
import type { ReactNode, InputHTMLAttributes, LabelHTMLAttributes } from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname/index.mjs";

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "children"> {
  id?: string;
  variant?: "default" | "white";
  errorMessage?: ReactNode;
  labelProps?: LabelHTMLAttributes<HTMLLabelElement>;
  label: ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    variant = "default",
    errorMessage,
    labelProps,
    label,
    id,
    className,
    disabled,
    readOnly,
    ...rest
  },
  ref,
) {
  const errorMessageId = useId();
  const inputId = useId();

  return (
    <div
      className={clsx(
        "hds-input",
        {
          [`hds-input--${variant}`]: variant,
          "hds-input--error": errorMessage,
        },
        className as undefined,
      )}
    >
      <label className="hds-input__label" {...labelProps} htmlFor={id || inputId}>
        {label}
      </label>
      <div
        className={clsx("hds-input__input-wrapper")}
        data-disabled={disabled}
        data-readonly={readOnly}
      >
        <input
          {...rest}
          aria-describedby={errorMessage ? errorMessageId : undefined}
          className="hds-input__input"
          disabled={disabled}
          id={id || inputId}
          readOnly={readOnly}
          ref={ref}
        />
      </div>
      {!!errorMessage && (
        <span className="hds-input__error-message" id={errorMessageId}>
          {errorMessage}
        </span>
      )}
    </div>
  );
});
