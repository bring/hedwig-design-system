import { useId, useRef, forwardRef } from "react";
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
  const inputRefInternal = useRef<HTMLInputElement>(null);
  const inputRef = ref || inputRefInternal;

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
        aria-disabled={disabled}
        aria-readonly={readOnly}
        className={clsx("hds-input__input-wrapper")}
      >
        <input
          {...rest}
          aria-describedby={errorMessage ? errorMessageId : undefined}
          className="hds-input__input"
          disabled={disabled}
          id={id || inputId}
          readOnly={readOnly}
          ref={inputRef}
        />
        {!!errorMessage && (
          <span className={clsx("hds-input__error-icon")}>
            {/* Swap for something from FontAwesome!? */}
            <svg
              fill="none"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect fill="black" height="12" rx="3" width="6" x="9" y="7" />
              <path
                d="M22.3552 18.4687C22.998 19.5938 22.1944 21 20.8685 21H3.7123C2.38641 21 1.58283 19.5938 2.22569 18.4687L10.8239 3.84375C11.4668 2.71875 13.1141 2.71875 13.7971 3.84375L22.3552 18.4687ZM11.3462 8.46429V13.6071C11.3462 14.1696 11.8284 14.5714 12.3105 14.5714C12.8328 14.5714 13.2748 14.1696 13.2748 13.6071V8.46429C13.2748 7.94196 12.8328 7.5 12.3105 7.5C11.748 7.5 11.3462 7.94196 11.3462 8.46429ZM12.3105 18.4286C12.9935 18.4286 13.556 17.8661 13.556 17.183C13.556 16.5 12.9935 15.9375 12.3105 15.9375C11.5873 15.9375 11.0248 16.5 11.0248 17.183C11.0248 17.8661 11.5873 18.4286 12.3105 18.4286Z"
                fill="#FDBB2F"
              />
            </svg>
          </span>
        )}
      </div>
      {!!errorMessage && (
        <span className="hds-input__error-message" id={errorMessageId}>
          {errorMessage}
        </span>
      )}
    </div>
  );
});
