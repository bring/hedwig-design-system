import * as React from "react";
import { clsx } from "clsx";
import { t } from "@postenbring/hedwig-css/typed-classname/index.mjs";

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
  return (
    <a
      className={clsx(
        t("hds-link"),
        variant !== "underline" && t(`hds-link--${variant}`),
        size !== "medium" && t(`hds-link--${size}`),
      )}
      ref={anchorRef}
      {...rest}
    >
      {children}
    </a>
  );
}

Link.displayName = "Link";
