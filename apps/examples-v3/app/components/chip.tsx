import { Slot } from "@radix-ui/react-slot";
import { forwardRef } from "react";
import "./chip.css";

export interface ChipProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * When not used as an input checkbox the active state needs to be manually provided
   */
  active?: boolean;

  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   * @default false
   */
  asChild?: boolean;
}

/**
 * Chip component
 *
 * as seen on [sending.posten.no/bestill](https://sending.posten.no/bestill)
 *
 * ## Thoughs
 * Potentially used as both a visual and interactive component.
 *
 * Interactivly it can be used in three ways
 * - As a link
 * - As a button
 * - As a checkbox
 *
 * ## TODO
 * - Should this be an official hedwig component?
 * - Should this be a lab component?
 */
export const Chip = forwardRef<HTMLSpanElement, ChipProps>(
  ({ asChild, active, className, ...rest }, ref) => {
    const Component = asChild ? Slot : "span";

    return (
      <Component
        data-state={active ? "active" : ""}
        className={["hds-unstable-chip", className].join(" ")}
        ref={ref}
        {...rest}
      />
    );
  },
);
Chip.displayName = "Chip";
