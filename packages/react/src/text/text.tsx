import React, { forwardRef } from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname/index.mjs";
import type { OverridableComponent } from "../utils";

interface HeadingProps {
  variant: "h1-display" | "h1" | "h2" | "h3" | "h3-title";
  as: React.ElementType;
}
interface ParagraphProps {
  variant?:
    | "body"
    | "body-title"
    | "body-small"
    | "body-small-title"
    | "technical"
    | "technical-title"
    | "caption"
    | "caption-title";
}

export type TextProps = (HeadingProps | ParagraphProps) & {
  children: React.ReactNode;

  /**
   * The font-size of the component. By default it's `fluid` which means it's smaller on mobile and larger on desktop.
   *
   * But you can lock it to either the min or the max size.
   */
  size?: "min" | "max" | "fluid";

  /**
   * 🚧 Experimental spacing
   */
  _unstableSpacing?: boolean;
};

const defaultHTMLTag: Record<NonNullable<TextProps["variant"]>, `h${1 | 2 | 3}` | "p"> = {
  "h1-display": "h1",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  "h3-title": "h3",
  body: "p",
  "body-title": "p",
  "body-small": "p",
  "body-small-title": "p",
  technical: "p",
  "technical-title": "p",
  caption: "p",
  "caption-title": "p",
};

/**
 * Text component
 *
 * If the variant is `h1-display`, `h1`, `h2`, `h3`, or `h3-title` the `as` prop is required.
 *
 * This to force the consumer to consider which semantic html element to use. E.g. `<h1>` or `<h2>`
 *
 * @example
 * ```tsx
 * <Text variant="h1-display" as="h1">Hello world</Text>
 * <Text variant="body">
 *   This is a body text
 * </Text>
 * ```
 */
export const Text: OverridableComponent<TextProps, HTMLDivElement> = forwardRef(
  (
    {
      as,
      variant = "body",
      size = "fluid",
      _unstableSpacing: spacing,
      children,
      className,
      ...rest
    },
    ref,
  ) => {
    const Component = as ?? defaultHTMLTag[variant];
    const sizeModifier =
      size !== "fluid" && variant !== "caption" && variant !== "caption-title" && size;
    return (
      <Component
        className={clsx(
          `hds-text-${variant}`,
          sizeModifier && `hds-text--${sizeModifier}`,
          spacing && "hds-text--spacing",
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
Text.displayName = "Text";
