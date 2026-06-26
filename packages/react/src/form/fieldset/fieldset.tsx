import { useId, forwardRef, createContext, useContext } from "react";
import type { FieldsetHTMLAttributes, HTMLAttributes, ReactNode, CSSProperties } from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname";
import { ValidationMessage, type ValidationMessageProps } from "../validation-message";
import { type ErrorMessageProps } from "../error-message";
import { getValidationMessageValue } from "../../utils";

export interface FieldsetProps extends FieldsetHTMLAttributes<HTMLFieldSetElement> {
  className?: string;
  style?: CSSProperties;
  "data-color"?: "info" | "success" | "warning" | "error";
  validationMessage?: ReactNode | { value: ReactNode };
  validationMessageProps?: Partial<ValidationMessageProps>;
  /**
   * Providing an errorMessage will also give contained Checkboxes or Radio buttons
   * error styling and aria to indicate invalid state.
   *
   * For Radio buttons you are even better off using RadioGroup.
   */

  /** @deprecated Use `validationMessage` instead */
  errorMessage?: ReactNode;
  legendProps?: HTMLAttributes<HTMLElement> & { size: "default" | "large" };
  legend: ReactNode;
  children: ReactNode;
  /** @deprecated Use `validationMessageProps` instead */
  errorMessageProps?: Partial<ErrorMessageProps>;
}

/** @deprecated Will no longer be needed */
const FieldsetContext = createContext<{ hasError: boolean }>({ hasError: false });

/** @deprecated Will no longer be needed */
export const useFieldsetContext = () => useContext(FieldsetContext);

export const Fieldset = forwardRef<HTMLFieldSetElement, FieldsetProps>(function Fieldset(
  {
    className,
    style,
    "data-color": dataColor = undefined,
    validationMessage,
    validationMessageProps,
    errorMessage,
    errorMessageProps,
    legendProps: { size: legendSize = "default", className: legendClassName, ...legendProps } = {},
    legend,
    children,
    ...rest
  },
  ref,
) {
  const validationMessageId = useId();
  const validationColor = errorMessage ? "error" : dataColor;
  const validationMessageValue = getValidationMessageValue(validationMessage, errorMessage);

  return (
    <fieldset
      aria-describedby={validationMessage ? validationMessageId : undefined}
      aria-invalid={errorMessage ? true : undefined}
      className={clsx("hds-fieldset", className as undefined)}
      data-color={validationColor}
      ref={ref}
      style={style}
      {...rest}
    >
      <legend
        className={clsx(
          "hds-fieldset__legend",
          { [`hds-fieldset__legend--${legendSize}`]: legendSize },
          legendClassName as undefined,
        )}
        {...legendProps}
      >
        {legend}
      </legend>
      <FieldsetContext.Provider value={{ hasError: Boolean(errorMessage) }}>
        {children}
      </FieldsetContext.Provider>
      <ValidationMessage
        id={validationMessageId}
        {...(validationMessageProps ?? errorMessageProps)}
      >
        {validationMessageValue}
      </ValidationMessage>
    </fieldset>
  );
});
