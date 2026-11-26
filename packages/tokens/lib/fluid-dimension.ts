import type { Named } from "style-dictionary";
import type StyleDictionary from "style-dictionary";

/**
 * Converts a [min, max] value to a fluid calculation based on screen width
 * Used for fluid typography
 */
export function transformMaybeFluidDimension(
  value?: number | string | [number | string, number | string],
) {
  if (!Array.isArray(value)) return value;

  const maxViewPort = 1200;
  const minViewPort = 300;
  const [min, max] = value;
  const minDimension = asDimension(min);
  const maxDimension = asDimension(max);
  const calc = `calc(${minDimension} + (${String(asPixels(max))} - ${String(asPixels(min))}) * ((100vw - ${String(minViewPort)}px) / (${String(maxViewPort)} - ${String(minViewPort)})))`;
  const clamped = `clamp(${minDimension},${calc},${maxDimension})`;
  return clamped;
}

type FluidDimension = [string, string];
export const customFluidDimension: Named<StyleDictionary.Transform> = {
  name: "custom/fluidDimension",
  type: "value",
  transitive: true,
  matcher: (token) => token.type === "fluidDimension" && Array.isArray(token.value),
  transformer: ({ value }: { value: FluidDimension }) => {
    return transformMaybeFluidDimension(value);
  },
};

function asDimension(x: string | number) {
  if (typeof x === "number") {
    return `${String(x)}px`;
  }
  return x;
}

function asPixels(value: string | number) {
  if (typeof value === "number") return value;
  const match = /^(?<amount>-?(?:\d+(?:\.\d*)?|\.\d+))(?<unit>px|rem)$/.exec(value);
  if (!match?.groups) throw new Error(`Unsupported fluid dimension: ${value}`);
  // Use a 16px root for the viewport-dependent part without typed CSS division.
  return Number(match.groups.amount) * (match.groups.unit === "rem" ? 16 : 1);
}

/**
 * Converts a unitless fluid line-height ratio into fluid rem lengths.
 * Each ratio is multiplied by the font size at the same viewport end, so the
 * result can be passed to `transformMaybeFluidDimension` as a valid length.
 */
export function lineHeightRatioToLength(
  fontSize: string | [string, string],
  [minRatio, maxRatio]: [string, string],
): [string, string] {
  const [minFont, maxFont] = Array.isArray(fontSize) ? fontSize : [fontSize, fontSize];
  const toRem = (px: number) => `${String(Number((px / 16).toFixed(4)))}rem`;
  return [toRem(Number(minRatio) * asPixels(minFont)), toRem(Number(maxRatio) * asPixels(maxFont))];
}
