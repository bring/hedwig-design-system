import { forwardRef } from "react";
import type { SelectHTMLAttributes } from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname/index.mjs";
import { InputGroup } from "../input-group";
import type { InputGroupProps } from "../input-group";

export type SelectProps = Omit<
  InputGroupProps & SelectHTMLAttributes<HTMLSelectElement>,
  "readOnly"
>;

export const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
  { variant, errorMessage, labelProps, label, id, style, disabled, children, ...rest },
  ref,
) {
  return (
    <InputGroup
      className={clsx("hds-select")}
      disabled={disabled}
      errorMessage={errorMessage}
      id={id}
      label={label}
      labelProps={labelProps}
      variant={variant}
    >
      <select {...rest} disabled={disabled} ref={ref} style={style}>
        {children}
      </select>
    </InputGroup>
  );
});

Select.displayName = "Select";
