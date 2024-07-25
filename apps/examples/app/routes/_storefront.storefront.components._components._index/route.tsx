import { useLoaderData, Link as RemixLink, MetaFunction } from "react-router";
import {
  Examples,
  existsExamplesForComponent,
  kebabCaseToFirstLetterUpperCase,
} from "../../components/component-examples";
import { Grid, Link } from "@postenbring/hedwig-react";
import { client } from "../../../tina/__generated__/client";

import styles from "./styles.module.css";
import { useTina } from "tinacms/dist/react";
import { PageContent } from "../_storefront.storefront.$/route";
import { useViewOptionsSearch } from "../../root";
import { useComponentsLayoutData } from "../_storefront.storefront.components._components/route";

export async function loader() {
  const { data, query, variables } = await client.queries.page({
    relativePath: "components/home.mdx",
  });
  const dataQueryVariables = {
    data,
    query,
    variables,
  };

  return { dataQueryVariables };
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
  const { dataQueryVariables } = useLoaderData() as LoaderData;
  const { data } = useTina(dataQueryVariables);
  const viewOptionsSearch = useViewOptionsSearch();
  const { docsComponentsByGroup } = useComponentsLayoutData();

  return (
    <div data-docs-area="main">
      {/* Content */}
      <PageContent data={data} />

      {/* Components grid */}
      <div className="hds-mt-48-64" />
      {docsComponentsByGroup.map(({ groupName, docsComponents }) => (
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
              {docsComponents.map(({ componentName }, i) => (
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
                  {existsExamplesForComponent(componentName) ? (
                    <Examples
                      componentName={componentName}
                      shouldPreload={groupName === "components" && i < 4}
                      onlyFirstExample
                      onlyIframe
                    />
                  ) : (
                    <div
                      aria-hidden
                      className="hds-text-h2"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        paddingTop: "var(--hds-spacing-48-64)",
                      }}
                    >
                      {kebabCaseToFirstLetterUpperCase(componentName)}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </Grid>
        </div>
      ))}
    </div>
  );
}
