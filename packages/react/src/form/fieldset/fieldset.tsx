import { useId, forwardRef } from "react";
import type { FieldsetHTMLAttributes, HTMLAttributes, ReactNode, CSSProperties } from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname/index.mjs";
import { ErrorMessage } from "../error-message";

export interface FieldsetProps extends FieldsetHTMLAttributes<HTMLFieldSetElement> {
  className?: string;
  style?: CSSProperties;
  errorMessage?: ReactNode;
  legendProps?: HTMLAttributes<HTMLElement> & { size: "default" | "large" };
  legend: ReactNode;
  children: ReactNode;
}

/**
 * 🚨 WORK IN PROGRESS 🚨
 */
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
      <div className={clsx("hds-fieldset__input-wrapper")}>{children}</div>
      <ErrorMessage id={errorMessageId}>{errorMessage}</ErrorMessage>
    </fieldset>
  );
});
