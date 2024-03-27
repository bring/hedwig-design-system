import type { MetaFunction } from "@remix-run/node";
import { examplesByComponent } from "../examples";
import { Breadcrumbs, Container, Link, Navbar, PrimaryButton } from "@postenbring/hedwig-react";
import {
  ComponentCodeExamples,
  kebabCaseToFirstLetterUpperCase,
} from "../components/component-examples";
import { Link as RemixLink, useSearchParams } from "@remix-run/react";

import "./_index.css";

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
    <>
      <Navbar>
        <Navbar.LogoAndText variant="flagship" asChild>
          <a href="/" aria-label="To the front page">
            <div>
              Hedwig <span className="hidden-on-mobile">Design System</span>
            </div>
          </a>
        </Navbar.LogoAndText>
        <PrimaryButton
          fill="outline"
          size="small"
          as={RemixLink}
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
        </PrimaryButton>
      </Navbar>
      <Container>
        <div className="hds-mt-24-32" />
        <Breadcrumbs>
          <li>
            <Link href="https://hedwig.posten.no">Hedwig Design System</Link>
          </li>
          <li>Examples</li>
        </Breadcrumbs>
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
      </Container>
    </>
  );
}
