import * as React from "react";
import { clsx } from "clsx";
import { t } from "@postenbring/hedwig-css/typed-classname.mjs";
import { warnForStyleOverridesAndRender } from "../utils";

export interface BadgeProps
  extends Omit<React.AnchorHTMLAttributes<HTMLSpanElement>, "className" | "style"> {
  /**
   * Font size of the badge
   */
  size?: "small" | "smaller";

  children: React.ReactNode;
}

function BaseBadge({
  children,
  variant,
  size = "small",
  ...rest
}: BadgeProps & { variant: "primary" | "dark" | "white" | "warning" }) {
  return warnForStyleOverridesAndRender(
    rest,
    <span className={clsx(t("hds-badge"), t(`hds-badge--${size}`), t(`hds-badge--${variant}`))}>
      {children}
    </span>,
  );
}

BaseBadge.displayName = "BaseBadge";

export function Badge(props: BadgeProps) {
  return <BaseBadge {...props} variant="primary" />;
}

Badge.displayName = "Badge";

export function DarkBadge(props: BadgeProps) {
  return <BaseBadge {...props} variant="dark" />;
}

DarkBadge.displayName = "DarkBadge";

export function WhiteBadge(props: BadgeProps) {
  return <BaseBadge {...props} variant="white" />;
}

WhiteBadge.displayName = "WhiteBadge";

export function WarningBadge(props: BadgeProps) {
  return <BaseBadge {...props} variant="warning" />;
}

WarningBadge.displayName = "WarningBadge";
