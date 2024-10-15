import { useEffect, useRef } from "react";
import { Message } from "../../message";
import { UnorderedList } from "../../list";
import { Link } from "../../link";

export interface ErrorSummaryError {
  message: string;
  anchor?: string;
}

export interface ErrorSummaryProps {
  heading: string;
  errors: ErrorSummaryError[];
  autoFocus?: boolean;
}

export function ErrorSummary({ heading, errors, autoFocus = false }: ErrorSummaryProps) {
  // Automatically focus on this element when it enters the DOM
  const headingRef = useRef<HTMLParagraphElement>(null);
  useEffect(() => {
    if (autoFocus) {
      headingRef.current?.focus();
    }
  });

  return (
    <Message variant="warning">
      <Message.Title ref={headingRef}>{heading}</Message.Title>
      <Message.Description>
        <UnorderedList size="small">
          {errors.map((error) => (
            <li key={error.message}>
              <Link size="small" href={error.anchor}>
                {error.message}
              </Link>
            </li>
          ))}
        </UnorderedList>
      </Message.Description>
    </Message>
  );
}
