import { forwardRef, type ReactNode } from "react";
import { ValidationMessage } from "../validation-message";

export interface ErrorMessageProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  id: string;
  className?: string;
}

export const ErrorMessage = forwardRef<HTMLDivElement, ErrorMessageProps>(
  ({ children, id, className, ...rest }, ref) => (
    <ValidationMessage id={id} data-color="error" className={className} {...rest} ref={ref}>
      {children}
    </ValidationMessage>
  ),
);
ErrorMessage.displayName = "ErrorMessage";
