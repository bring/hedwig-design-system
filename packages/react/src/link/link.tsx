import * as React from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname/index.mjs";
import { forwardRef } from "react";
import type { OverridableComponent } from "../utils";

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * The visual style of the link
   */
  variant?: "underline" | "solid" | "inverted" | "no-underline";

  /**
   * Font size of the link
   */
  size?: "small" | "medium" | "large";

  children: React.ReactNode;
  anchorRef?: React.ForwardedRef<HTMLAnchorElement>;
}

export const Link: OverridableComponent<LinkProps, HTMLAnchorElement> = forwardRef(
  (
    { as: Component = "a", children, variant = "underline", size = "medium", className, ...rest },
    ref,
  ) => {
    return (
      <Component
        className={clsx(
          "hds-link",
          variant !== "underline" && `hds-link--${variant}`,
          size !== "medium" && `hds-link--${size}`,
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
Link.displayName = "Link";
