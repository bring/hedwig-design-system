import { forwardRef } from "react";
import type { InputHTMLAttributes } from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname";
import { InputGroup } from "../input-group";
import type { InputGroupProps } from "../input-group";

export type InputProps = Omit<InputGroupProps & InputHTMLAttributes<HTMLInputElement>, "children">;

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, size, errorMessage, labelProps, label, id, style, disabled, readOnly, ...rest },
  ref,
) {
  return (
    <InputGroup
      className={clsx("hds-input", className as undefined)}
      disabled={disabled}
      errorMessage={errorMessage}
      id={id}
      label={label}
      labelProps={labelProps}
      readOnly={readOnly}
      style={style}
      size={size}
    >
      <input {...rest} disabled={disabled} readOnly={readOnly} ref={ref} />
    </InputGroup>
  );
});

Input.displayName = "Input";
