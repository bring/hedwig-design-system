import { clsx } from "@postenbring/hedwig-css/typed-classname";
import { Slot } from "@radix-ui/react-slot";
import { forwardRef } from "react";

export interface BlockquoteProps extends React.HTMLAttributes<HTMLQuoteElement> {
  children?: React.ReactNode;

  /**
   * The quote style
   *
   * @default "default"
   */
  variant?: "default" | "norwegian";

  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   *
   * @default false
   */
  asChild?: boolean;
}

/**
 * @example
 *
 * ```tsx
 * <Blockquote>
 *   <p>... but they&rsquo;ll never take our freedom!</p>
 *   <footer>William Wallace</footer>
 * </Blockquote>
 * ```
 *
 */
export const Blockquote = forwardRef<HTMLQuoteElement, BlockquoteProps>(
  ({ children, asChild, className, variant, ...rest }, ref) => {
    const Component = asChild ? Slot : "blockquote";
    return (
      <Component
        ref={ref}
        className={clsx(
          "hds-blockquote",
          variant === "norwegian" && `hds-blockquote--norwegian`,
          className as undefined,
        )}
        {...rest}
      >
        {children}
      </Component>
    );
  },
);
Blockquote.displayName = "Blockquote";
