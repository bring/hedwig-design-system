import {
  isRouteErrorResponse,
  useLoaderData,
  useRouteError,
  Link as RemixLink,
  MetaFunction,
  LoaderFunctionArgs,
} from "react-router";
import { examplesByComponent } from "../../examples";
import {
  ComponentCodeExamples,
  kebabCaseToFirstLetterUpperCase,
} from "../../components/component-examples";
import { Breadcrumbs, Link, Text } from "@postenbring/hedwig-react";
import { useViewOptionsSearch } from "../../root";

export async function loader({ params }: LoaderFunctionArgs) {
  const group = params.group;
  let component = params.component;
  component = component?.replace(/\/$/, "");

  if (!component || !(component in examplesByComponent)) {
    throw new Response("Example component not found", { status: 404 });
  }

  return {
    group,
    component,
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

  const { component } = data as LoaderData;
  return [
    {
      title: `${kebabCaseToFirstLetterUpperCase(component)} examples - Hedwig Design System`,
    },
  ];
};

export default function Component() {
  const { group, component } = useLoaderData() as LoaderData;
  const examples = examplesByComponent[component];

  const viewOptionsSearch = useViewOptionsSearch();
  return (
    <div>
      <Breadcrumbs className="hds-mt-24-32 hds-mb-24-32">
        <li>
          <Link asChild>
            <RemixLink
              to={{
                pathname: "/examples/",
                search: viewOptionsSearch,
              }}
            >
              Examples
            </RemixLink>
          </Link>
        </li>

        {group && <li>{kebabCaseToFirstLetterUpperCase(group)}</li>}

        <li aria-current="page">{kebabCaseToFirstLetterUpperCase(component)}</li>
      </Breadcrumbs>
      <Text as="h1" variant="h2">
        {kebabCaseToFirstLetterUpperCase(component)}
      </Text>
      <div className="hds-mt-12-16" />
      <ComponentCodeExamples examples={examples} preload="render" />
    </div>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return <div>{error.status === 404 ? "Example not found" : "An error occurred"}</div>;
  }

  return <div>Something went wrong</div>;
}
