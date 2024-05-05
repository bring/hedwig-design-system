/* eslint-disable @typescript-eslint/no-unsafe-assignment -- Typings for the differnt html elements */
/* eslint-disable @typescript-eslint/no-explicit-any -- Typings for the differnt html elements */

import React, { forwardRef } from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname";
import { Slot } from "@radix-ui/react-slot";

type HeadingProps =
  | {
      variant: "h1-display" | "h1" | "h2" | "h3" | "h3-title";
      asChild: true;
      as?: never;
    }
  | {
      variant: "h1-display" | "h1" | "h2" | "h3" | "h3-title";
      as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "div" | "label" | "p";
      asChild?: never;
    };

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

export type TextProps = {
  children: React.ReactNode;

  /**
   * The font-size of the component. By default it's `fluid` which means it's smaller on mobile and larger on desktop.
   *
   * But you can lock it to either the min or the max size.
   *
   * @default "fluid"
   */
  size?: "min" | "max" | "fluid";

  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   *
   * @default false
   */
  asChild?: boolean;

  /**
   * Convienence prop to change the rendered element.
   *
   * Use {@link TextProps.asChild} if you need more control of the rendered element.
   */
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "div" | "label" | "p";

  /**
   * 🚧 Experimental spacing
   */
  _unstableSpacing?: boolean;
} & (HeadingProps | ParagraphProps) &
  React.HTMLAttributes<HTMLParagraphElement | HTMLHeadingElement>;

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
 * If the variant is `h1-display`, `h1`, `h2`, `h3`, or `h3-title` the `as` or `asChild` prop is required.
 *
 * This is to force the consumer to consider which semantic html element to use. E.g. `<h1>` or `<h2>`
 *
 * @example
 * ```tsx
 * <Text variant="h1-display" as="h1">Hello world</Text>
 * <Text variant="body">
 *   This is a body text
 * </Text>
 * ```
 */
export const Text = forwardRef<HTMLParagraphElement | HTMLHeadingElement, TextProps>(
  (
    {
      as: Tag,
      asChild,
      variant = "body",
      size = "fluid",
      _unstableSpacing: spacing,
      children,
      className,
      ...rest
    },
    ref,
  ) => {
    const Component = asChild ? Slot : Tag ?? defaultHTMLTag[variant];
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
        ref={ref as any}
        {...(rest as any)}
      >
        {children}
      </Component>
    );
  },
);
Text.displayName = "Text";
