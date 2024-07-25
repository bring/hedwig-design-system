import { useLoaderData, MetaFunction, Link as RemixLink, LoaderFunctionArgs } from "react-router";
import { Examples, kebabCaseToFirstLetterUpperCase } from "../../components/component-examples";
import { client } from "../../../tina/__generated__/client";

import { tinaField, useTina } from "tinacms/dist/react";
import { TitleAndDescription } from "../_storefront.storefront.$/route";
import { Badge, Breadcrumbs, Link, StyledHtml } from "@postenbring/hedwig-react";
import { useViewOptionsSearch } from "../../root";
import { ComponentQuery } from "../../../tina/__generated__/types";
import { getDocsComponent } from "../_storefront.storefront.components._components/route";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { MDXComponents } from "../_storefront.storefront.$/mdx-components";

export async function loader({ params }: LoaderFunctionArgs) {
  let slug = params["*"] ?? "";
  slug = slug.replace(/\/$/, "");

  const docsComponent = await getDocsComponent(slug);
  if (!docsComponent) {
    throw new Response("Not Found", { status: 404 });
  }

  const dataQueryVariables = docsComponent.cmsContent
    ? await client.queries.component({
        relativePath: `${docsComponent.componentName}.mdx`,
      })
    : undefined;
  if (dataQueryVariables) delete dataQueryVariables["errors"];

  return {
    docsComponent,
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

  const { docsComponent, dataQueryVariables } = data as LoaderData;
  return [
    {
      title: `${docsComponent.title} - Hedwig Design System`,
    },
    {
      name: "description",
      content: dataQueryVariables?.data.component.description,
    },
  ];
};

export default function Component() {
  const { docsComponent, dataQueryVariables } = useLoaderData() as LoaderData;
  const viewOptionsSearch = useViewOptionsSearch();

  return (
    <div data-docs-area="main">
      <Breadcrumbs olProps={{ style: { marginTop: 0, marginBottom: "var(--hds-spacing-24-32)" } }}>
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

        <li aria-current="page">{docsComponent.title}</li>
      </Breadcrumbs>
      {dataQueryVariables ? <ComponentDocs /> : <ShallowComponentDocs />}
    </div>
  );
}

function ShallowComponentDocs() {
  const { docsComponent } = useLoaderData() as LoaderData;

  return (
    <>
      <h1 className="hds-text-h1 hds-mb-16-20">{docsComponent.title}</h1>

      {docsComponent.hasExamples && (
        <>
          <h2 className="hds-text-h2 hds-mt-40-48 hds-mb-16-20">Examples</h2>
          <Examples
            key={docsComponent.componentName}
            componentName={docsComponent.componentName}
            showCodeByDefault
            preload="viewport"
          />
        </>
      )}
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
  const { docsComponent, dataQueryVariables } = useLoaderData() as LoaderData;
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

      {data.component.body && (
        <StyledHtml size="small" className="hds-mb-48-64" style={{ maxWidth: "590px" }}>
          <TinaMarkdown content={data.component.body} components={MDXComponents} />
        </StyledHtml>
      )}

      {docsComponent.hasExamples && (
        <>
          <h2 className="hds-text-h2 hds-mt-40-48 hds-mb-16-20">Examples</h2>
          <Examples
            key={docsComponent.componentName}
            componentName={docsComponent.componentName}
            showCodeByDefault
            preload="viewport"
          />
        </>
      )}
    </>
  );
}
