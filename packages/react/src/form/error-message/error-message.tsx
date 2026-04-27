import { forwardRef, type ReactNode } from "react";
import { ValidationMessage } from "../validation-message";

export interface ErrorMessageProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  id: string;
  className?: string;
}
/**
 * @deprecated Use `ValidationMessage` instead
 */
export const ErrorMessage = forwardRef<HTMLDivElement, ErrorMessageProps>(
  ({ children, id, className, ...rest }, ref) => (
    <ValidationMessage id={id} variant="danger" className={className} ref={ref} {...rest}>
      {children}
    </ValidationMessage>
  ),
);
ErrorMessage.displayName = "ErrorMessage";
