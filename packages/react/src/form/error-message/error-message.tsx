import { forwardRef, type ReactNode } from "react";
import { ValidationMessage } from "../validation-message";

/** @deprecated Use ValidationMessageProps instead */
export interface ErrorMessageProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  id: string;
  className?: string;
}

/** @deprecated Use ValidationMessage with data-color="error" instead */
export const ErrorMessage = forwardRef<HTMLDivElement, ErrorMessageProps>(
  ({ children, id, className, ...rest }, ref) => (
    <ValidationMessage id={id} data-color="error" className={className} {...rest} ref={ref}>
      {children}
    </ValidationMessage>
  ),
);
ErrorMessage.displayName = "ErrorMessage";
