/* eslint-disable no-console -- console.warn for unsupported features */

export function warnForStyleOverrides(className: unknown, styles: unknown) {
  if (className) {
    console.warn("Overriding styles are not premited");
  }
  if (styles) {
    console.warn("Overriding styles are not premited");
  }
}
