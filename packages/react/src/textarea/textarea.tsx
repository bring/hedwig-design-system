import { forwardRef } from "react";
import type { TextareaHTMLAttributes } from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname/index.mjs";
import { InputGroup } from "../input-group";
import type { InputGroupProps } from "../input-group";

export type TextareaProps = Omit<
  InputGroupProps & TextareaHTMLAttributes<HTMLTextAreaElement>,
  "children"
>;

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { variant, errorMessage, labelProps, label, id, style, disabled, readOnly, ...rest },
  ref,
) {
  return (
    <InputGroup
      className={clsx("hds-textarea")}
      disabled={disabled}
      errorMessage={errorMessage}
      id={id}
      label={label}
      labelProps={labelProps}
      readOnly={readOnly}
      variant={variant}
    >
      <textarea {...rest} disabled={disabled} readOnly={readOnly} ref={ref} style={style} />
    </InputGroup>
  );
});

Textarea.displayName = "Textarea";
