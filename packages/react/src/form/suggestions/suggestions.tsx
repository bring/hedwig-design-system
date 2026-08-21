import { forwardRef } from "react";
import type { HTMLAttributes } from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname";
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

export type SuggestionProps = SuggestionsProps;

const SuggestionsItem = forwardRef<HTMLLIElement, SuggestionsItemProps>(
  ({ className, ...rest }, ref) => (
    <li className={clsx("hds-suggestions-item", className as undefined)} ref={ref} {...rest} />
  ),
);

/**
 * A list of suggestions for the user while searching
 *
 * @example
 * ```tsx
 * <Suggestions>
 *  <Suggestions.Item>
 *   <a href="/">Albania</a>
 *  </Suggestions.Item>
 *  <Suggestions.Item>
 *   <a href="/">Algeria</a>
 *  </Suggestions.Item>
 *  <Suggestions.Item>
 *   <a href="/">Nepal</a>
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
  Wrapper: typeof SuggestionsWrapper;
};

Suggestions.displayName = "Suggestions";
SuggestionsItem.displayName = "Suggestions.Item";
Suggestions.Item = SuggestionsItem;
Suggestions.Wrapper = SuggestionsWrapper;
