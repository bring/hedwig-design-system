import * as React from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname";
import { forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { getSpacingVariable, type ResponsiveSpacingSizes, type SpacingSizes } from "../spacing";
import { getResponsiveProps, type ResponsiveProp } from "../responsive";

type CSSPropertiesWithVar = React.CSSProperties & {
  "--hds-stack-gap"?: string;
  "--hds-stack-direction"?: string;
  "--hds-stack-wrap"?: string;
  "--hds-stack-align"?: string;
  "--hds-stack-justify"?: string;
};

export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;

  /**
   * Space between items. Both horizontal and vertical.
   *
   * Use the responsive shorthand `12-16` to jump a level at the `large` breakpoint.
   *
   * Or use the responsive object `{ initial: 40, large: 64 }` to set different values at different breakpoints.
   *
   * Use `gapX` and `gapY` to set different values for horizontal and vertical spacing.
   */
  gap?: ResponsiveProp<SpacingSizes> | ResponsiveSpacingSizes;

  /**
   * Space between items horizontally
   */
  gapX?: ResponsiveProp<SpacingSizes> | ResponsiveSpacingSizes;

  /**
   * Space between items vertically
   */
  gapY?: ResponsiveProp<SpacingSizes> | ResponsiveSpacingSizes;

  direction?: ResponsiveProp<React.CSSProperties["flexDirection"]>;
  wrap?: ResponsiveProp<boolean>;
  align?: ResponsiveProp<React.CSSProperties["alignItems"]>;
  justify?: ResponsiveProp<React.CSSProperties["justifyContent"]>;

  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   */
  asChild?: boolean;
}

/**
 * 🚨 WORK IN PROGRESS 🚨
 *
 * TODO
 * - [ ] Add more examples
 * - [ ] Document usage
 * - [ ] Document props
 */
export const Stack = forwardRef<HTMLDivElement, StackProps>(
  (
    {
      children,
      asChild,
      className,
      style: _style,
      gap,
      gapX,
      gapY,
      direction,
      wrap,
      align,
      justify,
      ...rest
    },
    ref,
  ) => {
    const Component = asChild ? Slot : "div";
    const style: CSSPropertiesWithVar = {
      ..._style,
      ...getResponsiveProps("--hds-stack-gap", gap, getSpacingVariable),
      ...getResponsiveProps("--hds-stack-gap-x", gapX, getSpacingVariable),
      ...getResponsiveProps("--hds-stack-gap-y", gapY, getSpacingVariable),
      ...getResponsiveProps("--hds-stack-direction", direction),
      ...getResponsiveProps("--hds-stack-wrap", wrap, (value) => (value ? "wrap" : "nowrap")),
      ...getResponsiveProps("--hds-stack-align", align),
      ...getResponsiveProps("--hds-stack-justify", justify),
    };
    return (
      <Component
        style={style}
        className={clsx("hds-stack", className as undefined)}
        ref={ref}
        {...rest}
      >
        {children}
      </Component>
    );
  },
);
Stack.displayName = "Stack";

/**
 * 🚨 WORK IN PROGRESS 🚨
 *
 * TODO
 * - [ ] Add more examples
 * - [ ] Document usage
 * - [ ] Document props
 */
export const HStack = forwardRef<HTMLDivElement, Omit<StackProps, "direction">>((props, ref) => {
  return <Stack ref={ref} {...props} direction="row" />;
});
HStack.displayName = "HStack";

/**
 * 🚨 WORK IN PROGRESS 🚨
 *
 * TODO
 * - [ ] Add more examples
 * - [ ] Document usage
 * - [ ] Document props
 */
export const VStack = forwardRef<HTMLDivElement, Omit<StackProps, "direction">>((props, ref) => {
  return <Stack ref={ref} {...props} direction="column" />;
});
VStack.displayName = "VStack";
