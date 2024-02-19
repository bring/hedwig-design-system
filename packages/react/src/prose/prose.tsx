import React, { forwardRef } from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname/index.mjs";
import type { OverridableComponent } from "../utils";

export interface ProseProps {
  children: React.ReactNode;
  size?: "default" | "small";
  darkmode?: boolean;
}

/**
 * ## 🚨 WORK IN PROGRESS 🚨
 *
 * ### TODO: Choose a name
 *
 * - WYSIWYG - Currently used in hedwig legacy
 * - Prose - [What tailwind calls it](https://tailwindcss.com/docs/typography-plugin)
 * - RichText
 * - Content
 * - DynamicContent
 *
 * Prose is a component for displaying dynamic content that you want to apply hedwig styling to.
 * the styling depends on the semantic html elements you use inside the component.
 *
 * ```tsx
 * <Prose>
 *   <h1>Heading 1</h1>
 *   <h2>Heading 2</h2>
 *   <a href="https://www.postenbring.no">Postenbring</a>
 *   <ul>
 *    <li>Hei</li>
 *    <li>Hallo</li>
 *    <li>Hello</li>
 *   </ul>
 * </Prose>
 * ```
 */
export const Prose: OverridableComponent<ProseProps, HTMLDivElement> = forwardRef(
  ({ as: Component = "div", children, size, darkmode = false, className, ...rest }, ref) => {
    return (
      <Component
        className={clsx(
          `hds-prose`,
          size === "small" && "hds-prose--small",
          darkmode && "hds-prose--darkmode",
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
Prose.displayName = "Prose";
