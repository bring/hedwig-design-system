import { Link } from "react-router";
import { Chip } from "./chip";
import { CodeExample } from "./code-example";
import { Example, examplesByComponent } from "../examples";
import { HStack, VStack } from "@postenbring/hedwig-react";
import { useState } from "react";
import { PrefetchBehavior, usePrefetchBehavior } from "./use-prefetch-behaviour";
import { useViewOptionsSearch } from "../root";

export function Examples({
  componentName,
  exampleName,
  onlyIframe,
  onlyFirstExample,
  showCodeByDefault,
  shouldPreload,
  preload,
  scale,
}: {
  componentName: string;
  exampleName?: string;
  onlyFirstExample?: boolean;
  onlyIframe?: boolean;
  showCodeByDefault?: boolean;
  shouldPreload?: boolean;
  preload?: PrefetchBehavior;
  scale?: number;
}) {
  const singleExample = exampleName
    ? examplesByComponent[componentName].find((e) => e.exampleName === exampleName)
    : onlyFirstExample
      ? examplesByComponent[componentName][0]
      : undefined;
  if (singleExample) {
    return (
      <CodeExample
        activeExample={singleExample}
        showCodeByDefault={showCodeByDefault}
        hideDescription={onlyIframe}
        hideActions={onlyIframe}
        shouldPreload={shouldPreload}
        scale={scale}
      />
    );
  } else
    return (
      <ComponentCodeExamples
        examples={examplesByComponent[componentName]!}
        showCodeByDefault={showCodeByDefault}
        preload={preload}
      />
    );
}

export function ComponentCodeExamples({
  examples,
  showCodeByDefault,
  preload = "none",
}: {
  examples: Example[];
  showCodeByDefault?: boolean;
  preload?: PrefetchBehavior;
}) {
  const viewOptionsSearch = useViewOptionsSearch();
  const [activeExample, setActiveExample] = useState(examples[0]);
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
                search: viewOptionsSearch,
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
        showCodeByDefault={showCodeByDefault}
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
