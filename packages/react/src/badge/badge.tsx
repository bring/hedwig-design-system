import * as React from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname/index.mjs";

export interface BadgeProps extends React.AnchorHTMLAttributes<HTMLSpanElement> {
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
  className,
  ...rest
}: BadgeProps & { variant: "lighter" | "dark" | "white" | "warning" }) {
  return (
    <span
      className={clsx(
        "hds-badge",
        `hds-badge--${size}`,
        `hds-badge--${variant}`,
        className as undefined,
      )}
      {...rest}
    >
      {children}
    </span>
  );
}

BaseBadge.displayName = "BaseBadge";

export function Badge(props: BadgeProps) {
  return <BaseBadge {...props} variant="lighter" />;
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
