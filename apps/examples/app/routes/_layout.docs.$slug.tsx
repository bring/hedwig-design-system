import { LoaderFunctionArgs } from "@remix-run/node";
import { client } from "../../tina/__generated__/client";
import { useTina } from "tinacms/dist/react";
import { useLoaderData } from "@remix-run/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { StyledHtml } from "@postenbring/hedwig-react";
import { Examples } from "../components/component-examples";
import { FigmaPreviews } from "../components/figma";

export async function loader({ params }: LoaderFunctionArgs) {
  const slug = params.slug as string;

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
}

export default function Component() {
  const { dataQueryVariables } = useLoaderData<typeof loader>();
  const { data } = useTina(dataQueryVariables);
  return (
    <div>
      <h1>{data.post.title}</h1>
      {data.post.subtitle && <p className="hds-mt-12-16 hds-text-h3">{data.post.subtitle}</p>}
      <StyledHtml className="hds-mt-24-32">
        <TinaMarkdown content={data.post.body} components={MDXComponents} />
      </StyledHtml>
    </div>
  );
}

const MDXComponents = {
  Examples: (props: { name: string; showCodeByDefault?: boolean }) => {
    const name = props.name;
    const showCodeByDefault = props.showCodeByDefault || false;
    return (
      <div className="hds-mt-24-32">
        <Examples name={name} showCodeByDefault={showCodeByDefault} />
      </div>
    );
  },
  FigmaPreviews: (props: { urls: string[] }) => {
    const urls = props.urls;
    return (
      <div className="hds-mt-24-32">
        <FigmaPreviews urls={urls} />
      </div>
    );
  },
};
