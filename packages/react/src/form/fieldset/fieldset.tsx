import { useId, forwardRef, createContext, useContext } from "react";
import type { FieldsetHTMLAttributes, HTMLAttributes, ReactNode, CSSProperties } from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname";
import { ErrorMessage } from "../error-message";

export interface FieldsetProps extends FieldsetHTMLAttributes<HTMLFieldSetElement> {
  className?: string;
  style?: CSSProperties;
  /**
   * Providing an errorMessage will also give contained Checkboxes or Radiobuttons
   * error styling and aria to indicate invalid state.
   *
   * For Radiobuttons you are even better off using RadioGroup.
   */
  errorMessage?: ReactNode;
  legendProps?: HTMLAttributes<HTMLElement> & { size: "default" | "large" };
  legend: ReactNode;
  children: ReactNode;
}

const FieldsetContext = createContext<{ errorMessage?: ReactNode }>({});

export const useFieldsetContext = () => useContext(FieldsetContext);

export const Fieldset = forwardRef<HTMLFieldSetElement, FieldsetProps>(function Fieldset(
  {
    className,
    style,
    errorMessage,
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
      <div className={clsx("hds-fieldset__input-wrapper")}>
        <FieldsetContext.Provider value={{ errorMessage }}>{children}</FieldsetContext.Provider>
      </div>
      <ErrorMessage id={errorMessageId}>{errorMessage}</ErrorMessage>
    </fieldset>
  );
});
