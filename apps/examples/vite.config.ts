import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import mdx from "@mdx-js/rollup";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";

import fs from "node:fs/promises";

export default defineConfig({
  build: {
    target: "es2022",
    sourcemap: true,
  },
  base: "/hedwig-design-system/examples/",
  plugins: [
    mdx({
      remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
    }),
    remix({
      ssr: false,
      basename: "/hedwig-design-system/examples/",
      ignoredRouteFiles: ["*/**.css"],

      /**
       * Read the app/examples folder and create routes for each example component.
       */
      async routes(defineRoutes) {
        const examplesFolder = "./app/examples";
        const exampleFilesAndDirs = await fs.readdir(new URL(examplesFolder, import.meta.url), {
          recursive: true,
        });
        const componentExamples = exampleFilesAndDirs.filter((path) => path.endsWith(".tsx"));

        const routes = defineRoutes((route) => {
          for (const example of componentExamples) {
            const urlPath = example.replace(/\.tsx$/, "");
            const filePath = "examples/" + example;

            route(urlPath, filePath);
          }
        });
        return routes;
      },
    }),
    tsconfigPaths(),
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
