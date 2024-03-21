import type { HTMLAttributes } from "react";
import * as React from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname";

export interface ListProps extends HTMLAttributes<HTMLOListElement | HTMLUListElement> {
  children?: React.ReactElement<HTMLLIElement> | React.ReactElement<HTMLLIElement>[];
  /**
   * Sets the size of the items (font)
   */
  size?: "small" | "medium" | "large";
}

function BaseList({
  as: ListTag = "ul",
  children,
  size = "medium",
  className,
  ...rest
}: ListProps & { as?: "ul" | "ol" }) {
  return (
    <ListTag className={clsx("hds-list", `hds-list--${size}`, className as undefined)} {...rest}>
      {children}
    </ListTag>
  );
}

/**
 * An unordered list of simple items, often text. You can nest other lists inside this component.
 *
 * If you have other list needs build your own using the semantic `ul` and `ol` tags.
 */
export function UnorderedList(props: ListProps) {
  return (
    <BaseList as="ul" {...props}>
      {props.children}
    </BaseList>
  );
}

/**
 * An ordered list of simple items
 *
 * If you have other list needs build your own using the semantic `ul` and `ol` tags.
 */
export function OrderedList(props: ListProps) {
  return (
    <BaseList as="ol" {...props}>
      {props.children}
    </BaseList>
  );
}

BaseList.displayName = "BaseList";
OrderedList.displayName = "OrderedList";
UnorderedList.displayName = "UnorderedList";
