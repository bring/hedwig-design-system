import { forwardRef } from "react";
import type { ReactNode, CSSProperties } from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname";

export interface SearchWrapperProps {
  id?: string;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}

export const SearchWrapper = forwardRef<HTMLDivElement, SearchWrapperProps>(function SearchWrapper(
  { id, className, style, children, ...rest },
  ref,
) {
  return (
    <div
      id={id}
      className={clsx("hds-search-wrapper", className as undefined)}
      ref={ref}
      style={style}
      {...rest}
    >
      {children}
    </div>
  );
});

SearchWrapper.displayName = "SearchWrapper";
