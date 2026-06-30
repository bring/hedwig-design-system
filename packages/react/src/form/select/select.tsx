import { forwardRef, type ReactNode, type SelectHTMLAttributes } from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname";
import { InputGroup } from "../input-group";
import type { InputGroupProps } from "../input-group";

export type SelectProps = Omit<
  InputGroupProps & Omit<SelectHTMLAttributes<HTMLSelectElement>, "size">,
  "readOnly" | "children"
> & { children: ReactNode };

export const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
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
    "data-color": dataColor,
    children,
    ...rest
  },
  ref,
) {
  return (
    <InputGroup
      className={clsx("hds-select", className as undefined)}
      disabled={disabled}
      validationMessage={validationMessage}
      validationMessageProps={validationMessageProps}
      errorMessage={errorMessage}
      id={id}
      label={label}
      labelProps={labelProps}
      style={style}
      size={size}
      data-color={dataColor}
    >
      <select disabled={disabled} ref={ref} {...rest}>
        {children}
      </select>
    </InputGroup>
  );
});

Select.displayName = "Select";
