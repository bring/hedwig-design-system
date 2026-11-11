import { forwardRef } from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname";
import { Slot } from "@radix-ui/react-slot";

export interface ChipGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * `inline`: A single row, scrolls horizontally when the chips do not fit.
   * `wrap`: Chips wrap onto multiple rows.
   *
   * @default "wrap"
   */
  layout?: "inline" | "wrap";

  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   *
   * @default false
   */
  asChild?: boolean;
}

/**
 * Groups multiple `Chip`s with correct spacing.
 *
 * @example
 * <ChipGroup layout="wrap">
 *   <Chip type="checkbox">Sporing</Chip>
 *   <Chip type="checkbox">Hente i butikk</Chip>
 * </ChipGroup>
 */
export const ChipGroup = forwardRef<HTMLDivElement, ChipGroupProps>(
  ({ layout = "wrap", asChild, className, children, ...rest }, ref) => {
    const Component = asChild ? Slot : "div";
    return (
      <Component
        className={clsx("hds-chip-group", `hds-chip-group--${layout}`, className as undefined)}
        ref={ref}
        {...rest}
      >
        {children}
      </Component>
    );
  },
);
ChipGroup.displayName = "ChipGroup";
