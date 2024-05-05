import { clsx } from "@postenbring/hedwig-css/typed-classname";
import { forwardRef, type ReactNode } from "react";

export interface ErrorMessageProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  id: string;
  className?: string;
}

export const ErrorMessage = forwardRef<HTMLDivElement, ErrorMessageProps>(
  ({ children, id, className, ...rest }) => {
    return (
      <div
        aria-live="assertive"
        className={clsx("hds-error-message", className as undefined)}
        id={id}
        {...rest}
      >
        {children}
      </div>
    );
  },
);
ErrorMessage.displayName = "ErrorMessage";
