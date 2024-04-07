type Breakpoints = "xsmall" | "small" | "medium" | "large" | "xlarge";

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

  if (typeof inputValues === "string") {
    return { [`${variable}-xsmall`]: valueTransformer(inputValues) };
  }

  const result: Record<string, string> = {};
  for (const [key, value] of Object.entries(inputValues)) {
    result[`${variable}-${key}`] = valueTransformer(value);
  }

  return result;
}
