import { forwardRef } from "react";
import type { HTMLAttributes } from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname";

export interface SearchWrapperProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const SearchWrapper = forwardRef<HTMLDivElement, SearchWrapperProps>(
  ({ className, ...rest }, ref) => (
    <div className={clsx("hds-search-wrapper", className as undefined)} ref={ref} {...rest} />
  ),
);

SearchWrapper.displayName = "SearchWrapper";
