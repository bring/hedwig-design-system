import { forwardRef } from "react";
import type { TextareaHTMLAttributes } from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname";
import { InputGroup } from "../input-group";
import type { InputGroupProps } from "../input-group";

export type TextareaProps = Omit<
  InputGroupProps & TextareaHTMLAttributes<HTMLTextAreaElement>,
  "children"
>;

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  {
    className,
    size,
    validationMessage,
    validationMessageProps,
    errorMessage,
    labelProps,
    label,
    id,
    style,
    disabled,
    readOnly,
    "data-color": dataColor,
    ...rest
  },
  ref,
) {
  return (
    <InputGroup
      className={clsx("hds-textarea", className as undefined)}
      disabled={disabled}
      validationMessage={validationMessage}
      validationMessageProps={validationMessageProps}
      errorMessage={errorMessage}
      id={id}
      label={label}
      labelProps={labelProps}
      readOnly={readOnly}
      style={style}
      size={size}
      data-color={dataColor}
    >
      <textarea disabled={disabled} readOnly={readOnly} ref={ref} {...rest} />
    </InputGroup>
  );
});

Textarea.displayName = "Textarea";
