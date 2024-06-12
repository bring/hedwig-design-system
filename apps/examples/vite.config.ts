import { vitePlugin as remix } from "@remix-run/dev";
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
      ssr: false,
      basename: "/hedwig-design-system/",
      ignoredRouteFiles: ["*/**.css"],
      future: {
        unstable_singleFetch: true,
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      },

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
