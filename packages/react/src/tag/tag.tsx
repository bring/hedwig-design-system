import { clsx } from "@postenbring/hedwig-css/typed-classname";
import { Slot } from "@radix-ui/react-slot";
import { forwardRef } from "react";

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;

  /**
   * Color of the tag. Combines the theme color and semantic variant.
   *
   * When omitted, the color is inherited from the parent(s).
   */
  "data-color"?: "posten" | "bring" | "neutral" | "info" | "success" | "warning" | "error";

  /**
   * Size of the tag
   *
   * @default "default"
   */
  size?: "small" | "default";

  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   *
   * @default false
   */
  asChild?: boolean;
}

/**
 * Tags are used to label, categorize or organize items using keywords to describe them.
 *
 * @example
 *
 * ```tsx
 * <Tag data-color="info">Info</Tag>
 * ```
 *
 */
export const Tag = forwardRef<HTMLSpanElement, TagProps>(
  (
    { "data-color": color = "neutral", children, asChild, size = "default", className, ...rest },
    ref,
  ) => {
    const Component = asChild ? Slot : "span";
    return (
      <Component
        data-color={color}
        ref={ref}
        className={clsx("hds-tag", { "hds-tag--small": size === "small" }, className as undefined)}
        {...rest}
      >
        {children}
      </Component>
    );
  },
);
Tag.displayName = "Tag";
