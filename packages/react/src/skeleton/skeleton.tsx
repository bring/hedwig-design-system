/* eslint-disable @typescript-eslint/no-unsafe-assignment -- Typings for the differnt html elements */
/* eslint-disable @typescript-eslint/no-explicit-any -- Typings for the differnt html elements */

import { clsx } from "@postenbring/hedwig-css/typed-classname";
import { Slot } from "@radix-ui/react-slot";
import { forwardRef } from "react";
import { isInert } from "../utils";

interface DimensionsFromWidthAndHeight {
  height?: number | string;
  width?: number | string;
}

interface SkeletonPropsInner extends React.HTMLAttributes<HTMLDivElement> {
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

  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   *
   * @default false
   */
  asChild?: boolean;

  /**
   * Convienence prop to change the rendered element.
   *
   * Use {@link SkeletonProps.asChild} if you need more control of the rendered element.
   */
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "div" | "label" | "p";
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
export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  (
    {
      as: Tag = "div",
      asChild,
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
    const Component = asChild ? Slot : Tag;
    return (
      <Component
        className={clsx(
          "hds-skeleton",
          `hds-skeleton--${variant}`,
          !animation && `hds-skeleton--no-animation`,
          className as undefined,
        )}
        style={{ ...style, width, height }}
        aria-hidden
        {...{ inert: isInert(true) }}
        ref={ref as any}
        {...(rest as any)}
      >
        {children}
      </Component>
    );
  },
);
Skeleton.displayName = "Skeleton";
