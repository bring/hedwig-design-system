import {
  ClientLoaderFunctionArgs,
  isRouteErrorResponse,
  useLoaderData,
  useRouteError,
} from "@remix-run/react";
import { examplesByComponent } from "../examples";
import { ComponentCodeExamples } from "../component-examples";
import { Container } from "@postenbring/hedwig-react";

export async function clientLoader({ params: { component } }: ClientLoaderFunctionArgs) {
  if (!component || !(component in examplesByComponent)) {
    throw new Response("Example component not found", { status: 404 });
  }

  return examplesByComponent[component]!;
}

export default function Component() {
  const examples = useLoaderData<typeof clientLoader>();
  return (
    <Container>
      <ComponentCodeExamples examples={examples} />
    </Container>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return <div>{error.status === 404 ? "Component" : "An error occurred"}</div>;
  }

  return <div>Something went wrong</div>;
}
