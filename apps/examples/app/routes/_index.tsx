import type { MetaFunction } from "@remix-run/node";
import { examplesByComponent } from "../examples";
import { Container, SecondaryButton } from "@postenbring/hedwig-react";
import { ComponentCodeExamples, kebabCaseToFirstLetterUpperCase } from "../component-examples";
import { Link, useSearchParams } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Hedwig Design System | Examples" },
    { name: "description", content: "A list of usage examples of the Hedwig Design System" },
  ];
};

export default function Index() {
  const [search] = useSearchParams();
  const activeTheme = search.get("theme") === "bring" ? "bring" : "posten";
  const nextTheme = activeTheme === "bring" ? "posten" : "bring";

  return (
    <Container>
      <div style={{ display: "flex" }}>
        <h1 style={{ flexGrow: 1 }}>Examples</h1>
        <SecondaryButton
          fill="outline"
          size="small"
          as={Link}
          to={{
            search:
              "?" +
              new URLSearchParams({
                ...Object.fromEntries(search),
                theme: nextTheme,
              }).toString(),
          }}
        >
          {kebabCaseToFirstLetterUpperCase(activeTheme)}
        </SecondaryButton>
      </div>
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          display: "flex",
          flexDirection: "column",
          marginTop: "var(--hds-spacing-32-40)",
          gap: "var(--hds-spacing-32-40)",
        }}
      >
        {Object.entries(examplesByComponent).map(([componentName, examples]) => (
          <li key={componentName}>
            <ComponentCodeExamples examples={examples ?? []} />
          </li>
        ))}
      </ul>
    </Container>
  );
}
