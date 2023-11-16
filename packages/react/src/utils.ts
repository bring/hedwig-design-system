/* eslint-disable no-console -- console.warn for unsupported features */

import type { JSX } from "react";

export function warnForStyleOverrides(props: Record<string, unknown>) {
  if (props.className) {
    console.warn("Overriding styles are not premited");
  }
  if (props.styles) {
    console.warn("Overriding styles are not premited");
  }
}

export function warnForStyleOverridesAndRender(
  props: Record<string, unknown>,
  component: JSX.Element,
): JSX.Element {
  if (props.className) {
    console.warn("Overriding styles are not premited");
  }
  if (props.styles) {
    console.warn("Overriding styles are not premited");
  }
  return component;
}
