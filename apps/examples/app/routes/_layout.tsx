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
      <Navbar variant="service">
        <Navbar.LogoAndServiceText variant="flagship" asChild>
          <RemixLink
            to={{
              pathname: "/",
              search: activeTheme === "bring" ? "?theme=bring" : "",
            }}
            aria-label="To the front page"
          >
            <div>
              Hedwig <span className="hidden-before-large">Design System</span>
            </div>
          </RemixLink>
        </Navbar.LogoAndServiceText>
        <Navbar.Navigation>
          <Navbar.Button
            icon={
              <svg aria-hidden viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5 5.5C5 4.26953 5.98438 3.25 7.25 3.25H13.0508C13.6484 3.25 14.2109 3.49609 14.6328 3.91797L17.832 7.11719C18.2539 7.53906 18.5 8.10156 18.5 8.69922V19C18.5 20.2656 17.4805 21.25 16.25 21.25H7.25C5.98438 21.25 5 20.2656 5 19V5.5ZM16.8125 19V8.875H14C13.3672 8.875 12.875 8.38281 12.875 7.75V4.9375H7.25C6.93359 4.9375 6.6875 5.21875 6.6875 5.5V19C6.6875 19.3164 6.93359 19.5625 7.25 19.5625H16.25C16.5312 19.5625 16.8125 19.3164 16.8125 19Z"
                  fill="currentColor"
                />
              </svg>
            }
            as={RemixLink}
            to="/mdx-test"
          >
            Docs
          </Navbar.Button>
          <Navbar.Button
            icon={
              <svg aria-hidden viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z" />
              </svg>
            }
            as={RemixLink}
            to="/figma-test"
          >
            Figma
          </Navbar.Button>
          <PrimaryButton
            fill="outline"
            size="small"
            as={RemixLink}
            style={{ marginLeft: "var(--hds-spacing-16)", alignSelf: "center" }}
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

      <div>
        {/* TODO: Sidebar */}
        <Container>
          <Outlet />
        </Container>
      </div>
      <div className="hds-mt-80-120" />
    </div>
  );
}
