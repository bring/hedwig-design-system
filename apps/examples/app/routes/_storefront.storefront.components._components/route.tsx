import { useLoaderData, NavLink as RemixNavLink, Outlet, useRouteLoaderData } from "react-router";
import { componentsByGroup as exampleComponentsByGroup } from "../../examples";
import { kebabCaseToFirstLetterUpperCase } from "../../components/component-examples";
import { Link, VStack } from "@postenbring/hedwig-react";
import { client } from "../../../tina/__generated__/client";

import { useViewOptionsSearch } from "../../root";

type DocsComponentStatus =
  | "ready-to-use"
  | "pending-implementation"
  | "work-in-progress"
  | "deprecated";
export interface DocsComponent {
  title: string;
  componentName: string;
  groupName: string;

  // Data from examples
  hasExamples: boolean;

  // Data from cms
  cmsContent?: {
    status?: DocsComponentStatus;
  };
}

async function getDocsComponentsByGroup() {
  // Get components data from cms
  const cmsComponents =
    (await client.queries.componentConnection()).data.componentConnection.edges
      ?.map((edge) => edge?.node)
      .filter((x) => x !== undefined && x !== null) ?? [];

  // Get components data from examples
  const whitelistedGroups = ["components", "form", "layout", "loaders"];
  const filteredExampleComponentsByGroup = Object.entries(exampleComponentsByGroup).filter(
    ([groupName]) => whitelistedGroups.includes(groupName),
  );

  // Merge
  const merged: { [groupName: string]: { [componentName: string]: DocsComponent } } = {};
  for (const component of cmsComponents) {
    if (!merged["components"]) merged["components"] = {};
    merged["components"][component._sys.filename.toLowerCase()] = {
      title: component.title,
      componentName: component._sys.filename.toLowerCase(),
      groupName: "components",
      hasExamples: false,
      cmsContent: {
        status: (component.status as DocsComponentStatus) || undefined,
      },
    };
  }

  for (const [groupName, components] of filteredExampleComponentsByGroup) {
    if (!merged[groupName]) merged[groupName] = {};
    for (const componentName of Object.keys(components)) {
      merged[groupName][componentName] = {
        ...merged[groupName][componentName],
        title:
          merged[groupName][componentName]?.title ?? kebabCaseToFirstLetterUpperCase(componentName),
        componentName,
        groupName,
        hasExamples: true,
      };
    }
  }

  // Sort into nested lists
  return Object.entries(merged).map(([groupName, docsComponents]) => ({
    groupName,
    docsComponents: Object.values(docsComponents).sort((a, b) => a.title.localeCompare(b.title)),
  }));
}

export async function getDocsComponent(componentName: string) {
  const docsComponentsByGroup = await getDocsComponentsByGroup();
  return docsComponentsByGroup
    .flatMap((x) => x.docsComponents)
    .find((x) => x.componentName === componentName);
}

export async function loader() {
  const docsComponentsByGroup = await getDocsComponentsByGroup();
  return { docsComponentsByGroup };
}
type LoaderData = Awaited<ReturnType<typeof loader>>;

export function useComponentsLayoutData() {
  return useRouteLoaderData("routes/_storefront.storefront.components._components") as LoaderData;
}

export default function Layout() {
  return (
    <div className="docs-container hds-mt-40-48">
      <ComponentsSidebar />
      <Outlet />
    </div>
  );
}

function ComponentsSidebar() {
  const { docsComponentsByGroup } = useLoaderData() as LoaderData;
  const viewOptionsSearch = useViewOptionsSearch();

  return (
    <VStack data-docs-area="sidebar" gap="24">
      {docsComponentsByGroup.map(({ groupName, docsComponents }) => (
        <div key={groupName}>
          <div className="hds-text-body-small-title hds-mb-12">
            {kebabCaseToFirstLetterUpperCase(groupName)}
          </div>

          <VStack asChild gap="8">
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
              }}
            >
              {docsComponents.map((docsComponent) => (
                <li key={docsComponent.componentName}>
                  <Link asChild variant="underline" className="hds-text-body-small">
                    <RemixNavLink
                      to={{
                        pathname: `/storefront/components/${docsComponent.componentName}/`,
                        search: viewOptionsSearch,
                      }}
                      prefetch="intent"
                    >
                      {({ isActive }) => (
                        <span
                          style={
                            isActive
                              ? {
                                  fontWeight: "500",
                                  color: "var(--hds-colors-darker)",
                                }
                              : undefined
                          }
                        >
                          {docsComponent.title}
                        </span>
                      )}
                    </RemixNavLink>
                  </Link>
                </li>
              ))}
            </ul>
          </VStack>
        </div>
      ))}
    </VStack>
  );
}
