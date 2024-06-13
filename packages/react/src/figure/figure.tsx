import { clsx } from "@postenbring/hedwig-css/typed-classname";
import { Slot } from "@radix-ui/react-slot";
import { forwardRef } from "react";

export interface FigureProps extends React.HTMLAttributes<HTMLQuoteElement> {
  children?: React.ReactNode;

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
 * <Figure>
 *   <img src="https://placedog.net/500/280" alt="A very good dog" />
 *   <figcaption>Dogs are the best</figcaption>
 * </Figure>
 * ```
 */
export const Figure = forwardRef<HTMLQuoteElement, FigureProps>(
  ({ children, asChild, className, ...rest }, ref) => {
    const Component = asChild ? Slot : "figure";
    return (
      <Component ref={ref} className={clsx("hds-figure", className as undefined)} {...rest}>
        {children}
      </Component>
    );
  },
);
Figure.displayName = "Figure";
