import type { MetaFunction } from "@remix-run/node";
import { Link as RemixLink, useLocation, useSearchParams } from "@remix-run/react";

import {
  ComponentCodeExamples,
  kebabCaseToFirstLetterUpperCase,
} from "../components/component-examples";
import { componentsByGroup } from "../examples";
import styles from "./_layout._index.module.css";
import { Grid, Link, LinkList } from "@postenbring/hedwig-react";
import { useEffect } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "Examples - Hedwig Design System" },
    { name: "description", content: "A list of usage examples of the Hedwig Design System" },
  ];
};

function ExamplesMenu() {
  const location = useLocation();
  const [search] = useSearchParams();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView();
      }
    }
  }, [location.hash]);

  return (
    <div className="docs-sidebar">
      {Object.entries(componentsByGroup).map(([groupName, components]) => (
        <div key={groupName}>
          {groupName !== "default" && (
            <h2 className="hds-text-body-title hds-mt-24-32 hds-mb-8-12">
              {kebabCaseToFirstLetterUpperCase(groupName)}
            </h2>
          )}
          <LinkList>
            {Object.keys(components).map((componentName) => (
              <li key={componentName}>
                <Link variant="underline" asChild>
                  <RemixLink
                    to={{
                      pathname:
                        groupName !== "default" ? `${groupName}/${componentName}` : componentName,
                      search: search.toString(),
                    }}
                  >
                    {kebabCaseToFirstLetterUpperCase(componentName)}
                  </RemixLink>
                </Link>
              </li>
            ))}
          </LinkList>
        </div>
      ))}
    </div>
  );
}

export default function Index() {
  const [search] = useSearchParams();
  return (
    <>
      <ExamplesMenu />
      <div>
        <h1 className="hds-text-h1 hds-mt-40-48 hds-mb-32-40">Examples</h1>
        {Object.entries(componentsByGroup).map(([groupName, components]) => (
          <div key={groupName}>
            {groupName !== "default" && (
              <h2 className="hds-text-h1 hds-mt-48-64 hds-mb-24-32" id={`examples-${groupName}`}>
                {kebabCaseToFirstLetterUpperCase(groupName)}
              </h2>
            )}

            <Grid gap="32-40" span={{ large: 6 }} asChild>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                }}
              >
                {Object.entries(components).map(([componentName, examples]) => (
                  <li key={componentName}>
                    <h2 id={`examples-${componentName}`}>
                      <RemixLink
                        className={styles.exampleHeadingLink}
                        to={{
                          pathname:
                            groupName !== "default"
                              ? `${groupName}/${componentName}`
                              : componentName,
                          search: search.toString(),
                        }}
                      >
                        {kebabCaseToFirstLetterUpperCase(componentName)}
                      </RemixLink>
                    </h2>
                    <div className="hds-mt-12-16" />
                    <ComponentCodeExamples
                      examples={examples ?? []}
                      defaultShowCode={false}
                      preload="intent"
                    />
                  </li>
                ))}
              </ul>
            </Grid>
          </div>
        ))}
      </div>
    </>
  );
}
