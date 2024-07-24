import { vitePlugin as remix } from "@react-router/dev";
import { defineConfig } from "vite";

import fs from "node:fs/promises";

async function getExamplesPaths() {
  const examplesFolder = "./app/examples";
  const exampleFilesAndDirs = await fs.readdir(new URL(examplesFolder, import.meta.url), {
    recursive: true,
  });
  const examplePaths = exampleFilesAndDirs.filter((path) => path.endsWith(".tsx"));

  return examplePaths;
}

export default defineConfig({
  server: {
    port: 6007,
  },
  build: {
    target: "es2022",
    sourcemap: true,
  },
  base: "/hedwig-design-system/",
  plugins: [
    remix({
      basename: "/hedwig-design-system/",
      ignoredRouteFiles: ["*/**.css"],
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      },

      prerender,
      buildEnd,

      /**
       * Read the app/examples folder and create routes for each example component.
       */
      async routes(defineRoutes) {
        const examplePaths = await getExamplesPaths();
        const routes = defineRoutes((route) => {
          for (const path of examplePaths) {
            const urlPath = "examples-iframe/" + path.replace(/\.tsx$/, "");
            const filePath = "examples/" + path;
            route(urlPath, filePath, {});
          }
        });

        // HACK: Manually set the layout for iframe examples
        Object.values(routes).forEach((route) => {
          route.parentId = "routes/_examples-iframe";
        });

        return routes;
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

// Prerendering
async function buildEnd() {
  console.log("Copying static files...");
  await fs.cp("./build/client/hedwig-design-system", "./build/static/hedwig-design-system", {
    recursive: true,
  });
  await fs.cp("./build/client/assets", "./build/static/hedwig-design-system/assets", {
    recursive: true,
  });
}

async function prerender(): Promise<string[]> {
  const examplePaths = (await getExamplesPaths()).map((path) => path.replace(/\.tsx$/, ""));
  const componentNames = await getComponentNames();
  const pagesPaths = await getPagesPaths();

  const result = [
    // Pages
    ...pagesPaths.map((path) => `/storefront/${path}`),

    // Component pages
    ...componentNames.map((path) => `/storefront/components/${path}`),

    // Examples pages
    "/examples",
    ...examplePaths.map((path) => `/examples/${path.split("/").slice(0, -1).join("/")}`),
    ...examplePaths.map((path) => `/examples-iframe/${path}`),
  ];
  return [...new Set(result)];
}

async function getComponentNames() {
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

  const examplePaths = await getExamplesPaths();
  const componentNamesFromExamples = examplePaths
    .map(parseExampleFilename)
    .filter(({ groupName }) => groupName !== "patterns")
    .map(({ componentName }) => componentName);

  const contentComponentsFolder = "./content/components";
  const contentFilesAndDirs = await fs.readdir(new URL(contentComponentsFolder, import.meta.url), {
    recursive: true,
  });
  const componentPaths = contentFilesAndDirs
    .filter((path) => path.endsWith(".mdx") && !path.split("/").at(-1)?.startsWith("."))
    .map((path) => path.replace(/\.mdx$/, ""))
    .map((path) => path.split("/").at(-1))
    .filter((path) => path !== undefined);

  return [...new Set([...componentNamesFromExamples, ...componentPaths])];
}

async function getPagesPaths() {
  const pagesFolder = "./content/pages";
  const pageFilesAndDirs = await fs.readdir(new URL(pagesFolder, import.meta.url), {
    recursive: true,
  });
  const pagePaths = pageFilesAndDirs
    .filter((path) => path.endsWith(".mdx") && !path.split("/").at(-1)?.startsWith("."))
    .map((path) => path.replace("/home.mdx", "").replace("home.mdx", ""))
    .map((path) => path.replace(/\.mdx$/, ""))
    .filter((path) => path !== undefined);

  return pagePaths;
}
