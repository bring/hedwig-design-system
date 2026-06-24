import { forwardRef } from "react";
import type { InputHTMLAttributes } from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname";
import { InputGroup } from "../input-group";
import type { InputGroupProps } from "../input-group";

/**
 * Omitting:
 * - `size` from InputHTMLAttributes
 * - `children` from InputGroupProps
 * The original `size` prop that input elements have is not in use in HDS.
 * It is overridden by styling.
 */
export type InputProps = Omit<
  InputGroupProps & Omit<InputHTMLAttributes<HTMLInputElement>, "size">,
  "children"
>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      size,
      validationMessage,
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
  ) => (
    <InputGroup
      className={clsx("hds-input", className as undefined)}
      disabled={disabled}
      validationMessage={validationMessage}
      errorMessage={errorMessage}
      id={id}
      label={label}
      labelProps={labelProps}
      readOnly={readOnly}
      style={style}
      size={size}
      data-color={dataColor}
    >
      <input disabled={disabled} readOnly={readOnly} ref={ref} {...rest} />
    </InputGroup>
  ),
);

Input.displayName = "Input";
