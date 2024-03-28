import type { MetaFunction } from "@remix-run/node";

import { ComponentCodeExamples } from "../components/component-examples";
import { examplesByComponent } from "../examples";

export const meta: MetaFunction = () => {
  return [
    { title: "Examples - Hedwig Design System" },
    { name: "description", content: "A list of usage examples of the Hedwig Design System" },
  ];
};

export default function Index() {
  return (
    <>
      <div className="hds-mt-24-32" />
      <h1 style={{ flexGrow: 1 }}>Examples</h1>
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
    </>
  );
}
