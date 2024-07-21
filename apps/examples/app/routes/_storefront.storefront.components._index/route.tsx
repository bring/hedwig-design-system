import { useLoaderData, Link as RemixLink, useSearchParams, MetaFunction } from "@remix-run/react";
import { componentsByGroup as exampleComponentsByGroup } from "../../examples";
import { Examples, kebabCaseToFirstLetterUpperCase } from "../../components/component-examples";
import { Grid, Link, VStack } from "@postenbring/hedwig-react";
import { client } from "../../../tina/__generated__/client";

import styles from "./styles.module.css";
import { tinaField, useTina } from "tinacms/dist/react";
import { Blocks } from "../_storefront.storefront.$/block-components";

export async function clientLoader() {
  const { data, query, variables } = await client.queries.page({
    relativePath: "components/home.mdx",
  });
  const dataQueryVariables = {
    data,
    query,
    variables,
  };

  // Components
  // Use the examples for now
  const whitelistedGroups = ["default", "form", "layout", "loaders"];
  const componentsByGroup = Object.entries(exampleComponentsByGroup)
    .sort(([a], [b]) => a.localeCompare(b))
    .filter(([groupName]) => whitelistedGroups.includes(groupName))
    .map(([groupName, components]) => ({
      groupName,
      components: Object.keys(components),
    }));

  return { dataQueryVariables, componentsByGroup };
}

export const meta: MetaFunction<typeof clientLoader> = ({ data }) => {
  return [
    { title: `${data?.dataQueryVariables.data.page.title} - Hedwig Design System` },
    {
      name: "description",
      content: data?.dataQueryVariables.data.page.description,
    },
  ];
};

export default function Component() {
  const { componentsByGroup, dataQueryVariables } = useLoaderData<typeof clientLoader>();
  const { data } = useTina(dataQueryVariables);
  const [search] = useSearchParams();

  return (
    <div className="docs-container hds-mt-40-48">
      <ComponentsSidebar />
      <div data-docs-area="main">
        {/* Content */}
        <div>
          {data.page.hideTitleAndDescription ? null : (
            <>
              <h1 className="hds-text-h1 hds-mb-24" data-tina-field={tinaField(data.page, "title")}>
                {data.page.title}
              </h1>
              {data.page.description && (
                <p
                  className="hds-text-h3 hds-mb-48-64"
                  data-tina-field={tinaField(data.page, "description")}
                >
                  {data.page.description}
                </p>
              )}
            </>
          )}
          {data.page.blocks && <Blocks blocks={data.page.blocks} />}
        </div>

        {/* Components grid */}
        <div className="hds-mt-48-64" />
        {componentsByGroup.map(({ groupName, components }) => (
          <div key={groupName}>
            {groupName !== "default" && (
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
                            pathname:
                              groupName !== "default"
                                ? `${groupName}/${componentName}`
                                : componentName,
                            search: search.toString(),
                          }}
                        >
                          {kebabCaseToFirstLetterUpperCase(componentName)}
                        </RemixLink>
                      </Link>
                    </h2>
                    <div className="hds-mt-12-16" />
                    <Examples
                      componentName={componentName}
                      shouldPreload={groupName === "default" && i < 4}
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

export function ComponentsSidebar() {
  const data = useLoaderData<typeof clientLoader>();
  const [search] = useSearchParams();

  return (
    <VStack data-docs-area="sidebar" gap="24">
      {data.componentsByGroup.map(({ groupName, components }) => (
        <div key={groupName}>
          <div className="hds-text-body-small-title hds-mb-12">
            {groupName === "default" ? "Components" : kebabCaseToFirstLetterUpperCase(groupName)}
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
                    <RemixLink
                      to={{
                        pathname:
                          groupName !== "default" ? `${groupName}/${componentName}` : componentName,
                        search: search.toString(),
                      }}
                    >
                      {kebabCaseToFirstLetterUpperCase(componentName)}
                    </RemixLink>
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
