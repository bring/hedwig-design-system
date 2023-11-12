/**
 * Converts a [min, max] value to a fluid calculation based on screen width
 * Used for fluid typography
 *
 * Based on calculations from the global hedwig.css
 * https://github.com/bring/hedwig/blob/master/src/shared/_config/variables.css#L205-L223
 *
 * --hw-font-size-max-view-port: 1200;
 * --hw-font-size-min-view-port: 300;
 * --hw-font-size-min-view-port-px: 300px;
 * calc(var(--hw-font-size-min-h1-px) + (var(--hw-font-size-max-h1) - var(--hw-font-size-min-h1)) * ((100vw - var(--hw-font-size-min-view-port-px)) / (var(--hw-font-size-max-view-port) - var(--hw-font-size-min-view-port))));
 */
export function transformMaybeFluidValue(
  value?: number | string | [number | string, number | string],
) {
  if (!Array.isArray(value)) return value;

  const maxViewPort = 1200;
  const minViewPort = 300;
  const [min, max] = value;

  // calc(min-px + (max - min) * ((100vw - min-view-port-px) / (max-view-port - min-view-port)));
  return `calc(${asPx(min)} + (${asNumber(max)} - ${asNumber(min)}) * ((100vw - ${asPx(
    minViewPort,
  )}) / (${asNumber(maxViewPort)} - ${asNumber(minViewPort)})))`;
}

function asNumber(x: string | number) {
  if (typeof x === "string") {
    return Number(x.replace("px", ""));
  }
  return x;
}
function asPx(x: string | number) {
  if (typeof x === "number") {
    return `${x}px`;
  }
  return x;
}
