import { forwardRef } from "react";
import type { SelectHTMLAttributes } from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname";
import { InputGroup } from "../input-group";
import type { InputGroupProps } from "../input-group";

export type SelectProps = Omit<
  InputGroupProps & SelectHTMLAttributes<HTMLSelectElement>,
  "readOnly"
>;

export const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
  { className, variant, errorMessage, labelProps, label, id, style, disabled, children, ...rest },
  ref,
) {
  return (
    <InputGroup
      className={clsx("hds-select", className as undefined)}
      disabled={disabled}
      errorMessage={errorMessage}
      id={id}
      label={label}
      labelProps={labelProps}
      style={style}
      variant={variant}
    >
      <select {...rest} disabled={disabled} ref={ref}>
        {children}
      </select>
    </InputGroup>
  );
});

Select.displayName = "Select";
