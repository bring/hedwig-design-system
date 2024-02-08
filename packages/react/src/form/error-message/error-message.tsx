import { clsx } from "@postenbring/hedwig-css/typed-classname/index.mjs";
import type { ReactNode } from "react";

export interface ErrorMessageProps {
  children: ReactNode;
  id: string;
  className?: string;

  // We are considering to have aria-live="polite" on field error messages by default.
  _unstableAriaLiveOnErrorMessage?: boolean;
}

export function ErrorMessage({
  children,
  id,
  className,
  _unstableAriaLiveOnErrorMessage,
}: ErrorMessageProps) {
  return (
    <div
      {...(_unstableAriaLiveOnErrorMessage && {
        "aria-live": "polite",
        "aria-relevant": "additions removals",
      })}
      className={clsx("hds-error-message", className as undefined)}
      id={id}
    >
      {children}
    </div>
  );
}
