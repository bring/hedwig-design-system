import { forwardRef } from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname";
import { Slot } from "@radix-ui/react-slot";

export interface StyledHtmlProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  size?: "default" | "small";
  darkmode?: boolean;

  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   *
   * @default false
   */
  asChild?: boolean;
}

/**
 * @example
 * ```tsx
 * <StyledHtml>
 *   <h1>Heading 1</h1>
 *   <h2>Heading 2</h2>
 *   <a href="https://www.postenbring.no">Postenbring</a>
 *   <ul>
 *    <li>Hei</li>
 *    <li>Hallo</li>
 *    <li>Hello</li>
 *   </ul>
 * </StyledHtml>
 * ```
 */
export const StyledHtml = forwardRef<HTMLDivElement, StyledHtmlProps>(
  ({ asChild, children, size, darkmode = false, className, ...rest }, ref) => {
    const Component = asChild ? Slot : "div";
    return (
      <Component
        className={clsx(
          `hds-styled-html`,
          size === "small" && "hds-styled-html--small",
          darkmode && "hds-styled-html--darkmode",
          className as undefined,
        )}
        ref={ref}
        {...rest}
      >
        {children}
      </Component>
    );
  },
);
StyledHtml.displayName = "StyledHtml";
