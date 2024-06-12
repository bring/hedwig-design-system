import "@postenbring/hedwig-css";
import "./_layout.css";

import { useEffect } from "react";
import {
  Container,
  Footer,
  HStack,
  Navbar,
  Button,
  VStack,
  useNavbarExpendableMenuContext,
} from "@postenbring/hedwig-react";
import { Outlet, useSearchParams, Link as RemixLink, useLocation } from "@remix-run/react";

import { kebabCaseToFirstLetterUpperCase } from "../components/component-examples";

export default function Layout() {
  const [search] = useSearchParams();
  const activeTheme = search.get("theme") === "bring" ? "bring" : "posten";
  const nextTheme = activeTheme === "bring" ? "posten" : "bring";

  /**
   * When navigating inside an SPA from the expandable menu we need to manually ensure it closes.
   * when navgating using pure `a` links the browser handles this for us by reloading the page
   */
  function CloseExpandableMenuOnNavigation() {
    const location = useLocation();
    const { open, setOpen } = useNavbarExpendableMenuContext();

    useEffect(() => {
      if (open) {
        setOpen(false);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps -- I know better
    }, [location.key]);

    return null;
  }

  function NavbarMenuItems() {
    const [search] = useSearchParams();
    const preview = search.has("preview");

    return (
      <>
        {/* Disable the PoC routes by default, as to not confuse people visting. */}
        {preview && (
          <>
            <Navbar.LinkItem asChild>
              <RemixLink
                to={{
                  pathname: "/mdx-test",
                  search: activeTheme === "bring" ? "?theme=bring" : "",
                }}
              >
                Docs
                <Navbar.ItemIcon>
                  <svg
                    aria-hidden
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 5.5C5 4.26953 5.98438 3.25 7.25 3.25H13.0508C13.6484 3.25 14.2109 3.49609 14.6328 3.91797L17.832 7.11719C18.2539 7.53906 18.5 8.10156 18.5 8.69922V19C18.5 20.2656 17.4805 21.25 16.25 21.25H7.25C5.98438 21.25 5 20.2656 5 19V5.5ZM16.8125 19V8.875H14C13.3672 8.875 12.875 8.38281 12.875 7.75V4.9375H7.25C6.93359 4.9375 6.6875 5.21875 6.6875 5.5V19C6.6875 19.3164 6.93359 19.5625 7.25 19.5625H16.25C16.5312 19.5625 16.8125 19.3164 16.8125 19Z"
                      fill="currentColor"
                    />
                  </svg>
                </Navbar.ItemIcon>
              </RemixLink>
            </Navbar.LinkItem>
            <Navbar.LinkItem asChild>
              <RemixLink
                to={{
                  pathname: "/figma-test",
                  search: activeTheme === "bring" ? "?theme=bring" : "",
                }}
              >
                Figma
                <Navbar.ItemIcon>
                  <svg aria-hidden viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z" />
                  </svg>
                </Navbar.ItemIcon>
              </RemixLink>
            </Navbar.LinkItem>
          </>
        )}
        <Navbar.Item>
          <Button variant="primary-outline" size="small" asChild>
            <RemixLink
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
            </RemixLink>
          </Button>
        </Navbar.Item>
      </>
    );
  }

  return (
    <VStack style={{ minHeight: "100vh" }}>
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

        {/* Mobile */}
        <Navbar.Navigation className="hidden-after-medium">
          <Navbar.ExpandableMenu>
            <Navbar.ExpandableMenuTrigger
              whenClosedText="Meny"
              whenClosedHelperTitle="Open menu"
              whenOpenText="Close"
              whenOpenHelperTitle="Close menu"
            />
            <Navbar.ExpandableMenuContent>
              <CloseExpandableMenuOnNavigation />
              <Container>
                <VStack align="start">
                  <NavbarMenuItems />
                </VStack>
              </Container>
            </Navbar.ExpandableMenuContent>
          </Navbar.ExpandableMenu>
        </Navbar.Navigation>

        {/* Desktop */}
        <Navbar.Navigation className="hidden-before-medium">
          <NavbarMenuItems />
        </Navbar.Navigation>
      </Navbar>

      <div style={{ flexGrow: 1 }} className="docs-container">
        <Outlet />
      </div>

      <div className="hds-mt-80-120" />

      <Footer variant="slim">
        <Container>
          <div className="hds-footer__logo-row">
            <Footer.Logo asChild>
              <RemixLink
                to={{
                  pathname: "/",
                  search: activeTheme === "bring" ? "?theme=bring" : "",
                }}
                aria-label="To the front page"
              />
            </Footer.Logo>

            <div className="hds-footer__copyright-and-links">
              <span className="hds-footer__copyright">©Posten Bring</span>
              <HStack gap="16-20" asChild>
                {/* eslint-disable-next-line jsx-a11y/no-redundant-roles -- VoiceOver don't treat it as a list when styling is removed */}
                <ul
                  role="list"
                  style={{
                    listStyle: "none",
                    margin: 0,
                    padding: 0,
                  }}
                >
                  <li>
                    <a href="https://www.figma.com/file/64ieYInJRps5diLI1qgJJk/Hedwig">
                      Figma
                      <svg
                        style={{ marginLeft: 4 }}
                        width={24}
                        height={24}
                        aria-hidden
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/bring/hedwig-design-system">
                      Github
                      <svg
                        style={{ marginLeft: 4 }}
                        width={24}
                        height={24}
                        aria-hidden
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="https://posten.slack.com/archives/C4U4PR0A2">
                      Slack
                      <svg
                        style={{ marginLeft: 4 }}
                        width={24}
                        height={24}
                        aria-hidden
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </HStack>
            </div>
          </div>
        </Container>
      </Footer>
    </VStack>
  );
}
