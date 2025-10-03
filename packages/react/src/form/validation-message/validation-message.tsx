import { clsx } from "@postenbring/hedwig-css/typed-classname";
import { forwardRef, type ReactNode } from "react";

export interface ValidationMessageProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  id: string;
  className?: string;
}

export const ValidationMessage = forwardRef<HTMLDivElement, ValidationMessageProps>(
  ({ children, id, className, ...rest }, ref) => {
    return (
      <div
        aria-live="polite"
        className={clsx("hds-validation-message", className as undefined)}
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
