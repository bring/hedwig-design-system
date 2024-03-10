import { useId, forwardRef, Children, isValidElement, cloneElement } from "react";
import type { LabelHTMLAttributes, ReactNode, CSSProperties } from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname/index.mjs";
import { ErrorMessage } from "../error-message";

interface InputProps {
  "aria-describedby"?: string;
  "aria-invalid"?: boolean;
  id?: string;
  className?: string;
}

export interface InputGroupProps {
  id?: string;
  className?: string;
  style?: CSSProperties;
  variant?: "default" | "white";
  errorMessage?: ReactNode;
  labelProps?: LabelHTMLAttributes<HTMLLabelElement>;
  label: ReactNode;
  disabled?: boolean;
  readOnly?: boolean;
  children: ReactNode;
}

export const InputGroup = forwardRef<HTMLDivElement, InputGroupProps>(function InputGroup(
  {
    id,
    className,
    style,
    variant = "default",
    errorMessage,
    labelProps: { className: labelClassName, ...labelProps } = {},
    label,
    disabled,
    readOnly,
    children,
    ...rest
  },
  ref,
) {
  const errorMessageId = useId();
  const inputId = useId();

  const renderInput = () => {
    const input = Children.toArray(children)[0];

    if (!isValidElement<InputProps>(input)) {
      return;
    }

    return cloneElement<InputProps>(input, {
      "aria-describedby": errorMessage ? errorMessageId : undefined,
      "aria-invalid": errorMessage ? true : undefined,
      id: id ?? inputId,
      ...input.props,
      className: clsx("hds-input-group__input", input.props.className as undefined),
    });
  };

  return (
    <div
      className={clsx(
        "hds-input-group",
        {
          [`hds-input-group--${variant}`]: variant,
          "hds-input-group--error": errorMessage,
        },
        className as undefined,
      )}
      ref={ref}
      style={style}
      {...rest}
    >
      <label
        className={clsx("hds-input-group__label", labelClassName as undefined)}
        {...labelProps}
        htmlFor={id ?? inputId}
      >
        {label}
      </label>
      <div
        className={clsx("hds-input-group__input-wrapper")}
        data-disabled={disabled}
        data-readonly={readOnly}
      >
        {renderInput()}
      </div>
      <ErrorMessage id={errorMessageId}>{errorMessage}</ErrorMessage>
    </div>
  );
});
