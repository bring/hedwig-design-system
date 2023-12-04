import type { HTMLAttributes } from "react";
import * as React from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname/index.mjs";

export interface ListProps extends HTMLAttributes<HTMLOListElement | HTMLUListElement> {
  children: React.ReactElement<HTMLLIElement> | React.ReactElement<HTMLLIElement>[];
  /**
   * Inherit list styles or do not show these
   */
  listStyle?: "inherit" | "no-bullets";
  /**
   * Sets the size of the items (font)
   */
  size?: "small" | "medium" | "large";
}

function BaseList({
  as: ListTag = "ul",
  children,
  listStyle = "inherit",
  size = "medium",
  className,
  ...rest
}: ListProps & { as?: "ul" | "ol" }) {
  return (
    <ListTag
      className={clsx(
        "hds-list",
        `hds-list--${size}`,
        {
          "hds-list--no-bullets": listStyle === "no-bullets",
        },
        className as undefined,
      )}
      {...rest}
    >
      {children}
    </ListTag>
  );
}

export function UnorderedList(props: ListProps) {
  return (
    <BaseList as="ul" {...props}>
      {props.children}
    </BaseList>
  );
}

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
