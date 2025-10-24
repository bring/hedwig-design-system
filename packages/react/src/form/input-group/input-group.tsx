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
  size?: "large" | "small";
  /** @deprecated Use `validationMessage` instead */
  errorMessage?: ReactNode;
  /** @deprecated Use `validationMessageProps` instead */
  errorMessageProps?: Partial<ErrorMessageProps>;
  validationMessage?: ReactNode | { value: ReactNode; variant: ValidationMessageProps["variant"] };
  validationMessageProps?: Partial<ValidationMessageProps>;
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
    errorMessage,
    errorMessageProps,
    validationMessage,
    validationMessageProps,
    labelProps: { className: labelClassName, ...labelProps } = {},
    label,
    disabled,
    readOnly,
    children,
    ...rest
  },
  ref,
) {
  const inputId = useId();
  const validationMessageId = useId();
  let validationMessageValue: ReactNode;
  let validationMessageVariant: ValidationMessageProps["variant"] = "danger";

  if (validationMessage) {
    if (
      typeof validationMessage === "object" &&
      "value" in validationMessage &&
      "variant" in validationMessage
    ) {
      validationMessageValue = validationMessage.value;
      validationMessageVariant = validationMessage.variant;
    } else {
      validationMessageValue = validationMessage;
    }
  } else if (errorMessage) {
    validationMessageValue = errorMessage;
  }

  const renderInput = () => {
    const inputProps: InputProps = {
      "aria-describedby": validationMessageValue ? validationMessageId : undefined,
      "aria-invalid":
        validationMessageValue && validationMessageVariant === "danger" ? true : undefined,
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
          "hds-input-group--error": validationMessageValue && validationMessageVariant === "danger",
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
      <ValidationMessage
        id={validationMessageId}
        variant={validationMessageVariant}
        {...(validationMessageProps ?? errorMessageProps)}
      >
        {validationMessageValue}
      </ValidationMessage>
    </div>
  );
});
