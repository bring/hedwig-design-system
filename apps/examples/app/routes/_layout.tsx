import { Container, Navbar, PrimaryButton } from "@postenbring/hedwig-react";
import { Outlet, useSearchParams, Link as RemixLink } from "@remix-run/react";

import { kebabCaseToFirstLetterUpperCase } from "../components/component-examples";
import "./_layout.css";

export default function Layout() {
  const [search] = useSearchParams();
  const activeTheme = search.get("theme") === "bring" ? "bring" : "posten";
  const nextTheme = activeTheme === "bring" ? "posten" : "bring";

  return (
    <div>
      <Navbar>
        <Navbar.LogoAndText variant="flagship" asChild>
          <div>
            <RemixLink to="/" aria-label="To the front page">
              Hedwig <span className="hidden-on-mobile">Design System</span>
            </RemixLink>
          </div>
        </Navbar.LogoAndText>
        <Navbar.Navigation>
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
        </Navbar.Navigation>
      </Navbar>

      <Container>
        <Outlet />
      </Container>
    </div>
  );
}
