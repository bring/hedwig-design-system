import * as React from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname/index.mjs";
import type { ListProps } from "./list";
import { UnorderedList } from "./list";

export interface LinkListProps extends Omit<ListProps, "listStyle"> {
  children?: React.ReactElement<HTMLLIElement> | React.ReactElement<HTMLLIElement>[];
}

export function LinkList({ className, ...rest }: LinkListProps) {
  return (
    <UnorderedList
      className={clsx("hds-list--link-list", className as undefined)}
      listStyle="no-bullets"
      {...rest}
    />
  );
}

LinkList.displayName = "LinkList";
