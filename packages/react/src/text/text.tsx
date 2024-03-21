import React, { forwardRef } from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname/index.mjs";
import type { OverridableComponent } from "../utils";

export interface TypographyProps {
  children: React.ReactNode;
  variant?:
    | "h1-display"
    | "h1"
    | "h2"
    | "h3"
    | "h3-title"
    | "body"
    | "body-title"
    | "body-small"
    | "body-small-title"
    | "technical"
    | "technical-title"
    | "caption"
    | "caption-title";
  size?: "min" | "max" | "fluid";

  /**
   * 🚧 Experimental spacing
   */
  _unstableSpacing?: boolean;
}

const defaultHTMLTag: Record<NonNullable<TypographyProps["variant"]>, `h${1 | 2 | 3}` | "p"> = {
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
 * ## 🚨 WORK IN PROGRESS 🚨
 */
export const Text: OverridableComponent<TypographyProps, HTMLDivElement> = forwardRef(
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
Text.displayName = "Typography";
