import { useId, forwardRef, createContext, useContext } from "react";
import type { FieldsetHTMLAttributes, HTMLAttributes, ReactNode, CSSProperties } from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname";
import { ErrorMessage, type ErrorMessageProps } from "../error-message";

export interface FieldsetProps extends FieldsetHTMLAttributes<HTMLFieldSetElement> {
  className?: string;
  style?: CSSProperties;
  /**
   * Providing an errorMessage will also give contained Checkboxes or Radio buttons
   * error styling and aria to indicate invalid state.
   *
   * For Radio buttons you are even better off using RadioGroup.
   */
  errorMessage?: ReactNode;
  legendProps?: HTMLAttributes<HTMLElement> & { size: "default" | "large" };
  legend: ReactNode;
  children: ReactNode;
  errorMessageProps?: Partial<ErrorMessageProps>;
}

const FieldsetContext = createContext<{ hasError: boolean }>({ hasError: false });

export const useFieldsetContext = () => useContext(FieldsetContext);

export const Fieldset = forwardRef<HTMLFieldSetElement, FieldsetProps>(function Fieldset(
  {
    className,
    style,
    errorMessage,
    errorMessageProps,
    legendProps: { size: legendSize = "default", className: legendClassName, ...legendProps } = {},
    legend,
    children,
    ...rest
  },
  ref,
) {
  const errorMessageId = useId();

  return (
    <fieldset
      aria-describedby={errorMessage ? errorMessageId : undefined}
      aria-invalid={errorMessage ? true : undefined}
      className={clsx("hds-fieldset", className as undefined)}
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
      <ErrorMessage id={errorMessageId} {...errorMessageProps}>
        {errorMessage}
      </ErrorMessage>
    </fieldset>
  );
});
