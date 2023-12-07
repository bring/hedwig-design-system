import * as React from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname/index.mjs";

export interface DropdownProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "children"> {
  label: string;
  variant: "default" | "white" | "lined";
  errorMessage?: string;
  children: React.ReactNode;
}

export function Dropdown({
  label,
  variant,
  errorMessage,
  className,
  children,
  ...rest
}: DropdownProps) {
  return (
    <label className={clsx("hds-dropdown__label", { "hds-dropdown--error": errorMessage })}>
      {label}
      <select
        className={clsx(
          "hds-dropdown",
          {
            [`hds-dropdown--${variant}`]: variant,
            "hds-dropdown--error": errorMessage,
          },
          className as undefined,
        )}
        {...rest}
      >
        {children}
      </select>
      {errorMessage ? <div className="hds-dropdown-message">{errorMessage}</div> : null}
    </label>
  );
}

Dropdown.displayName = "Dropdown";
