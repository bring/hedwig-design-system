import { forwardRef, useId, type InputHTMLAttributes, type ReactNode } from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname";
import { ValidationMessage, type ValidationMessageProps } from "../validation-message";
import { type ErrorMessageProps } from "../error-message";
import { useFieldsetContext } from "../fieldset";

export type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, "defaultValue" | "size"> & {
  children: ReactNode;
  variant?: "plain" | "bounding-box";
  title?: string;
  validationMessage?: ReactNode | { value: ReactNode };
  validationMessageProps?: Partial<ValidationMessageProps>;
  /** @deprecated Use `validationMessageProps` instead */
  errorMessageProps?: Partial<ErrorMessageProps>;
  size?: "small" | "";
} & (
    | {
        /**
         * Set to `true` to add error styling. The component will take care of aria to indicate invalid state.
         *
         * Normally you don't need this, as you should wrap your Checkboxes in the Fieldset component.
         * When providing an errorMessage to Fieldset, all contained Checkboxes will get correct hasError state.
         *
         * You can use this when your checkbox is part of a non-HDS fieldset which shows an error message.
         */
        hasError?: boolean;
        //validationMessage?: never;
        /** @deprecated Use `validationMessage` instead */
        errorMessage?: never;
      }
    | {
        hasError?: never;
        /**
         * Set an error message to add error styling, and display the error message.
         * The component will take care of aria to connect the error message to the checkbox.
         *
         * Use this when your checkbox is standalone (not part of a fieldset).
         */
        //validationMessage?: ReactNode;
        /** @deprecated Use `validationMessage` instead */
        errorMessage?: ReactNode;
      }
  );

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      variant = "plain",
      hasError: hasErrorProp,
      validationMessage,
      validationMessageProps,
      errorMessage,
      errorMessageProps,
      title,
      children,
      className,
      size = "",
      ...rest
    },
    ref,
  ) => {
    const validationMessageId = useId();
    const { hasError: hasFieldsetError } = useFieldsetContext();
    const hasError = !!errorMessage || hasFieldsetError || hasErrorProp;

    let validationMessageValue: ReactNode;

    if (validationMessage) {
      if (typeof validationMessage === "object" && "value" in validationMessage) {
        validationMessageValue = validationMessage.value;
      } else {
        validationMessageValue = validationMessage;
      }
    } else if (errorMessage) {
      validationMessageValue = errorMessage;
    }

    return (
      <div
        className={clsx("hds-checkbox-wrapper", {
          "hds-checkbox-wrapper--small": size === "small",
        })}
      >
        <div
          className={clsx(
            "hds-checkbox",
            {
              [`hds-checkbox--${variant}`]: variant === "bounding-box",
            },
            className as undefined,
          )}
        >
          <label>
            <input
              aria-invalid={hasError ? true : undefined}
              aria-describedby={validationMessage ? validationMessageId : undefined}
              ref={ref}
              type="checkbox"
              {...rest}
            />
            <span aria-hidden className="hds-checkbox__checkmark" />
            {title ? <p className="hds-checkbox__title">{title}</p> : children}
          </label>
          {title ? children : null}
        </div>
        <ValidationMessage
          id={validationMessageId}
          {...(validationMessageProps ?? errorMessageProps)}
        >
          {validationMessageValue}
        </ValidationMessage>
      </div>
    );
  },
);
Checkbox.displayName = "Checkbox";
