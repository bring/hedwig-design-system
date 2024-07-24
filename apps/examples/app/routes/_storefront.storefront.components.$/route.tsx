import { useLoaderData, MetaFunction, Link as RemixLink, LoaderFunctionArgs } from "react-router";
import { Examples, kebabCaseToFirstLetterUpperCase } from "../../components/component-examples";
import { client } from "../../../tina/__generated__/client";

import { useTina } from "tinacms/dist/react";
import {
  ComponentsSidebar,
  getComponent,
  getComponentsByGroup,
} from "../_storefront.storefront.components._index/route";
import { TitleAndDescription } from "../_storefront.storefront.$/route";
import { Breadcrumbs, Link } from "@postenbring/hedwig-react";
import { useViewOptionsSearch } from "../../root";

export async function loader({ params }: LoaderFunctionArgs) {
  let slug = params["*"] ?? "";
  slug = slug.replace(/\/$/, "");

  const componentsByGroup = await getComponentsByGroup();
  const componentName = getComponent(componentsByGroup, slug);
  if (!componentName) {
    throw new Response("Not found", { status: 404 });
  }

  // Get cms content
  const components = await client.queries.componentConnection();
  const found = components.data.componentConnection.edges?.some(
    (edge) => edge?.node?._sys.relativePath === `${componentName}.mdx`,
  );
  let dataQueryVariables:
    | Pick<Awaited<ReturnType<typeof client.queries.component>>, "data" | "query" | "variables">
    | undefined = undefined;
  if (found) {
    const { data, query, variables } = await client.queries.component({
      relativePath: `${componentName}.mdx`,
    });
    dataQueryVariables = {
      data,
      query,
      variables,
    };
  }

  return {
    componentName,
    componentsByGroup,
    dataQueryVariables,
  };
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

  const { componentName, dataQueryVariables } = data as LoaderData;
  return [
    {
      title: `${dataQueryVariables?.data.component.title ?? kebabCaseToFirstLetterUpperCase(componentName)} - Hedwig Design System`,
    },
    {
      name: "description",
      content: dataQueryVariables?.data.component.description,
    },
  ];
};

export default function Component() {
  const { componentName, componentsByGroup, dataQueryVariables } = useLoaderData() as LoaderData;
  const viewOptionsSearch = useViewOptionsSearch();

  return (
    <div className="docs-container hds-mt-40-48">
      <ComponentsSidebar componentsByGroup={componentsByGroup} />
      <div data-docs-area="main">
        <Breadcrumbs olProps={{ style: { marginTop: 0 } }}>
          <li>
            <Link asChild>
              <RemixLink
                to={{
                  pathname: "/storefront/",
                  search: viewOptionsSearch,
                }}
              >
                Home
              </RemixLink>
            </Link>
          </li>

          <li>
            <Link asChild>
              <RemixLink
                to={{
                  pathname: "/storefront/components/",
                  search: viewOptionsSearch,
                }}
              >
                Components
              </RemixLink>
            </Link>
          </li>

          <li aria-current="page">{kebabCaseToFirstLetterUpperCase(componentName)}</li>
        </Breadcrumbs>
        {dataQueryVariables ? <ComponentDocs /> : <ShallowComponentDocs />}
      </div>
    </div>
  );
}

function ShallowComponentDocs() {
  const { componentName } = useLoaderData() as LoaderData;

  return (
    <>
      <h1 className="hds-text-h1 hds-mb-24">{kebabCaseToFirstLetterUpperCase(componentName)}</h1>

      <div className="hds-mt-40-48" />
      <h2 className="hds-text-h2 hds-mb-12-16">Examples</h2>
      <Examples
        key={componentName}
        componentName={componentName}
        showCodeByDefault
        preload="viewport"
      />
    </>
  );
}

function ComponentDocs() {
  const { componentName, dataQueryVariables } = useLoaderData() as LoaderData;
  const { data } = useTina(dataQueryVariables!);

  return (
    <>
      <TitleAndDescription {...data.component} />

      <div className="hds-mt-40-48" />
      <h2 className="hds-text-h2 hds-mb-12-16">Examples</h2>
      <Examples
        key={componentName}
        componentName={componentName}
        showCodeByDefault
        preload="viewport"
      />
    </>
  );
}
