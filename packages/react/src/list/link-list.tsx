import * as React from "react";
import type { ListProps } from "./list";
import { UnorderedList } from "./list";

export interface LinkListProps extends Omit<ListProps, "listStyle"> {
  children: React.ReactElement<HTMLLIElement> | React.ReactElement<HTMLLIElement>[];
}

export function LinkList(props: LinkListProps) {
  return (
    <UnorderedList listStyle="no-bullets" {...props}>
      {props.children}
    </UnorderedList>
  );
}

LinkList.displayName = "LinkList";
