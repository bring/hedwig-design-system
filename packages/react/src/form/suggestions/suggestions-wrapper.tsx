import { forwardRef } from "react";
import type { HTMLAttributes } from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname";

export type SuggestionsWrapperProps = HTMLAttributes<HTMLDivElement>;

/**
 * A wrapper for search suggestions.
 * Intended to contain Input and Suggestions.
 *
 * @example
 * ```tsx
 * <Suggestions.Wrapper>
 *   <Input type="search" aria-label="Search content" />
 *   <Suggestions>
 *     <li>
 *       <a href="/">Albania</a>
 *     </li>
 *   </Suggestions>
 * </Suggestions.Wrapper>
 * ```
 */
export const SuggestionsWrapper = forwardRef<HTMLDivElement, SuggestionsWrapperProps>(
  ({ className, ...rest }, ref) => (
    <div className={clsx("hds-suggestions-wrapper", className as undefined)} ref={ref} {...rest} />
  ),
);

SuggestionsWrapper.displayName = "Suggestions.Wrapper";
