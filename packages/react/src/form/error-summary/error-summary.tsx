import { type RefObject, useEffect, useRef } from "react";
import { Message } from "../../message";
import { UnorderedList } from "../../list";
import { Link } from "../../link";

export interface ErrorSummaryError {
  message: string;
  ref?: RefObject<HTMLInputElement>; // TODO: Is input-element okay here? Probably, since error summaries usually
}

export interface ErrorSummaryProps {
  heading: string;
  errors: ErrorSummaryError[];
  autoFocus?: boolean;
  id?: string;
  className?: string;
}

export function ErrorSummary({ heading, autoFocus, errors }: ErrorSummaryProps) {
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
              <Link
                size="small"
                onClick={(event) => {
                  event.preventDefault();
                  error.ref?.current?.focus();
                }}
              >
                {error.message}
              </Link>
            </li>
          ))}
        </UnorderedList>
      </Message.Description>
    </Message>
  );
}
