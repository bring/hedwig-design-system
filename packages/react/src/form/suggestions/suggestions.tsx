import { forwardRef } from "react";
import type { AnchorHTMLAttributes, HTMLAttributes, Ref } from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname";
import { Slot } from "@radix-ui/react-slot";
import { SuggestionsWrapper } from "./suggestions-wrapper";

export interface SuggestionsProps extends HTMLAttributes<HTMLUListElement> {
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
 */
export const Suggestions = forwardRef<HTMLUListElement, SuggestionProps>(
  ({ size = "default", className, ...rest }, ref) => (
    <ul
      className={clsx(
        "hds-suggestions",
        size !== "default" && `hds-suggestions--${size}`,
        className as undefined,
      )}
      ref={ref}
      {...rest}
    />
  ),
) as SuggestionsType;

type SuggestionsType = ReturnType<typeof forwardRef<HTMLUListElement, SuggestionProps>> & {
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
