import { clsx } from "@postenbring/hedwig-css/typed-classname";
import { forwardRef } from "react";
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
export const LinkList = forwardRef<HTMLUListElement, LinkListProps>(
  ({ className, ...rest }, ref) => {
    return (
      <UnorderedList
        ref={ref}
        className={clsx("hds-list--link-list", className as undefined)}
        {...rest}
      />
    );
  },
);
LinkList.displayName = "LinkList";
