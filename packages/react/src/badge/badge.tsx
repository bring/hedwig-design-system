import { clsx } from "@postenbring/hedwig-css/typed-classname";
import { Slot } from "@radix-ui/react-slot";
import { forwardRef } from "react";

export interface BadgeProps extends React.AnchorHTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;

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

const Badge = forwardRef<
  HTMLSpanElement,
  BadgeProps & { variant: "lighter" | "dark" | "white" | "warning" }
>(({ children, asChild, variant, size = "small", className, ...rest }, ref) => {
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
});
Badge.displayName = "Badge";

export const LighterBadge = forwardRef<HTMLSpanElement, BadgeProps>((props, ref) => {
  return <Badge {...props} ref={ref} variant="lighter" />;
});
LighterBadge.displayName = "LighterBadge";

export const DarkBadge = forwardRef<HTMLSpanElement, BadgeProps>((props, ref) => {
  return <Badge {...props} ref={ref} variant="dark" />;
});
DarkBadge.displayName = "DarkBadge";

export const WhiteBadge = forwardRef<HTMLSpanElement, BadgeProps>((props, ref) => {
  return <Badge {...props} ref={ref} variant="white" />;
});
WhiteBadge.displayName = "WhiteBadge";

export const WarningBadge = forwardRef<HTMLSpanElement, BadgeProps>((props, ref) => {
  return <Badge {...props} ref={ref} variant="warning" />;
});
WarningBadge.displayName = "WarningBadge";
