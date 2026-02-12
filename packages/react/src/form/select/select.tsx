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
    errorMessage,
    validationMessage,
    labelProps,
    label,
    id,
    style,
    disabled,
    children,
    ...rest
  },
  ref,
) {
  return (
    <InputGroup
      className={clsx("hds-select", className as undefined)}
      disabled={disabled}
      errorMessage={errorMessage}
      validationMessage={validationMessage}
      id={id}
      label={label}
      labelProps={labelProps}
      style={style}
      size={size}
    >
      <select {...rest} disabled={disabled} ref={ref}>
        {children}
      </select>
    </InputGroup>
  );
});

Select.displayName = "Select";
