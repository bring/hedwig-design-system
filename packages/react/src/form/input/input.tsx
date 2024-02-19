import { forwardRef } from "react";
import type { InputHTMLAttributes } from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname/index.mjs";
import { InputGroup } from "../input-group";
import type { InputGroupProps } from "../input-group";

export type InputProps = Omit<InputGroupProps & InputHTMLAttributes<HTMLInputElement>, "children">;

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    className,
    variant,
    errorMessage,
    labelProps,
    label,
    id,
    style,
    disabled,
    readOnly,
    _unstableAriaLiveOnErrorMessage,
    ...rest
  },
  ref,
) {
  return (
    <InputGroup
      _unstableAriaLiveOnErrorMessage={_unstableAriaLiveOnErrorMessage}
      className={clsx("hds-input", className as undefined)}
      disabled={disabled}
      errorMessage={errorMessage}
      id={id}
      label={label}
      labelProps={labelProps}
      readOnly={readOnly}
      style={style}
      variant={variant}
    >
      <input {...rest} disabled={disabled} readOnly={readOnly} ref={ref} />
    </InputGroup>
  );
});

Input.displayName = "Input";
