import {
  LoaderFunctionArgs,
  MetaFunction,
  isRouteErrorResponse,
  useLoaderData,
  useRouteError,
} from "react-router";
import { PageQuery } from "../../../tina/__generated__/types";
import { client } from "../../../tina/__generated__/client";
import { useTina, tinaField } from "tinacms/dist/react";
import { Blocks } from "./block-components";
import { Container } from "@postenbring/hedwig-react";

export async function loader({ params }: LoaderFunctionArgs) {
  let slug = params["*"] || "home";
  slug = slug.replace(/\/$/, "");

  const { data, query, variables } = await client.queries.page({
    relativePath: slug + ".mdx",
  });

  return {
    dataQueryVariables: {
      data,
      query,
      variables,
    },
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

  const { dataQueryVariables } = data as LoaderData;
  return [
    { title: `${dataQueryVariables.data.page.title} - Hedwig Design System` },
    {
      name: "description",
      content: dataQueryVariables.data.page.description,
    },
  ];
};

export function TitleAndDescription(props: { title: string; description?: string | null }) {
  return (
    <>
      <h1 className="hds-text-h1 hds-mb-16-20" data-tina-field={tinaField(props, "title")}>
        {props.title}
      </h1>
      {props.description && (
        <p
          className="hds-text-h3 hds-mb-48-64"
          style={{ maxWidth: "590px" }} // Max width text. Copied from slim container. TODO: Make this a known design token for text length
          data-tina-field={tinaField(props, "description")}
        >
          {props.description}
        </p>
      )}
    </>
  );
}

export function PageContent({ data }: { data: PageQuery }) {
  return (
    <div>
      {!data.page.hideTitleAndDescription && <TitleAndDescription {...data.page} />}
      {data.page.blocks && <Blocks blocks={data.page.blocks} />}
    </div>
  );
}

export default function Component() {
  const { dataQueryVariables } = useLoaderData() as LoaderData;
  const { data } = useTina(dataQueryVariables);

  return (
    <Container className="hds-mt-40-48">
      <PageContent data={data} />
    </Container>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  // Page not found
  if (isRouteErrorResponse(error) && error.status === 404) {
    return (
      <Container className="hds-mt-40-48">
        <h1>Page not found</h1>
        <p className="hds-mt-40-48">
          The page you are looking for does not exist. Please check the URL or go back to the
          previous page.
        </p>
      </Container>
    );
  }

  // System error
  return (
    <Container className="hds-mt-40-48">
      <h1>Something went wrong</h1>
      <pre className="hds-mt-40-48">{JSON.stringify(error, null, 2)}</pre>
    </Container>
  );
}
