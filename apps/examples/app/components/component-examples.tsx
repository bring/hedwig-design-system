import { useSearchParams, Link } from "@remix-run/react";
import { Chip } from "./chip";
import { CodeExample } from "./code-example";
import { Example, examplesByComponent } from "../examples";
import { HStack, VStack } from "@postenbring/hedwig-react";
import { useState } from "react";
import { PrefetchBehavior, usePrefetchBehavior } from "./use-prefetch-behaviour";

export function Examples({
  name,
  showCodeByDefault,
}: {
  name: string;
  showCodeByDefault?: boolean;
  preload?: PrefetchBehavior;
}) {
  if (!(name in examplesByComponent)) {
    return null;
  }

  return (
    <ComponentCodeExamples
      examples={examplesByComponent[name]!}
      defaultShowCode={showCodeByDefault}
    />
  );
}

export function ComponentCodeExamples({
  examples,
  defaultShowCode,
  preload = "none",
}: {
  examples: Example[];
  defaultShowCode?: boolean;
  preload?: PrefetchBehavior;
}) {
  const [search] = useSearchParams();
  const [activeExample, setActiveExample] = useState(
    () => examples.find((example) => example.exampleName === search.get("example")) ?? examples[0],
  );
  const [shouldPreload, preloadRef, preloadHandlers] = usePrefetchBehavior<HTMLDivElement>(
    preload,
    {},
  );

  return (
    <VStack gap="16" ref={preloadRef} {...preloadHandlers}>
      <HStack wrap gap="8">
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
              onClick={() => {
                setActiveExample(example);
              }}
            >
              {kebabCaseToFirstLetterUpperCase(example.exampleName)}
            </Link>
          </Chip>
        ))}
      </HStack>

      <CodeExample
        activeExample={activeExample}
        defaultShowCode={defaultShowCode}
        allExamples={examples}
        shouldPreload={shouldPreload}
      />
    </VStack>
  );
}

export function kebabCaseToFirstLetterUpperCase(kebabCase: string) {
  const s = kebabCase.replaceAll("-", " ");
  return (s.at(0)?.toUpperCase() ?? "") + s.slice(1);
}
