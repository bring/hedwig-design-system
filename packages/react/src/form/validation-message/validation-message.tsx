import { clsx } from "@postenbring/hedwig-css/typed-classname";
import { forwardRef, type HTMLAttributes } from "react";

export interface ValidationMessageProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const ValidationMessage = forwardRef<HTMLDivElement, ValidationMessageProps>(
  ({ className, ...rest }, ref) => (
    <div
      aria-live="polite"
      className={clsx("hds-validation-message", className as undefined)}
      ref={ref}
      {...rest}
    />
  ),
);
ValidationMessage.displayName = "ValidationMessage";
