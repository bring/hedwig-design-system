import { useLoaderData, MetaFunction, Link as RemixLink, useSearchParams } from "@remix-run/react";
import { Examples, kebabCaseToFirstLetterUpperCase } from "../../components/component-examples";
import { client } from "../../../tina/__generated__/client";

import { useTina } from "tinacms/dist/react";
import {
  ComponentsSidebar,
  getComponent,
  getComponentsByGroup,
} from "../_storefront.storefront.components._index/route";
import { LoaderFunctionArgs } from "@remix-run/node";
import { TitleAndDescription } from "../_storefront.storefront.$/route";
import { Breadcrumbs, Link } from "@postenbring/hedwig-react";

export async function clientLoader({ params }: LoaderFunctionArgs) {
  const slug = params["*"];
  const componentsByGroup = await getComponentsByGroup();
  const componentName = getComponent(componentsByGroup, slug ?? "");
  if (!componentName) {
    throw new Response("Not found", { status: 404 });
  }

  let dataQueryVariables:
    | Pick<Awaited<ReturnType<typeof client.queries.component>>, "data" | "query" | "variables">
    | undefined = undefined;
  try {
    const { data, query, variables } = await client.queries.component({
      relativePath: `${componentName}.mdx`,
    });
    dataQueryVariables = {
      data,
      query,
      variables,
    };
  } catch (e) {
    // Do nothing
  }

  return {
    componentName,
    componentsByGroup,
    dataQueryVariables,
  };
}

export const meta: MetaFunction<typeof clientLoader> = ({ data }) => {
  if (!data) return [];
  return [
    {
      title: `${data?.dataQueryVariables?.data.component.title ?? kebabCaseToFirstLetterUpperCase(data.componentName)} - Hedwig Design System`,
    },
    {
      name: "description",
      content: data?.dataQueryVariables?.data.component.description,
    },
  ];
};

function ShallowComponentDocs() {
  const { componentName } = useLoaderData<typeof clientLoader>();

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
  const { componentName, dataQueryVariables } = useLoaderData<typeof clientLoader>();
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

export default function Component() {
  const { componentName, componentsByGroup, dataQueryVariables } =
    useLoaderData<typeof clientLoader>();
  const [search] = useSearchParams();

  return (
    <div className="docs-container hds-mt-40-48">
      <ComponentsSidebar componentsByGroup={componentsByGroup} />
      <div data-docs-area="main">
        <Breadcrumbs olProps={{ style: { marginTop: 0 } }}>
          <li>
            <Link asChild>
              <RemixLink
                to={{
                  pathname: "/storefront",
                  search: search.toString(),
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
                  pathname: "/storefront/components",
                  search: search.toString(),
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
