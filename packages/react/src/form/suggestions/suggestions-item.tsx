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

/**
 * A single structural item in a suggestions list.
 *
 * Use `Suggestions.ItemAction` as the interactive child of each item.
 *
 * @example
 * ```tsx
 * <Suggestions.Item>
 *   <Suggestions.ItemAction href="/results">
 *     View results
 *   </Suggestions.ItemAction>
 * </Suggestions.Item>
 * ```
 */
export const SuggestionsItem = forwardRef<HTMLLIElement, SuggestionsItemProps>(
  ({ className, ...rest }, ref) => (
    <li className={clsx("hds-suggestions-item", className as undefined)} ref={ref} {...rest} />
  ),
);

SuggestionsItem.displayName = "Suggestions.Item";

/**
 * The interactive action within a suggestions item.
 *
 * Renders an anchor by default and applies the `hds-suggestions-item__action`
 * class. Use `asChild` to render another interactive element, such as a button
 * or router link, while preserving the action styling.
 *
 * @example
 * ```tsx
 * <Suggestions.ItemAction href="/results">
 *   View results
 * </Suggestions.ItemAction>
 *
 * <Suggestions.ItemAction asChild>
 *   <button type="button">Select result</button>
 * </Suggestions.ItemAction>
 * ```
 */
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
