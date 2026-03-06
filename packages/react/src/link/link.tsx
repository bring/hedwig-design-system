import * as React from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname";
import { forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * The visual style of the link
   */
  variant?: "underline" | "solid" | "no-underline";

  /**
   * Font size of the link
   * @default "default"
   */
  size?: "default" | "small" | "large" | "technical";

  /**
   * Specify that there is an icon in the link.
   * `icon="leading"`: There is an icon before the text.
   * `icon="trailing"`: There is an icon after the text.
   *
   */
  icon?: "leading" | "trailing";

  children: React.ReactNode;

  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   *
   * @default false
   */
  asChild?: boolean;
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  (
    { asChild, children, variant = "underline", size = "default", icon, className, ...rest },
    ref,
  ) => {
    const Component = asChild ? Slot : "a";

    return (
      <Component
        className={clsx(
          "hds-link",
          variant !== "underline" && `hds-link--${variant}`,
          size !== "default" && `hds-link--${size}`,
          { "hds-link--trailing-icon": icon === "trailing" },
          { "hds-link--leading-icon": icon === "leading" },
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
