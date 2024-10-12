import { layout, route, type RouteConfig, type RouteConfigEntry } from "@react-router/dev/routes";
import { flatRoutes } from "@react-router/fs-routes";
import fs from "node:fs/promises";

export const routes: RouteConfig = buildRoutes();

async function buildRoutes(): Promise<RouteConfigEntry[]> {
  const fileRoutes = await flatRoutes({
    ignoredRouteFiles: ["*/**.css"],
  });

  const examplesRoutes = (await getExamplesFilePaths()).map((filePath) =>
    route(filePath.replace(/\.tsx$/, ""), "examples/" + filePath),
  );
  const examplesRoutesWithIframeLayout = layout(
    "./routes/_examples-iframe/route.tsx",
    examplesRoutes,
  );

  const routes = [...fileRoutes, examplesRoutesWithIframeLayout];

  const routesThemed = [
    ...routes,
    route("/bring", "./routes/_theme.tsx", prefixRoutesWithId(routes, "bring")),
  ];
  return routesThemed;
}

function prefixRoutesWithId(routes: RouteConfigEntry[], id: string): RouteConfigEntry[] {
  return routes.map((route) => {
    return {
      ...route,
      id: id + "-" + (route.id ?? route.file),
      children: route.children ? prefixRoutesWithId(route.children, id) : undefined,
    };
  });
}

/**
 * Returns the file paths of all examples files, relative to `app/examples`.
 * `["warning-banner/expandable.tsx", "patterns/composition/links-and-buttons.tsx"]`.
 */
export async function getExamplesFilePaths() {
  const examplesFolder = "./examples";
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
