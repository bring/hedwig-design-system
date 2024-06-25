import { LoaderFunctionArgs } from "@remix-run/node";
import { client } from "../../../tina/__generated__/client";
import { useTina, tinaField } from "tinacms/dist/react";
import { MetaFunction, isRouteErrorResponse, useLoaderData, useRouteError } from "@remix-run/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { StyledHtml } from "@postenbring/hedwig-react";

import { MDXComponents } from "./mdx-components";

export async function clientLoader({ params }: LoaderFunctionArgs) {
  const slug = params["*"] as string;

  try {
    const { data, query, variables } = await client.queries.post({
      relativePath: slug + ".mdx",
    });

    return {
      dataQueryVariables: {
        data,
        query,
        variables,
      },
    };
  } catch (e) {
    console.error(e);
    throw new Response("Not found", { status: 404 });
  }
}

export const meta: MetaFunction<typeof clientLoader> = ({ data }) => {
  return [
    { title: `${data?.dataQueryVariables.data.post.title} - Hedwig Design System` },
    {
      name: "description",
      content: data?.dataQueryVariables.data.post.subtitle,
    },
  ];
};

export default function Component() {
  const { dataQueryVariables } = useLoaderData<typeof clientLoader>();
  const { data } = useTina(dataQueryVariables);

  return (
    <div>
      <h1
        className="hds-text-h1 hds-mt-48-64 hds-mb-32-40"
        data-tina-field={tinaField(data.post, "title")}
      >
        {data.post.title}
      </h1>
      {data.post.subtitle && (
        <p className="hds-mt-24-32 hds-text-h3" data-tina-field={tinaField(data.post, "subtitle")}>
          {data.post.subtitle}
        </p>
      )}
      <StyledHtml className="hds-mt-48-64">
        <TinaMarkdown content={data.post.body} components={MDXComponents} />
      </StyledHtml>
    </div>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  // Page not found
  if (isRouteErrorResponse(error) && error.status === 404) {
    return (
      <div className="hds-mt-40-48">
        <h1>Page not found</h1>
        <p className="hds-mt-40-48">
          The page you are looking for does not exist. Please check the URL or go back to the
          previous page.
        </p>
      </div>
    );
  }

  // System error
  return (
    <div className="hds-mt-40-48">
      <h1>Something went wrong</h1>
      <pre className="hds-mt-40-48">{JSON.stringify(error, null, 2)}</pre>
    </div>
  );
}
