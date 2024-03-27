import { dirname, join } from "path";
import type { StorybookConfig } from "@storybook/react-vite";
import type { Indexer } from "@storybook/types";
import type { Plugin } from "vite";
import fs from "node:fs/promises";

function getAbsolutePath(value: string) {
  return dirname(require.resolve(join(value, "package.json")));
}

const config: StorybookConfig = {
  stories: ["../../../packages/react/src/**/*.stories.tsx", "../../examples/app/examples/*/*.tsx"],

  // Include the examples in storybook
  // They need a little transformation to work
  experimental_indexers: async (existingIndexers) => [...existingIndexers!, exampleIndexer],
  viteFinal: async (config) => {
    config.plugins?.unshift(exampleLoader());
    return config;
  },

  staticDirs: ["../public"],
  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-docs"),
    getAbsolutePath("@storybook/addon-a11y"),
    getAbsolutePath("@storybook/addon-themes"),
  ],
  framework: {
    // @ts-ignore -- It expects @storybook/react-vite
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  },

  core: {},

  docs: {
    autodocs: true,
  },
};

export default config;

const exampleFilenameRegex = /examples\/app\/examples\/.+\.tsx$/;
const exampleIndexer: Indexer = {
  test: exampleFilenameRegex,
  createIndex: async (fileName) => {
    const { componentName, exampleName } = parseExampleFilename(fileName);
    return [
      {
        type: "story",
        exportName: "default",
        name: `Example: ${kebabCaseToFirstLetterUpperCase(exampleName)}`,
        __id: `${componentName}--example-${exampleName}`,
        title: kebabCaseToFirstLetterUpperCase(componentName),
        importPath: fileName,
      },
    ];
  },
};

function exampleLoader() {
  const plugin: Plugin = {
    name: "load-example-story",
    async load(id) {
      if (id.match(exampleFilenameRegex)) {
        const { exampleName } = parseExampleFilename(id);
        const exampleSource = await fs.readFile(id, "utf-8");

        const exampleSourceNeat = exampleSource.replace(/\s*export default \w+;[\s\S]*/, "");
        const storyCode = `
        ${exampleSourceNeat}
        export const Example${kebabCaseToPascalCase(exampleName)} = {
          render: Example,
          parameters: {
            docs: {
              source: {
                language: "tsx",
                code: decodeURIComponent("${encodeURIComponent(exampleSourceNeat)}"),
              },
            },
          },
        }
        export default {}
        `;
        return storyCode;
      }
    },
  };
  return plugin;
}
function kebabCaseToFirstLetterUpperCase(kebabCase: string) {
  const s = kebabCase.replace(/-/g, " ");
  return s[0].toUpperCase() + s.slice(1);
}

function kebabCaseToPascalCase(kebabCase: string) {
  return kebabCase.replace(/(^\w|-\w)/g, (g) => g.replace("-", "").toUpperCase());
}

function parseExampleFilename(fileName: string) {
  const titleMatch = fileName.match(/([\w-]+)\/([\w-]+)\.tsx$/);
  if (!titleMatch) throw new Error(`invalid file name ${fileName}`);
  const [, componentName, exampleName] = titleMatch;
  return { componentName, exampleName };
}
