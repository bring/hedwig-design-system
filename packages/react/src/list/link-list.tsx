import * as React from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname";
import type { ListProps } from "./list";
import { UnorderedList } from "./list";

export interface LinkListProps extends Omit<ListProps, "listStyle"> {
  children?: React.ReactElement<HTMLLIElement> | React.ReactElement<HTMLLIElement>[];
}

/**
 * Show a list of links
 *
 * For other list types use `UnorderedList` and `OrderedList`, or use your own list component using the semantic `ul` and `ol` tags.
 */
export function LinkList({ className, ...rest }: LinkListProps) {
  return (
    <UnorderedList className={clsx("hds-list--link-list", className as undefined)} {...rest} />
  );
}

LinkList.displayName = "LinkList";
