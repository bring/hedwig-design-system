import { forwardRef } from "react";
import type { ReactNode, CSSProperties } from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname";

export interface SuggestionProps {
  id?: string;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
  size?: "small" | "large" | undefined;
}

export const Suggestions = forwardRef<HTMLDivElement, SuggestionProps>(function Suggestions(
  { id, className, style, size, children, ...rest },
  //ref,
) {
  return (
    <ul
      id={id}
      className={clsx(
        "hds-suggestions",
        {
          [`hds-suggestions--${size}`]: size,
        },
        className as undefined,
      )}
      //ref={ref}
      style={style}
      {...rest}
    >
      {children}
    </ul>
  );
});

Suggestions.displayName = "Suggestions";
