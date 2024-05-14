import { cloneElement, forwardRef, useEffect, useRef, useState } from "react";
import { useMergeRefs } from "./utils";

export interface AutoAnimateHeightProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Time of the animation, using the hedwig animation tokens
   * quick: 0.1s
   * normal: 0.3s
   * slow: 0.7s
   *
   * default is "quick"
   */
  animationDuration?: "quick" | "normal" | "slow";

  /**
   * Callback fired when animiation transition ends
   * Use this to do effects after resizing is done, e.g. scrolling to the element
   * using `element.scrollIntoView()`
   */
  onTransitionEnd?: () => void;

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
export const AutoAnimateHeight = forwardRef<HTMLDivElement, AutoAnimateHeightProps>(
  (
    {
      children,
      style,
      animationDuration = "quick",
      animationEasing = "normal",
      onTransitionEnd,
      ...rest
    },
    ref,
  ) => {
    const rootRef = useRef<HTMLDivElement>(null);
    const mergedRef = useMergeRefs([rootRef, ref]);
    const measurementRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState<{ height: number; shouldAnimate: boolean } | undefined>(
      undefined,
    );
    const [clonedChildren, setClonedChildren] = useState<React.ReactNode>(() =>
      cloneElement(<>{children}</>, {}),
    );

    useEffect(() => {
      if (!rootRef.current) return;
      if (!measurementRef.current) return;
      if (document.body.scrollHeight === 0) return;
      const currentMeasurement = measurementRef.current;
      const { height: newHeight } = currentMeasurement.getBoundingClientRect();

      // Listen for resize events on the measurement element
      // Keep the children in sync with the height
      // But don't animate it.
      let previouslyObservedHeight = newHeight;
      const resizeObserver = new ResizeObserver(() => {
        const { height: resizedHeight } = currentMeasurement.getBoundingClientRect();
        if (resizedHeight === previouslyObservedHeight) return;
        previouslyObservedHeight = resizedHeight;
        setHeight({ height: resizedHeight, shouldAnimate: false });
      });
      resizeObserver.observe(currentMeasurement); // This is cleaned up down below in the return functions

      // Set the new height when children changes
      setHeight({ height: newHeight, shouldAnimate: true });

      // Update children
      const nextClonedChildren = cloneElement(<>{children}</>, {});

      // When increasing in height update immediately so the new content is shown during the animation
      if (newHeight >= (height?.height ?? 0)) {
        setClonedChildren(nextClonedChildren);
        return () => {
          resizeObserver.disconnect();
        };
      }

      // When decreasing in height, wait until the animation is done so that we don't get a sudden flash of empty content
      const currentRoot = rootRef.current;
      function onTransitionEndHandler(e: TransitionEvent) {
        if (e.propertyName !== "height") return;
        setClonedChildren(nextClonedChildren);
      }
      currentRoot.addEventListener("transitionend", onTransitionEndHandler);
      return () => {
        resizeObserver.disconnect();
        currentRoot.removeEventListener("transitionend", onTransitionEndHandler);
      };

      // eslint-disable-next-line react-hooks/exhaustive-deps -- I know better
    }, [children]);

    return (
      <div
        ref={mergedRef}
        onTransitionEnd={onTransitionEnd}
        style={{
          position: "relative",
          overflow: "hidden",
          height: height?.height ?? measurementRef.current?.getBoundingClientRect().height,
          transitionProperty: height?.shouldAnimate ? "height" : "none",
          transitionDuration: `var(--hds-micro-animation-duration-${animationDuration})`,
          transitionTimingFunction: `var(--hds-micro-animation-easing-${animationEasing})`,
          willChange: "height",
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
            pointerEvents: "none",
          }}
        >
          {children}
        </div>
        {clonedChildren}
      </div>
    );
  },
);
AutoAnimateHeight.displayName = "AutoAnimateHeight";
