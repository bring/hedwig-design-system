import { clsx } from "@postenbring/hedwig-css/typed-classname";
import { forwardRef, type ReactNode } from "react";

export interface ValidationMessageProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  id: string;

  /**
   * Variant of validation message
   * @default "danger"
   */
  variant?: "info" | "success" | "warning" | "danger";
  className?: string;
}

export const ValidationMessage = forwardRef<HTMLDivElement, ValidationMessageProps>(
  ({ children, id, variant = "danger", className, ...rest }, ref) => {
    return (
      <div
        aria-live="polite"
        className={clsx(
          "hds-validation-message",
          `hds-validation-message--${variant}`,
          className as undefined,
        )}
        id={id}
        ref={ref}
        {...rest}
      >
        {children}
      </div>
    );
  },
);
ValidationMessage.displayName = "ValidationMessage";
