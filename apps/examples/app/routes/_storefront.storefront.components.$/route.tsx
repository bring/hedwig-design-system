import { useLoaderData, MetaFunction, Link as RemixLink, LoaderFunctionArgs } from "react-router";
import {
  Examples,
  existsExamplesForComponent,
  kebabCaseToFirstLetterUpperCase,
} from "../../components/component-examples";
import { client } from "../../../tina/__generated__/client";

import { tinaField, useTina } from "tinacms/dist/react";
import {
  ComponentsSidebar,
  getComponent,
  getComponentsByGroup,
} from "../_storefront.storefront.components._index/route";
import { TitleAndDescription } from "../_storefront.storefront.$/route";
import { Badge, Breadcrumbs, Link } from "@postenbring/hedwig-react";
import { useViewOptionsSearch } from "../../root";
import { ComponentQuery } from "../../../tina/__generated__/types";

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
    (edge) => edge?.node?._sys.filename === componentName,
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
        <Breadcrumbs
          olProps={{ style: { marginTop: 0, marginBottom: "var(--hds-spacing-24-32)" } }}
        >
          <li>
            <Link asChild>
              <RemixLink
                to={{
                  pathname: "/storefront/",
                  search: viewOptionsSearch,
                }}
                prefetch="intent"
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
                prefetch="intent"
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
      <h1 className="hds-text-h1 hds-mb-16-20">{kebabCaseToFirstLetterUpperCase(componentName)}</h1>

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

function ComponentStatus({ data }: { data: ComponentQuery }) {
  if (!data.component.status) return null;
  return (
    <Badge
      data-tina-field={tinaField(data.component, "status")}
      variant={
        data.component.status === "ready-to-use"
          ? "darker"
          : data.component.status === "work-in-progress"
            ? "warning"
            : undefined
      }
    >
      {kebabCaseToFirstLetterUpperCase(data.component.status)}
    </Badge>
  );
}

function ComponentDocs() {
  const { componentName, dataQueryVariables } = useLoaderData() as LoaderData;
  const { data } = useTina(dataQueryVariables!);

  return (
    <>
      <TitleAndDescription
        {...data.component}
        extraStuff={
          data.component.status && (
            <div style={{ alignSelf: "center" }}>
              <ComponentStatus data={data} />
            </div>
          )
        }
      />

      <div className="hds-mt-40-48" />
      {existsExamplesForComponent(componentName) && (
        <>
          <h2 className="hds-text-h2 hds-mb-12-16">Examples</h2>
          <Examples
            key={componentName}
            componentName={componentName}
            showCodeByDefault
            preload="viewport"
          />
        </>
      )}
    </>
  );
}
