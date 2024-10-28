import { forwardRef, useEffect, useRef } from "react";
import { Message } from "../../message";
import { UnorderedList } from "../../list";
import { Link } from "../../link";

interface ErrorSummaryItemProps extends React.HTMLAttributes<HTMLLIElement> {
  message: React.ReactNode;
  href: `#${string}`;
}
export const ErrorSummaryItem = forwardRef<HTMLLIElement, ErrorSummaryItemProps>(
  ({ message, href }, ref) => {
    return (
      <li ref={ref}>
        <Link size="small" href={href}>
          {message}
        </Link>
      </li>
    );
  },
);
ErrorSummaryItem.displayName = "ErrorSummary.Item";

export interface ErrorSummaryError {
  message: string;
  anchor: string;
}

export interface ErrorSummaryProps extends React.HTMLAttributes<HTMLDivElement> {
  heading: string;
  errors: ErrorSummaryError[];
  autoFocus?: boolean;
}

export const ErrorSummary = forwardRef<HTMLDivElement, ErrorSummaryProps>(
  ({ children, heading, autoFocus = false, ...rest }, ref) => {
    // Automatically focus on this element when it enters the DOM
    const headingRef = useRef<HTMLParagraphElement>(null);
    useEffect(() => {
      if (autoFocus) {
        headingRef.current?.focus();
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps -- autoFocus should only run once
    }, []);

    return (
      <Message variant="warning" ref={ref} {...rest}>
        <Message.Title ref={headingRef}>{heading}</Message.Title>
        <Message.Description>
          <UnorderedList size="small">{children}</UnorderedList>
        </Message.Description>
      </Message>
    );
  },
) as ErrorSummaryType;
ErrorSummary.displayName = "ErrorSummary";

type ErrorSummaryType = ReturnType<typeof forwardRef<HTMLDivElement, ErrorSummaryProps>> & {
  Item: typeof ErrorSummaryItem;
};
ErrorSummary.Item = ErrorSummaryItem;
