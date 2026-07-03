import { forwardRef } from "react";
import type { HTMLAttributes } from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname";

export interface SuggestionProps extends HTMLAttributes<HTMLUListElement> {
  /**
   * Sets the size of the items
   *
   * @default "default"
   */
  size?: "default" | "small";
}

export const Suggestions = forwardRef<HTMLUListElement, SuggestionProps>(
  ({ className, size = "default", ...rest }, ref) => {
    return (
      <ul
        className={clsx(
          "hds-suggestions",
          size !== "default" && `hds-suggestions--${size}`,
          className as undefined,
        )}
        ref={ref}
        {...rest}
      />
    );
  },
);

Suggestions.displayName = "Suggestions";
