import {
  isRouteErrorResponse,
  useRouteError,
  Link as RemixLink,
  MetaFunction,
  useParams,
} from "react-router";
import { examplesByComponent } from "../examples";
import {
  ComponentCodeExamples,
  kebabCaseToFirstLetterUpperCase,
} from "../components/component-examples";
import { Breadcrumbs, Link, Text } from "@postenbring/hedwig-react";

export const meta: MetaFunction = ({ params: { component }, error }) => {
  if (error) {
    return [
      {
        title: `404 - Hedwig Design System`,
      },
    ];
  }

  return [
    {
      title: `${kebabCaseToFirstLetterUpperCase(component ?? "")} - Hedwig Design System`,
    },
  ];
};

export default function Component() {
  const { group, component } = useParams() as { group?: string; component: string };
  const examples = examplesByComponent[component]!;

  return (
    <div>
      <Breadcrumbs className="hds-mt-24-32 hds-mb-24-32">
        <li>
          <Link asChild>
            <RemixLink
              to={{
                pathname: "../",
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
