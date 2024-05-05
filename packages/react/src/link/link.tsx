import * as React from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname";
import { forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";

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

  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   *
   * @default false
   */
  asChild?: boolean;
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ asChild, children, variant = "underline", size = "medium", className, ...rest }, ref) => {
    const Component = asChild ? Slot : "a";
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
