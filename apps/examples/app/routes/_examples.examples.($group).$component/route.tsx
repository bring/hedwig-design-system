import {
  isRouteErrorResponse,
  useLoaderData,
  useRouteError,
  Link as RemixLink,
  useSearchParams,
  MetaFunction,
  ClientLoaderFunctionArgs,
} from "@remix-run/react";
import { examplesByComponent } from "../../examples";
import {
  ComponentCodeExamples,
  kebabCaseToFirstLetterUpperCase,
} from "../../components/component-examples";
import { Breadcrumbs, Link, Text } from "@postenbring/hedwig-react";

export async function clientLoader({ params: { group, component } }: ClientLoaderFunctionArgs) {
  if (!component || !(component in examplesByComponent)) {
    throw new Response("Example component not found", { status: 404 });
  }

  return {
    group,
    component,
    examples: examplesByComponent[component]!,
  };
}

export const meta: MetaFunction<typeof clientLoader> = ({ data, error }) => {
  if (error) {
    return [
      {
        title: `404 - Hedwig Design System`,
      },
    ];
  }

  const { component } = data as ReturnType<typeof useLoaderData<typeof clientLoader>>;
  return [
    {
      title: `${kebabCaseToFirstLetterUpperCase(component)} - Hedwig Design System`,
    },
  ];
};

export default function Component() {
  const { group, component, examples } = useLoaderData<typeof clientLoader>();
  const [search] = useSearchParams();
  return (
    <div>
      <Breadcrumbs className="hds-mt-24-32 hds-mb-24-32">
        <li>
          <Link asChild>
            <RemixLink
              to={{
                pathname: "/examples",
                search: search.toString(),
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
    return <div>{error.status === 404 ? "Component not found" : "An error occurred"}</div>;
  }

  return <div>Something went wrong</div>;
}
