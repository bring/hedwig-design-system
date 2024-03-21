import { clsx } from "@postenbring/hedwig-css/typed-classname";
import type { ReactNode } from "react";

export interface ErrorMessageProps {
  children: ReactNode;
  id: string;
  className?: string;
}

export function ErrorMessage({ children, id, className }: ErrorMessageProps) {
  return (
    <div
      aria-live="assertive"
      className={clsx("hds-error-message", className as undefined)}
      id={id}
    >
      {children}
    </div>
  );
}
