import {
  useLoaderData,
  Link as RemixLink,
  NavLink as RemixNavLink,
  MetaFunction,
} from "react-router";
import { componentsByGroup as exampleComponentsByGroup } from "../../examples";
import { Examples, kebabCaseToFirstLetterUpperCase } from "../../components/component-examples";
import { Grid, Link, VStack } from "@postenbring/hedwig-react";
import { client } from "../../../tina/__generated__/client";

import styles from "./styles.module.css";
import { useTina } from "tinacms/dist/react";
import { PageContent } from "../_storefront.storefront.$/route";
import { useViewOptionsSearch } from "../../root";

export async function getComponentsByGroup() {
  // Components
  // Use the examples for now
  const whitelistedGroups = ["components", "form", "layout", "loaders"];
  const componentsByGroup = Object.entries(exampleComponentsByGroup)
    .sort(([a], [b]) => a.localeCompare(b))
    .filter(([groupName]) => whitelistedGroups.includes(groupName))
    .map(([groupName, components]) => ({
      groupName,
      components: Object.keys(components),
    }));

  return componentsByGroup;
}
export function getComponent(
  componentsByGroup: Awaited<ReturnType<typeof getComponentsByGroup>>,
  name: string,
) {
  return componentsByGroup
    .flatMap(({ components }) => components)
    .find((component) => component === name);
}

export async function loader() {
  const { data, query, variables } = await client.queries.page({
    relativePath: "components/home.mdx",
  });
  const dataQueryVariables = {
    data,
    query,
    variables,
  };

  const componentsByGroup = await getComponentsByGroup();

  return { dataQueryVariables, componentsByGroup };
}
type LoaderData = Awaited<ReturnType<typeof loader>>;

export const meta: MetaFunction = ({ data, error }) => {
  if (error) {
    return [
      {
        title: `404 - Hedwig Design System`,
      },
    ];
  }

  const { dataQueryVariables } = data as LoaderData;

  return [
    { title: `${dataQueryVariables.data.page.title} - Hedwig Design System` },
    {
      name: "description",
      content: dataQueryVariables.data.page.description,
    },
  ];
};

export default function Component() {
  const { componentsByGroup, dataQueryVariables } = useLoaderData() as LoaderData;
  const { data } = useTina(dataQueryVariables);
  const viewOptionsSearch = useViewOptionsSearch();

  return (
    <div className="docs-container hds-mt-40-48">
      <ComponentsSidebar componentsByGroup={componentsByGroup} />
      <div data-docs-area="main">
        {/* Content */}
        <PageContent data={data} />

        {/* Components grid */}
        <div className="hds-mt-48-64" />
        {componentsByGroup.map(({ groupName, components }) => (
          <div key={groupName}>
            {groupName !== "components" && (
              <h2 className="hds-text-h1 hds-mt-48-64 hds-mb-24-32">
                {kebabCaseToFirstLetterUpperCase(groupName)}
              </h2>
            )}

            <Grid asChild gap="20-24" span={{ small: 6, large: 4 }}>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                }}
              >
                {components.map((componentName, i) => (
                  <li key={componentName} className={styles.componentItem}>
                    <h2 className="hds-text-h3-title" id={`examples-${componentName}`}>
                      <Link asChild variant="solid">
                        <RemixLink
                          to={{
                            pathname: `/storefront/components/${componentName}/`,
                            search: viewOptionsSearch,
                          }}
                          prefetch="intent"
                        >
                          {kebabCaseToFirstLetterUpperCase(componentName)}
                        </RemixLink>
                      </Link>
                    </h2>
                    <div className="hds-mt-12-16" />
                    <Examples
                      componentName={componentName}
                      shouldPreload={groupName === "components" && i < 4}
                      onlyFirstExample
                      onlyIframe
                    />
                  </li>
                ))}
              </ul>
            </Grid>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ComponentsSidebar({
  componentsByGroup,
}: {
  componentsByGroup: Awaited<ReturnType<typeof getComponentsByGroup>>;
}) {
  const viewOptionsSearch = useViewOptionsSearch();

  return (
    <VStack data-docs-area="sidebar" gap="24">
      {componentsByGroup.map(({ groupName, components }) => (
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
              {components.map((componentName) => (
                <li key={componentName}>
                  <Link asChild variant="underline" className="hds-text-body-small">
                    <RemixNavLink
                      to={{
                        pathname: `/storefront/components/${componentName}/`,
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
                          {kebabCaseToFirstLetterUpperCase(componentName)}
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
