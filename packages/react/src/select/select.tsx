import { useId } from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname/index.mjs";

export interface SelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "children"> {
  label: string;
  variant?: "default" | "white";
  errorMessage?: string;
  children: React.ReactNode;
}

export function Select({
  id,
  label,
  variant,
  errorMessage,
  className,
  disabled,
  children,
  ...rest
}: SelectProps) {
  const errorMessageId = useId();
  const selectId = useId();

  return (
    <div
      className={clsx(
        "hds-select",
        {
          [`hds-select--${variant}`]: variant,
          "hds-select--error": errorMessage,
        },
        className as undefined,
      )}
    >
      <label className="hds-select__label" htmlFor={selectId}>
        {label}
      </label>
      <div className={clsx("hds-select__select-wrapper")} data-disabled={disabled}>
        <select className="hds-select__select" disabled={disabled} id={id || selectId} {...rest}>
          {children}
        </select>
      </div>
      {!!errorMessage && (
        <span className="hds-select__error-message" id={errorMessageId}>
          {errorMessage}
        </span>
      )}
    </div>
  );
}

Select.displayName = "Select";
