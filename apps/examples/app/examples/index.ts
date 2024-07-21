import type { ExampleViewOptions } from "../routes/_examples-iframe/route";

const modules = import.meta.glob(["./*/*/*.tsx", "./*/*.tsx"], {
  query: "?raw",
  import: "default",

  // Start of by loading all the examples eagerly
  // Don't think this will be a big problem, hopefully it will gzip nicely
  eager: true,
});

function parseExampleFilename(fileName: string): {
  groupName?: string;
  componentName: string;
  exampleName: string;
} {
  const titleMatch = fileName.match(
    /((?<groupName>[\w-]+)\/)?(?<componentName>[\w-]+)\/(?<exampleName>[\w-]+)\.tsx$/u,
  );
  if (!titleMatch?.groups) throw new Error(`invalid file name ${fileName}`);

  const { groupName, componentName, exampleName } = titleMatch.groups;
  return { groupName, componentName, exampleName };
}

export const examples = Object.keys(modules)
  .map((filePath) => {
    const { groupName, componentName, exampleName } = parseExampleFilename(filePath);

    const urlPath = `${import.meta.env.BASE_URL}examples-iframe/${groupName ? `${groupName}/` : ""}${componentName}/${exampleName}`;
    const exampleSource = modules[filePath] as string;

    // Used in the code preview
    const exampleSourceNeat = exampleSource.replace(/\s*export default Example;[\s\S]*/, "");

    // Used for Code Sandbox. Includes the default export
    const exampleSourceComplete = exampleSource.replace(
      /(\s*export default Example;)[\s\S]*/,
      "$1",
    );

    const configSource = exampleSource.match(/export const config.+({[\s\S]+?});/)?.[1];

    // NOTE: Using `eval` here is safe because it just executes the static code defined in the `examples` folder.
    //
    // This is a exception to make the config more convenient to write. Do not use `eval` if you can avoid it.
    // Especially when the input can come from an untrusted source, like user input.
    const config = eval(`(${configSource})`) as ExampleConfig | undefined;

    return {
      filePath,
      urlPath,
      groupName,
      componentName,
      exampleName,
      exampleSource,
      exampleSourceNeat,
      exampleSourceComplete,
      config,
    };
  })
  .sort((a, b) => a.componentName.localeCompare(b.componentName));

export const examplesByComponent = examples.reduce(
  (acc, example) => {
    if (!acc[example.componentName]) {
      acc[example.componentName] = [];
    }

    acc[example.componentName]?.push(example);
    return acc;
  },
  {} as Record<string, Example[]>,
);
for (const [componentName, examples] of Object.entries(examplesByComponent)) {
  examplesByComponent[componentName] = examples?.sort(
    (a, b) =>
      (a.config?.index ?? Number.MAX_SAFE_INTEGER) - (b.config?.index ?? Number.MAX_SAFE_INTEGER),
  );
}

export const componentsByGroup = Object.entries(examplesByComponent).reduce(
  (acc, [componentName, examples]) => {
    const group = examples?.[0].groupName ?? "default";
    if (!acc[group]) {
      acc[group] = {};
    }

    acc[group]![componentName] = examples;
    return acc;
  },
  {} as Record<string, typeof examplesByComponent>,
);

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
