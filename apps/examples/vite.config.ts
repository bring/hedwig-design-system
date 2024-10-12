import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import fs from "node:fs/promises";

export default defineConfig({
  server: {
    port: 6007,
  },
  build: {
    target: "es2022",
    sourcemap: true,
  },
  base: "/hedwig-design-system/examples/",
  plugins: [
    reactRouter({
      ssr: false,
      basename: "/hedwig-design-system/examples/",

      async prerender({ getStaticPaths }) {
        const staticPaths = getStaticPaths();
        const dynamicPaths = (await getGroupAndComponentsList()).map(
          ({ groupName, componentName }) => {
            if (groupName) {
              return `/${groupName}/${componentName}`;
            }
            return `/${componentName}`;
          },
        );

        const prerenderPaths = [...staticPaths, ...dynamicPaths];
        return prerenderPaths;
      },

      async buildEnd() {
        console.log("Copying static files...");
        await fs.cp("./build/client/hedwig-design-system", "./build/static/hedwig-design-system", {
          recursive: true,
        });
        await fs.cp(
          "./build/client/assets",
          "./build/static/hedwig-design-system/examples/assets",
          {
            recursive: true,
          },
        );
      },
    }),
  ],
  resolve: {
    alias: [
      {
        find: "@postenbring/hedwig-react",
        replacement: new URL("../../packages/react/src", import.meta.url).pathname,
      },
    ],
  },
});

/**
 * Returns the file paths of all examples files, relative to `app/examples`.
 * `["warning-banner/expandable.tsx", "patterns/composition/links-and-buttons.tsx"]`.
 */
export async function getExamplesFilePaths() {
  const examplesFolder = "./app/examples";
  const exampleFilesAndDirs = await fs.readdir(new URL(examplesFolder, import.meta.url), {
    recursive: true,
  });
  const examplePaths = exampleFilesAndDirs.filter((path) => path.endsWith(".tsx"));

  return examplePaths;
}

export async function getGroupAndComponentsList() {
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

  const exampleFilePaths = await getExamplesFilePaths();

  const groupComponentSet = new Set<string>();
  const groupComponentList = exampleFilePaths
    .map(parseExampleFilename)
    .map(({ groupName, componentName }) => ({ groupName, componentName }))
    .filter(({ groupName, componentName }) => {
      if (groupComponentSet.has(groupName + componentName)) {
        return false;
      }
      groupComponentSet.add(groupName + componentName);
      return true;
    });
  return groupComponentList;
}
