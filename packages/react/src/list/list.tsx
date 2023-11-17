import type { HTMLAttributes } from "react";
import * as React from "react";
import { clsx } from "clsx";
import { t } from "@postenbring/hedwig-css/typed-classname/index.mjs";
import { warnForStyleOverrides } from "../utils";

export interface ListItemProps
  extends Omit<React.HTMLAttributes<HTMLLIElement>, "className" | "style"> {
  children: React.ReactNode;
}

export interface ListProps
  extends Omit<HTMLAttributes<HTMLOListElement | HTMLUListElement>, "className" | "style"> {
  children: React.ReactElement<ListItemProps> | React.ReactElement<ListItemProps>[];
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
  ...rest
}: ListProps & { as?: "ul" | "ol" }) {
  warnForStyleOverrides(rest);
  return (
    <ListTag
      className={clsx(t("hds-list"), t(`hds-list--${size}`), {
        [t(`hds-list--style-hidden`)]: listStyle === "no-bullets",
      })}
      {...rest}
    >
      {children}
    </ListTag>
  );
}

export function ListItem({ children, ...rest }: ListItemProps) {
  warnForStyleOverrides(rest);
  return <li {...rest}>{children}</li>;
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

ListItem.displayName = "ListItem";
BaseList.displayName = "BaseList";
OrderedList.displayName = "UnorderedList";
UnorderedList.displayName = "UnorderedList";
