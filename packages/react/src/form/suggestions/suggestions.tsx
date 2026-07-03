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

/**
 * A list of suggestions for the user while searching
 *
 * @example
 * ```tsx
 * <Suggestions>
 *  <li>
 *   <a href="/">Albania</a>
 *  </li>
 *  <li>
 *   <a href="/">Algeria</a>
 *  </li>
 *  <li>
 *   <a href="/">Nepal</a>
 *  </li>
 * </Suggestions>
 * ```
 */
export const Suggestions = forwardRef<HTMLUListElement, SuggestionProps>(
  ({ size = "default", className, ...rest }, ref) => {
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
