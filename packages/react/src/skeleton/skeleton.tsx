import * as React from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname";
import { forwardRef } from "react";
import type { OverridableComponent } from "../utils";

interface DimensionsFromWidthAndHeight {
  height?: number | string;
  width?: number | string;
}

interface SkeletonPropsInner extends React.AnchorHTMLAttributes<HTMLDivElement> {
  /**
   * The visual style of the Skeleton
   */
  variant?: "text" | "circle" | "rectangle" | "rounded";

  /**
   * Whether to show animation or not
   * In the future the animation effect might become configurable
   *
   * default true
   */
  animation?: boolean;

  children?: React.ReactNode;
}

export type SkeletonProps = SkeletonPropsInner & DimensionsFromWidthAndHeight;

/**
 * Make skeleton loading states as placeholders for your content while waiting for data to load.
 *
 * **Note**
 *
 * Consider if this is really needed. The best experience is to avoid loading states altogether.
 * If your loading takes under 1 second, it better to not show anything at all.
 *
 * - Make your backend faster
 * - Preload/prefetch data
 * - Avoid data loading waterfalls
 * - Use optimistic ui when doing mutations
 *
 * **Usage**
 *
 * ```tsx
 * <Skeleton variant="circle" width="2rem" height="2rem" />
 * <Skeleton variant="text" />
 * <Skeleton variant="text" width="80%" />
 * <Skeleton variant="text">Uses content to determine width</Skeleton>
 * <Skeleton variant="rectangle" width="300px" height="400px" />
 * ```
 *
 * Remember to set `aria-hidden` on top level components you use that are not the `Skeleton` component.
 *
 * The `Skeleton` component does this for it self, but if you are using other components higher up in the tree, it might cause problems with screen readers
 *
 * **References**
 * - https://aksel.nav.no/komponenter/core/skeleton
 * - https://chakra-ui.com/docs/components/skeleton
 * - https://mui.com/material-ui/react-skeleton/
 */
export const Skeleton: OverridableComponent<SkeletonProps, HTMLDivElement> = forwardRef(
  (
    {
      as: Component = "div",
      children,
      animation = true,
      variant = "text",
      width,
      height,
      className,
      style,
      ...rest
    },
    ref,
  ) => {
    return (
      <Component
        className={clsx(
          "hds-skeleton",
          `hds-skeleton--${variant}`,
          !animation && `hds-skeleton--no-animation`,
          className as undefined,
        )}
        style={{ ...style, width, height }}
        ref={ref}
        aria-hidden
        {...rest}
      >
        {children}
      </Component>
    );
  },
);
Skeleton.displayName = "Skeleton";
