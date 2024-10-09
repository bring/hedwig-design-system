import { forwardRef, useId, type InputHTMLAttributes, type ReactNode } from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname";
import { ErrorMessage } from "../error-message";
import { useFieldsetContext } from "../fieldset";

export type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, "defaultValue"> & {
  children: ReactNode;
  variant?: "plain" | "bounding-box";
  title?: string;
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
        errorMessage?: ReactNode;
      }
  );

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      variant = "plain",
      hasError: hasErrorProp,
      errorMessage,
      title,
      children,
      className,
      ...rest
    },
    ref,
  ) => {
    const errorMessageId = useId();
    const { hasError: hasFieldsetError } = useFieldsetContext();
    const hasError = !!errorMessage || hasFieldsetError || hasErrorProp;

    return (
      <div className={clsx("hds-checkbox-wrapper")}>
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
            <input
              {...rest}
              aria-invalid={hasError ? true : undefined}
              aria-describedby={errorMessage ? errorMessageId : undefined}
              ref={ref}
              type="checkbox"
            />
            <span aria-hidden className="hds-checkbox__checkmark" />
            {title ? <p className="hds-checkbox__title">{title}</p> : children}
          </label>
          {title ? children : null}
        </div>
        <ErrorMessage id={errorMessageId}>{errorMessage}</ErrorMessage>
      </div>
    );
  },
);
Checkbox.displayName = "Checkbox";
