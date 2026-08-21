import { forwardRef } from "react";
import type { HTMLAttributes } from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname";

export interface SuggestionsWrapperProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Change the rendered element for the suggestions wrapper.
   *
   * @default "div"
   */
  as?: "section" | "div" | "article" | "aside";
}

/**
 * A wrapper for search suggestions.
 * Intended to contain a SearchWrapper and Suggestions.
 *
 * @example
 * ```tsx
 * <Suggestions.Wrapper>
 *   <SearchWrapper>
 *     <Input type="search" aria-label="Search content" />
 *     <Button>Search</Button>
 *     <Button icon aria-label="Clear search">
 *       <XmarkIcon />
 *     </Button>
 *   </SearchWrapper>
 *   <Suggestions>
 *     <Suggestions.Item>
 *       <Suggestions.ItemAction href="/">Albania</Suggestions.ItemAction>
 *     </Suggestions.Item>
 *   </Suggestions>
 * </Suggestions.Wrapper>
 * ```
 *
 * Use `as` when the wrapper needs a different semantic element:
 * ```tsx
 * <Suggestions.Wrapper as="section">
 *   <SearchWrapper>...</SearchWrapper>
 *   <Suggestions>...</Suggestions>
 * </Suggestions.Wrapper>
 * ```
 */
export const SuggestionsWrapper = forwardRef<HTMLDivElement, SuggestionsWrapperProps>(
  ({ as: Tag = "div", className, ...rest }, ref) => (
    <Tag className={clsx("hds-suggestions-wrapper", className as undefined)} ref={ref} {...rest} />
  ),
);

SuggestionsWrapper.displayName = "Suggestions.Wrapper";
