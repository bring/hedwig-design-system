import { useId, forwardRef, Children, isValidElement, cloneElement } from "react";
import type { LabelHTMLAttributes, ReactNode, CSSProperties } from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname";
import { ErrorMessage, type ErrorMessageProps } from "../error-message";

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
  size?: "large" | "small";
  variant?: "default";
  errorMessage?: ReactNode;
  errorMessageProps?: Partial<ErrorMessageProps>;
  labelProps?: LabelHTMLAttributes<HTMLLabelElement>;
  label: ReactNode;
  disabled?: boolean;
  readOnly?: boolean;
  /**
   * `children` must be either a single input element or a render function.
   *
   * If you use a render function, make sure you spread the input props to the appropriate element.
   */
  children: Exclude<ReactNode, Iterable<ReactNode>> | ((inputProps: InputProps) => ReactNode);
}

export const InputGroup = forwardRef<HTMLDivElement, InputGroupProps>(function InputGroup(
  {
    id,
    className,
    style,
    size = "large",
    variant = "default",
    errorMessage,
    errorMessageProps,
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
    const inputProps: InputProps = {
      "aria-describedby": errorMessage ? errorMessageId : undefined,
      "aria-invalid": errorMessage ? true : undefined,
      id: id ?? inputId,
      className: clsx("hds-input-group__input"),
    };

    if (typeof children === "function") {
      return children(inputProps);
    }

    const input: ReactNode = Children.toArray(children)[0];

    if (!isValidElement<InputProps>(input)) {
      return;
    }

    return cloneElement<InputProps>(input, {
      ...inputProps,
      ...input.props,
      className: `${inputProps.className} ${input.props.className ?? ""}`,
    });
  };

  return (
    <div
      className={clsx(
        "hds-input-group",
        {
          [`hds-input-group--${size}`]: size,
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
      <ErrorMessage id={errorMessageId} {...errorMessageProps}>
        {errorMessage}
      </ErrorMessage>
    </div>
  );
});
