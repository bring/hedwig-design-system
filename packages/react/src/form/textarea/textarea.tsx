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
  { className, size, errorMessage, labelProps, label, id, style, disabled, readOnly, ...rest },
  ref,
) {
  return (
    <InputGroup
      className={clsx("hds-textarea", className as undefined)}
      disabled={disabled}
      errorMessage={errorMessage}
      id={id}
      label={label}
      labelProps={labelProps}
      readOnly={readOnly}
      style={style}
      size={size}
    >
      <textarea {...rest} disabled={disabled} readOnly={readOnly} ref={ref} />
    </InputGroup>
  );
});

Textarea.displayName = "Textarea";
