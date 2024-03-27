import { useSearchParams, Link } from "@remix-run/react";
import { Chip } from "./chip";
import { CodeExample } from "./code-example";
import { Example, examplesByComponent } from "../examples";

export function Examples({ name }: { name: string }) {
  if (!(name in examplesByComponent)) {
    return null;
  }

  return <ComponentCodeExamples examples={examplesByComponent[name]!} hideTitle />;
}

export function ComponentCodeExamples({
  examples,
  hideTitle = false,
}: {
  examples: Example[];
  hideTitle?: boolean;
}) {
  const [search] = useSearchParams();

  const componentName = examples[0].componentName;
  const activeExample =
    examples.find((example) => example.exampleName === search.get("example")) ?? examples[0];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--hds-spacing-16)",
        flexWrap: "wrap",
      }}
    >
      {!hideTitle && <h2>{kebabCaseToFirstLetterUpperCase(componentName)}</h2>}
      <div
        style={{
          display: "flex",
          gap: "var(--hds-spacing-8)",
          flexWrap: "wrap",
        }}
      >
        {examples?.map((example) => (
          <Chip
            key={example.exampleName}
            active={activeExample.exampleName === example.exampleName}
            asChild
          >
            <Link
              replace
              preventScrollReset
              to={{
                search:
                  "?" +
                  new URLSearchParams({
                    ...Object.fromEntries(search),
                    example: example.exampleName,
                  }).toString(),
              }}
            >
              {kebabCaseToFirstLetterUpperCase(example.exampleName)}
            </Link>
          </Chip>
        ))}
      </div>

      <CodeExample example={activeExample} />
    </div>
  );
}

export function kebabCaseToFirstLetterUpperCase(kebabCase: string) {
  const s = kebabCase.replaceAll("-", " ");
  return s[0].toUpperCase() + s.slice(1);
}
