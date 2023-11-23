import * as React from "react";
import type { LinkProps } from "../link";
import type { ListItemProps, ListProps } from "./list";
import { UnorderedList } from "./list";

export interface LinkListItemProps extends React.HTMLAttributes<HTMLLIElement> {
  /**
   * Can contain Link-elements
   */
  children: React.ReactElement<LinkProps>;
}

export interface LinkListProps extends Omit<ListProps, "listStyle"> {
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
