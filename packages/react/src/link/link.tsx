import * as React from "react";
import { clsx } from "clsx";
import { warnForStyleOverrides } from "../utils";

interface LinkProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "style"> {
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

/**
 * ## TODO
 *
 * - [ ] Handle button styling
 */
export function Link({
  children,
  variant = "underline",
  size = "medium",
  anchorRef,
  ...rest
}: LinkProps) {
  warnForStyleOverrides(rest);
  return (
    <a
      className={clsx("hds-link", {
        [`hds-link--${variant}`]: variant !== "underline",
        [`hds-link--${size}`]: size !== "medium",
      })}
      ref={anchorRef}
      {...rest}
    >
      {children}
    </a>
  );
}

Link.displayName = "Link";
