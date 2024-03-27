import type { ExampleViewOptions } from "../root";

const modules = import.meta.glob("./examples/*/*.tsx", {
  query: "?raw",
  import: "default",

  // Start of by loading all the examples eagerly
  // Don't think this will be a big problem, hopefully it will gzip nicely
  eager: true,
});

export const examples = Object.keys(modules).map((filePath) => {
  const [componentName, exampleName] = filePath
    .replace("./examples/", "")
    .replace(/\.tsx$/, "")
    .split("/");

  const urlPath = `${import.meta.env.BASE_URL}${componentName}/${exampleName}`;
  const exampleSource = modules[filePath] as string;

  // Used in the code preview
  const exampleSourceNeat = exampleSource.replace(/\s*export default \w+;[\s\S]*/, "");

  // Used for Code Sandbox. Includes the default export
  const exampleSourceComplete = exampleSource.replace(/(\s*export default \w+;)[\s\S]*/, "$1");

  const configSource = exampleSource.match(/export const config.+({[\s\S]+?});/)?.[1];

  // NOTE: Using `eval` here is safe because it just executes the static code defined in the `examples` folder.
  //
  // This is a exception to make the config more convenient to write. Do not use `eval` if you can avoid it.
  // Especially when the input can come from an untrusted source, like user input.
  const config = eval(`(${configSource})`) as ExampleConfig | undefined;

  return {
    filePath,
    urlPath,
    componentName,
    exampleName,
    exampleSource,
    exampleSourceNeat,
    exampleSourceComplete,
    config,
  };
});

export const examplesByComponent = examples.reduce(
  (acc, example) => {
    if (!acc[example.componentName]) {
      acc[example.componentName] = [];
    }

    acc[example.componentName]?.push(example);
    return acc;
  },
  {} as Record<string, Example[] | undefined>,
);
for (const [componentName, examples] of Object.entries(examplesByComponent)) {
  examplesByComponent[componentName] = examples?.sort(
    (a, b) =>
      (a.config?.index ?? Number.MAX_SAFE_INTEGER) - (b.config?.index ?? Number.MAX_SAFE_INTEGER),
  );
}

// Types
export type Example = (typeof examples)[number];

export interface ExampleConfig extends ExampleViewOptions {
  /**
   * Optional description shown above the example
   */
  description?: string;

  /**
   * The order to which show the examples
   */
  index?: number;
}
