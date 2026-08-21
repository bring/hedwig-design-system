import { forwardRef } from "react";
import type { AnchorHTMLAttributes, HTMLAttributes, Ref } from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname";
import { Slot } from "@radix-ui/react-slot";

export type SuggestionsItemProps = HTMLAttributes<HTMLLIElement>;

export interface SuggestionsItemActionProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * Use the element passed as a child, merging its props and behavior.
   *
   * @default false
   */
  asChild?: boolean;
}

export const SuggestionsItem = forwardRef<HTMLLIElement, SuggestionsItemProps>(
  ({ className, ...rest }, ref) => (
    <li className={clsx("hds-suggestions-item", className as undefined)} ref={ref} {...rest} />
  ),
);

SuggestionsItem.displayName = "Suggestions.Item";

export const SuggestionsItemAction = forwardRef<HTMLElement, SuggestionsItemActionProps>(
  ({ asChild, className, ...rest }, ref) => {
    const Component = asChild ? Slot : "a";
    return (
      <Component
        className={clsx("hds-suggestions-item__action", className as undefined)}
        ref={ref as Ref<HTMLAnchorElement>}
        {...rest}
      />
    );
  },
);

SuggestionsItemAction.displayName = "Suggestions.ItemAction";
