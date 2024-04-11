import { clsx } from "@postenbring/hedwig-css/typed-classname";
import { Slot } from "@radix-ui/react-slot";
import { forwardRef } from "react";
import { getResponsiveProps, type ResponsiveProp } from "../responsive";
import { type SpacingSizes, type ResponsiveSpacingSizes, getSpacingVariable } from "../spacing";

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;

  /**
   * Space between grid items. Both horizontal and vertical.
   *
   * Use the responsive shorthand `12-16` to jump a level at the `large` breakpoint.
   *
   * Or use the responsive object `{ initial: 40, large: 64 }` to set different values at different breakpoints.
   */
  gap?: ResponsiveProp<SpacingSizes> | ResponsiveSpacingSizes;

  /**
   * Column span for the grid items
   *
   * `default` is `12`
   */
  span?: ResponsiveProp<1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12>;

  /**
   * Center grid items horizontally
   *
   * Offsets the start position of the grid items relative to their span so that it appears centered.
   *
   * assumes a span of 2, 4, 6, 8, or 10
   *
   * a span of `12` is 100% width and centering has no effect
   *
   * `default` is `false`
   */
  center?: ResponsiveProp<boolean>;

  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   */
  asChild?: boolean;
}

/**
 * 🚧 A simple opionated abstraction over CSS Grid.
 *
 * The grid is always a 12 column grid.
 *
 * example
 * ```tsx
 * <Grid gap="12-16" span={{ small: 6 }}>
 *   <div>6/12</div>
 *   <div>6/12</div>
 *   <Grid.Item span={{ small: 12 }}>12/12</Grid.Item>
 *   <div>6/12</div>
 *   <div>6/12</div>
 * </Grid>
 * ```
 */
export const Grid = forwardRef<HTMLDivElement, GridProps>(
  ({ children, asChild, className, span, center, style: _style, gap, ...rest }, ref) => {
    const Component = asChild ? Slot : "div";
    const style: React.CSSProperties = {
      ..._style,
      ...getResponsiveProps("--hds-grid-gap", gap, getSpacingVariable),
      ...getResponsiveProps("--hds-grid-span", span),
      ...getResponsiveProps("--hds-grid-center", center, (value) => (value ? "1" : "0")),
    };
    return (
      <Component
        style={style}
        className={clsx("hds-grid", className as undefined)}
        ref={ref}
        {...rest}
      >
        {children}
      </Component>
    );
  },
);
Grid.displayName = "Grid";

export interface GridItemProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;

  /**
   * Column span for the grid item
   *
   * `default` is `12`
   */
  span?: ResponsiveProp<1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12>;

  /**
   * Center the grid item horizontally
   *
   * Offsets the start position of the grid item relative to it's span so that it appears centered.
   *
   * assumes a span of 2, 4, 6, 8, or 10
   *
   * a span of `12` is 100% width and centering has no effect
   *
   * `default` is `false`
   */
  center?: ResponsiveProp<boolean>;

  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   */
  asChild?: boolean;
}

/**
 * 🚧 Grid.Item
 *
 * Use as the direct child of a `Grid` to override `span` and `center` for individual items.
 */
export const GridItem = forwardRef<HTMLDivElement, GridItemProps>(
  ({ children, asChild, className, span, center, style: _style, ...rest }, ref) => {
    const Component = asChild ? Slot : "div";
    const style: React.CSSProperties = {
      ..._style,
      ...getResponsiveProps("--hds-grid-item-span", span),
      ...getResponsiveProps("--hds-grid-item-center", center, (value) => (value ? "1" : "0")),
    };
    return (
      <Component
        style={style}
        className={clsx("hds-grid__item", className as undefined)}
        ref={ref}
        {...rest}
      >
        {children}
      </Component>
    );
  },
);
GridItem.displayName = "Grid.Item";
