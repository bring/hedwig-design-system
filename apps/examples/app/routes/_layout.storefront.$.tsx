import { LoaderFunctionArgs } from "@remix-run/node";
import { client } from "../../tina/__generated__/client";
import { useTina, tinaField } from "tinacms/dist/react";
import { MetaFunction, useLoaderData } from "@remix-run/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { StyledHtml } from "@postenbring/hedwig-react";

import { Examples } from "../components/component-examples";
import { FigmaEmbed, FigmaPreviews } from "../components/figma";
import type { TemplateNames } from "../../tina/templates";

export async function clientLoader({ params }: LoaderFunctionArgs) {
  const slug = params["*"] as string;

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

export const meta: MetaFunction<typeof clientLoader> = ({ data }) => {
  return [
    { title: `${data?.dataQueryVariables.data.post.title} | Hedwig Design System` },
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MDXComponents: Record<TemplateNames, (props: any) => JSX.Element> = {
  Examples: (props: {
    componentName: string;
    exampleName?: string;
    showCodeByDefault?: boolean;
  }) => {
    return (
      <div className="hds-mt-24-32">
        <Examples
          componentName={props.componentName}
          exampleName={props.exampleName}
          showCodeByDefault={props.showCodeByDefault ?? false}
        />
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
  FigmaEmbed: (props: { url: string; hideBottomBar?: boolean }) => {
    return (
      <div className="hds-mt-24-32">
        <FigmaEmbed
          urlToEmbed={props.url}
          height={1200}
          width="80%"
          hideBottomBar={props.hideBottomBar}
        />
      </div>
    );
  },
};
