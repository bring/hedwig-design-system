import * as React from "react";
import { clsx } from "clsx";
import { t } from "@postenbring/hedwig-css/typed-classname.mjs";
import { warnForStyleOverrides } from "../utils";

export interface LinkProps
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
