import { useId, forwardRef, Children, isValidElement, cloneElement } from "react";
import type { LabelHTMLAttributes, ReactNode, CSSProperties } from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname";
import { type ErrorMessageProps } from "../error-message";
import { ValidationMessage, type ValidationMessageProps } from "../validation-message";

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
  "data-color"?: "info" | "success" | "warning" | "error";
  size?: "large" | "small";
  validationMessage?: ReactNode | { value: ReactNode };
  validationMessageProps?: Partial<ValidationMessageProps>;
  /** @deprecated Use `validationMessage` instead */
  errorMessage?: ReactNode;
  /** @deprecated Use `validationMessageProps` instead */
  errorMessageProps?: Partial<ErrorMessageProps>;
  labelProps?: LabelHTMLAttributes<HTMLLabelElement>;
  label?: ReactNode;
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
    "data-color": dataColor = undefined,
    size = "large",
    validationMessage,
    validationMessageProps,
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
  const validationMessageId = useId();
  const inputId = useId();
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

  const validationColor = errorMessage ? "error" : dataColor;

  const renderInput = () => {
    const inputProps: InputProps = {
      "aria-describedby": validationMessage ? validationMessageId : undefined,
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
        },
        className as undefined,
      )}
      ref={ref}
      style={style}
      data-color={validationColor}
      {...rest}
    >
      {label !== null && label !== undefined && label !== false && (
        <label
          className={clsx("hds-input-group__label", labelClassName as undefined)}
          {...labelProps}
          htmlFor={id ?? inputId}
        >
          {label}
        </label>
      )}
      <div
        className={clsx("hds-input-group__input-wrapper")}
        data-disabled={disabled}
        data-readonly={readOnly}
      >
        {renderInput()}
      </div>
      <ValidationMessage
        id={validationMessageId}
        {...(validationMessageProps ?? errorMessageProps)}
      >
        {validationMessageValue}
      </ValidationMessage>
    </div>
  );
});
