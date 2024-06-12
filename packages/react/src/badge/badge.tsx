import { clsx } from "@postenbring/hedwig-css/typed-classname";
import { Slot } from "@radix-ui/react-slot";
import { forwardRef } from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;

  /**
   * Color of the badge
   *
   * @default "lighter"
   */
  variant?: "lighter" | "darker" | "white" | "warning";

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
 * <Badge variant="darker">Darker</Badge>
 *
 */
export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ children, asChild, variant = "lighter", size = "small", className, ...rest }, ref) => {
    const Component = asChild ? Slot : "span";
    return (
      <Component
        ref={ref}
        className={clsx(
          "hds-badge",
          `hds-badge--${size}`,
          `hds-badge--${variant}`,
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
