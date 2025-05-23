import { forwardRef, type HTMLAttributes } from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname";

export interface ListProps extends HTMLAttributes<HTMLOListElement | HTMLUListElement> {
  /**
   * Sets the size of the items (font)
   *
   * @default "medium"
   */
  size?: "default" | "small" | "technical" | "medium" | "large";
}

/**
 * An unordered list of simple items, often text. You can nest other lists inside this component.
 *
 * If you have other list needs, you can build your own using the semantic `ul` and `ol` tags.
 *
 * @example
 * ```tsx
 * <UnorderedList>
 *  <li>Item 1</li>
 *  <li>Item 2</li>
 *  <li>Item 3</li>
 * </UnorderedList>
 * ```
 */
export const UnorderedList = forwardRef<HTMLUListElement, ListProps>(
  ({ size = "default", className, ...rest }, ref) => {
    return (
      <ul
        ref={ref}
        className={clsx(
          "hds-list",
          size !== "default" && `hds-list--${size}`,
          className as undefined,
        )}
        {...rest}
      />
    );
  },
);
UnorderedList.displayName = "UnorderedList";

/**
 * An ordered list of simple items
 *
 * If you have other list needs, you can build your own using the semantic `ul` and `ol` tags.
 *
 * @example
 * ```tsx
 * <OrderedList>
 *  <li>Item 1</li>
 *  <li>Item 2</li>
 *  <li>Item 3</li>
 * </OrderedList>
 * ```
 */
export const OrderedList = forwardRef<HTMLOListElement, ListProps>(
  ({ size = "medium", className, ...rest }, ref) => {
    return (
      <ol
        ref={ref}
        className={clsx(
          "hds-list",
          size !== "default" && `hds-list--${size}`,
          className as undefined,
        )}
        {...rest}
      />
    );
  },
);
OrderedList.displayName = "OrderedList";
