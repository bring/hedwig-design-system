import React, { forwardRef } from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname/index.mjs";
import type { OverridableComponent } from "../utils";

export interface StyledHtmlProps {
  children?: React.ReactNode;
  size?: "default" | "small";
  darkmode?: boolean;
}

/**
 * A component for displaying dynamic content that you want to apply hedwig styling to.
 * the styling depends on the semantic html elements you use inside the component.
 *
 * Useful when you have dynamic content that you want styled with hedwig, like content from a CMS.
 *
 * Previously known as `hw-wysiwyg` in hedwig legacy. In tailwind this kind of component it is known as `prose`.
 *
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
export const StyledHtml: OverridableComponent<StyledHtmlProps, HTMLDivElement> = forwardRef(
  ({ as: Component = "div", children, size, darkmode = false, className, ...rest }, ref) => {
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
StyledHtml.displayName = "Prose";
