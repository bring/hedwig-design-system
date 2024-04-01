import type { MetaFunction } from "@remix-run/node";
import { Link as RemixLink, useSearchParams } from "@remix-run/react";

import {
  ComponentCodeExamples,
  kebabCaseToFirstLetterUpperCase,
} from "../components/component-examples";
import { examplesByComponent } from "../examples";
import styles from "./_layout._index.module.css";

export const meta: MetaFunction = () => {
  return [
    { title: "Examples - Hedwig Design System" },
    { name: "description", content: "A list of usage examples of the Hedwig Design System" },
  ];
};

export default function Index() {
  const [search] = useSearchParams();
  return (
    <>
      <div className="hds-mt-24-32" />
      <h1 style={{ flexGrow: 1 }}>Examples</h1>
      <div className="hds-mt-24-32" />
      <ul
        className={styles.examplesList}
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
        }}
      >
        {Object.entries(examplesByComponent).map(([componentName, examples]) => (
          <li key={componentName}>
            <h2 id={`examples-${componentName}`}>
              <RemixLink
                className={styles.exampleHeadingLink}
                to={{
                  pathname: componentName,
                  search: search.toString(),
                }}
              >
                {kebabCaseToFirstLetterUpperCase(componentName)}
              </RemixLink>
            </h2>
            <div className="hds-mt-12-16" />
            <ComponentCodeExamples examples={examples ?? []} defaultShowCode={false} />
          </li>
        ))}
      </ul>
    </>
  );
}
