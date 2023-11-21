/* eslint-disable no-console -- console.warn for unsupported features */
import type { RefAttributes, FC, ElementType, ComponentPropsWithRef } from "react";

export function warnForStyleOverrides(props: Record<string, unknown>) {
  if (props.className) {
    console.warn("Overriding styles are not premited");
  }
  if (props.styles) {
    console.warn("Overriding styles are not premited");
  }
}

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
