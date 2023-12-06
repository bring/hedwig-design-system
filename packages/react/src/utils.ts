import type { RefAttributes, FC, ElementType, ComponentPropsWithRef } from "react";
import * as React from "react";

/**
 * OverridableComponent makes the `as` prop available,
 * to be used to override the html element being used for a component
 *
 * Taken from digdir design system: https://github.com/digdir/designsystem/blob/main/packages/react/src/types/OverridableComponent.ts
 */
export type OverridableComponent<ComponentProps, Element extends HTMLElement> = {
  (props: ComponentProps & RefAttributes<Element>): ReturnType<FC>;

  <As extends ElementType>(
    props: {
      /** Override html element */
      as?: As;
    } & ComponentProps &
      Omit<ComponentPropsWithRef<As>, keyof ComponentProps>,
  ): ReturnType<FC>;
} & Pick<FC, "displayName">;

/**
 * Merges an array of refs into a single memoized callback ref or `null`.
 * @see https://floating-ui.com/docs/useMergeRefs
 */
export function useMergeRefs<Instance>(
  refs: (React.Ref<Instance> | undefined)[],
): React.RefCallback<Instance> | null {
  return React.useMemo(() => {
    if (refs.every((ref) => ref === null)) {
      return null;
    }

    return (value) => {
      refs.forEach((ref) => {
        if (typeof ref === "function") {
          ref(value);
        } else if (ref !== null) {
          (ref as React.MutableRefObject<Instance | null>).current = value;
        }
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- It's ok
  }, refs);
}
