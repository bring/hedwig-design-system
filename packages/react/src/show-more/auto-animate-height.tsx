import { cloneElement, forwardRef, useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import type { OverridableComponent } from "../utils";

const animationDurationToValue = {
  quick: 100,
  normal: 300,
  slow: 700,
};

export interface AutoAnimateHeightProps {
  /**
   * Time of the animation, using the hedwig animation tokens
   * quick: 0.1s
   * normal: 0.3s
   * slow: 0.7s
   *
   * default is "normal"
   */
  animationDuration?: "quick" | "normal" | "slow";

  /**
   * Which hedwig easing function to use, default is "normal"
   */
  animationEasing?: "in" | "out" | "normal";
  children: React.ReactNode;
  style?: React.CSSProperties;
}

/**
 * Helper component to animate the height of the children when they change
 * It's done by rendering two versions of the passed children,
 * one hidden to measure the height and one visible to only changes after the height is measured.
 *
 * **IMPORTANT** Do not pass any components with effects (like data fetching), as they will trigger twice.
 */
export const AutoAnimateHeight: OverridableComponent<AutoAnimateHeightProps, HTMLDivElement> =
  forwardRef(
    (
      {
        as: Component = "div",
        children,
        style,
        animationDuration = "normal",
        animationEasing = "normal",
        ...rest
      },
      ref,
    ) => {
      const measurementRef = useRef<HTMLDivElement>(null);
      const [height, setHeight] = useState<number | undefined>(undefined);
      const [clonedChildren, setClonedChildren] = useState<React.ReactNode>(() =>
        cloneElement(<>{children}</>, {}),
      );
      useEffect(() => {
        if (measurementRef.current) {
          const { height: newHeight } = measurementRef.current.getBoundingClientRect();

          if (newHeight < (height ?? 0)) {
            // If the children are shrinking, hold off on replacing until the animation is done
            // This way we don't get a sudden flash of empty content
            flushSync(() => {
              setHeight(newHeight);
            });
            setTimeout(() => {
              setClonedChildren(cloneElement(<>{children}</>, {}));
            }, animationDurationToValue[animationDuration]);
          } else {
            setHeight(newHeight);
            setClonedChildren(cloneElement(<>{children}</>, {}));
          }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps -- I know better
      }, [children]);

      return (
        <Component
          ref={ref}
          style={{
            overflow: "hidden",
            height,
            transitionProperty: "height",
            transitionDuration: `var(--hds-micro-animation-duration-${animationDuration})`,
            transitionTimingFunction: `var(--hds-micro-animation-easing-${animationEasing})`,
            ...style,
          }}
          {...rest}
        >
          <div
            aria-hidden
            ref={measurementRef}
            style={{
              position: "absolute",
              visibility: "hidden",
            }}
          >
            {children}
          </div>
          {clonedChildren}
        </Component>
      );
    },
  );
AutoAnimateHeight.displayName = "AutoAnimateHeight";
