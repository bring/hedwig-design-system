import { forwardRef, type SelectHTMLAttributes } from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname";
import { InputGroup } from "../input-group";
import type { InputGroupProps } from "../input-group";

export type SelectProps = Omit<
  InputGroupProps & Omit<SelectHTMLAttributes<HTMLSelectElement>, "size">,
  "readOnly"
>;

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      className,
      size,
      validationMessage,
      validationMessageProps,
      errorMessage,
      labelProps,
      label,
      "data-color": dataColor,
      ...rest
    },
    ref,
  ) => (
    <InputGroup
      className={clsx("hds-select", className as undefined)}
      validationMessage={validationMessage}
      validationMessageProps={validationMessageProps}
      errorMessage={errorMessage}
      label={label}
      labelProps={labelProps}
      size={size}
      data-color={dataColor}
    >
      <select ref={ref} {...rest} />
    </InputGroup>
  ),
);

Select.displayName = "Select";
