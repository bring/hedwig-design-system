import { clsx } from "@postenbring/hedwig-css/typed-classname";
import { Slot } from "@radix-ui/react-slot";
import { forwardRef } from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;

  /**
   * Color of the badge
   *
   * @deprecated
   * @default "lighter"
   * "lighter", "darker", and "white" are deprecated and will be removed in a future release.
   * Use data-color "neutral", "info", "success", "warning", or "error" instead.
   */
  variant?: /** @deprecated */
  | "lighter"
    /** @deprecated */
    | "darker"
    /** @deprecated */
    | "white"
    /** @deprecated */
    | "warning";

  "data-color"?: "neutral" | "info" | "success" | "warning" | "error";

  /**
   * Font size of the badge
   *
   * @default "small"
   */
  size?: "small" | "smaller";

  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   *
   * @default false
   */
  asChild?: boolean;
}

/**
 * Badges are used to label, categorize or organize items using keywords to describe them.
 *
 * @example
 *
 * ```tsx
 * <Badge variant="info">Info</Badge>
 * ```
 *
 */

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      "data-color": color = "",
      children,
      asChild,
      variant = "",
      size = "small",
      className,
      ...rest
    },
    ref,
  ) => {
    const Component = asChild ? Slot : "span";
    return (
      <Component
        {...(variant === "warning" || variant === "lighter" || variant === "darker"
          ? { "data-color-scheme": "light" }
          : {})}
        data-color={color}
        ref={ref}
        className={clsx(
          "hds-badge",
          `hds-badge--${size}`,
          { "hds-badge--lighter": variant === "lighter" },
          { "hds-badge--darker": variant === "darker" },
          { "hds-badge--white": variant === "white" },
          className as undefined,
        )}
        {...rest}
      >
        {children}
      </Component>
    );
  },
);
Badge.displayName = "Badge";
