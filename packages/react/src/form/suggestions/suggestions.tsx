import { forwardRef } from "react";
import type { AnchorHTMLAttributes, HTMLAttributes, Ref } from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname";
import { Slot } from "@radix-ui/react-slot";
import { SuggestionsWrapper } from "./suggestions-wrapper";

export interface SuggestionsProps extends HTMLAttributes<HTMLUListElement> {
  /**
   * Change the rendered list element.
   *
   * @default "ul"
   */
  as?: "ul" | "ol";
  /**
   * Sets the size of the items
   *
   * @default "default"
   */
  size?: "default" | "small";
}

export type SuggestionsItemProps = HTMLAttributes<HTMLLIElement>;

export interface SuggestionsItemActionProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * Use the element passed as a child, merging its props and behavior.
   *
   * @default false
   */
  asChild?: boolean;
}

export type SuggestionProps = SuggestionsProps;

const SuggestionsItem = forwardRef<HTMLLIElement, SuggestionsItemProps>(
  ({ className, ...rest }, ref) => (
    <li className={clsx("hds-suggestions-item", className as undefined)} ref={ref} {...rest} />
  ),
);

const SuggestionsItemAction = forwardRef<HTMLElement, SuggestionsItemActionProps>(
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

/**
 * A list of suggestions for the user while searching
 *
 * @example
 * ```tsx
 * <Suggestions>
 *  <Suggestions.Item>
 *   <Suggestions.ItemAction href="/">
 *     Albania
 *   </Suggestions.ItemAction>
 *  </Suggestions.Item>
 *  <Suggestions.Item>
 *   <Suggestions.ItemAction asChild>
 *    <button type="button">Select Albania</button>
 *   </Suggestions.ItemAction>
 *  </Suggestions.Item>
 * </Suggestions>
 * ```
 *
 * Use `as="ol"` for ordered suggestions:
 * ```tsx
 * <Suggestions as="ol">
 *   <Suggestions.Item>
 *     <Suggestions.ItemAction href="/">First result</Suggestions.ItemAction>
 *   </Suggestions.Item>
 * </Suggestions>
 * ```
 */
export const Suggestions = forwardRef<HTMLUListElement | HTMLOListElement, SuggestionProps>(
  ({ as: Tag = "ul", size = "default", className, ...rest }, ref) => (
    <Tag
      className={clsx(
        "hds-suggestions",
        size !== "default" && `hds-suggestions--${size}`,
        className as undefined,
      )}
      ref={ref as Ref<HTMLUListElement & HTMLOListElement>}
      {...rest}
    />
  ),
) as SuggestionsType;

type SuggestionsType = ReturnType<
  typeof forwardRef<HTMLUListElement | HTMLOListElement, SuggestionProps>
> & {
  Item: typeof SuggestionsItem;
  ItemAction: typeof SuggestionsItemAction;
  Wrapper: typeof SuggestionsWrapper;
};

Suggestions.displayName = "Suggestions";
SuggestionsItem.displayName = "Suggestions.Item";
SuggestionsItemAction.displayName = "Suggestions.ItemAction";
Suggestions.Item = SuggestionsItem;
Suggestions.ItemAction = SuggestionsItemAction;
Suggestions.Wrapper = SuggestionsWrapper;
