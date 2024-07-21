import { useLoaderData, Link as RemixLink, useSearchParams } from "@remix-run/react";
import { componentsByGroup as exampleComponentsByGroup } from "../../examples";
import { Examples, kebabCaseToFirstLetterUpperCase } from "../../components/component-examples";
import { Grid, Link } from "@postenbring/hedwig-react";

import styles from "./styles.module.css";

export function clientLoader() {
  // Use the examples for now
  const whitelistedGroups = ["default", "layout", "loaders"];
  const componentsByGroup = Object.entries(exampleComponentsByGroup)
    .sort(([a], [b]) => a.localeCompare(b))
    .filter(([groupName]) => whitelistedGroups.includes(groupName))
    .map(([groupName, components]) => ({
      groupName,
      components: Object.keys(components),
    }));

  return { componentsByGroup };
}

export default function Component() {
  const data = useLoaderData<typeof clientLoader>();
  const [search] = useSearchParams();

  return (
    <div className="docs-container hds-mt-40-48">
      <div style={{ gridArea: "sidebar" }}>Sidebar</div>
      <div style={{ gridArea: "main" }}>
        {/* Components links, grouped */}
        {data.componentsByGroup.map(({ groupName, components }) => (
          <div key={groupName}>
            {groupName !== "default" && (
              <h2 className="hds-text-h1 hds-mt-48-64 hds-mb-24-32">
                {kebabCaseToFirstLetterUpperCase(groupName)}
              </h2>
            )}

            <Grid asChild gap="20-24" span={{ small: 6, large: 4 }}>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                }}
              >
                {components.map((componentName, i) => (
                  <li key={componentName} className={styles.componentItem}>
                    <h2 className="hds-text-h3-title" id={`examples-${componentName}`}>
                      <Link asChild variant="solid" className={styles.componentHeadingLink}>
                        <RemixLink
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
                      </Link>
                    </h2>
                    <div className="hds-mt-12-16" />
                    <Examples
                      componentName={componentName}
                      shouldPreload={groupName === "default" && i < 4}
                      onlyFirstExample
                      onlyIframe
                    />
                  </li>
                ))}
              </ul>
            </Grid>
          </div>
        ))}
      </div>
    </div>
  );
}
