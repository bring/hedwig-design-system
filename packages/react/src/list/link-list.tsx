import type { HTMLAttributes } from "react";
import * as React from "react";
import type { LinkProps } from "../link";
import type { ListProps, ListItemProps } from "./list";
import { UnorderedList } from "./list";

export interface LinkListItemProps
  extends Omit<React.HTMLAttributes<HTMLLIElement>, "className" | "style"> {
  children: React.ReactElement<LinkProps>;
}

export interface LinkListProps
  extends Omit<HTMLAttributes<HTMLOListElement | HTMLUListElement>, "className" | "style">,
    Omit<ListProps, "listStyle"> {
  children: React.ReactElement<LinkListItemProps> | React.ReactElement<LinkListItemProps>[];
}

export function LinkListItem({ children, ...rest }: ListItemProps) {
  return <li {...rest}>{children}</li>;
}

export function LinkList(props: LinkListProps) {
  return (
    <UnorderedList listStyle="no-bullets" {...props}>
      {props.children}
    </UnorderedList>
  );
}

LinkList.displayName = "LinkList";
LinkListItem.displayName = "LinkListItem";
