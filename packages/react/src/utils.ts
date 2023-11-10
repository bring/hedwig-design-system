/* eslint-disable no-console -- console.warn for unsupported features */

export function warnForStyleOverrides(props: Record<string, unknown>) {
  if (props.className) {
    console.warn("Overriding styles are not premited");
  }
  if (props.styles) {
    console.warn("Overriding styles are not premited");
  }
}
