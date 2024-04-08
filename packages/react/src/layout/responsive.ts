type Breakpoints = "initial" | "small" | "medium" | "large" | "xlarge";

type ResponsiveValues<T> = {
  [Breakpoint in Breakpoints]?: T;
};

export type ResponsiveProp<T> = T | ResponsiveValues<T>;

export function getResponsiveProps<T>(
  variable: `--hds-${string}`,
  inputValues?: ResponsiveProp<T>,
  valueTransformer: (value: T) => string = (value) => String(value),
) {
  if (!inputValues) return {};

  if (typeof inputValues !== "object") {
    return { [`${variable}-initial`]: valueTransformer(inputValues) };
  }

  const result: Record<string, string> = {};
  for (const [key, value] of Object.entries(inputValues as ResponsiveValues<T>)) {
    result[`${variable}-${key}`] = valueTransformer(value);
  }

  return result;
}
