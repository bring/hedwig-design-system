import { useEffect } from "react";
import {
  Container,
  Navbar,
  Button,
  VStack,
  useNavbarExpendableMenuContext,
} from "@postenbring/hedwig-react";
import { Link as RemixLink, useLocation } from "react-router";
import { kebabCaseToFirstLetterUpperCase } from "../../components/component-examples";
import { useViewOptions, useViewOptionsSearch } from "../../root";

export function LayoutHeader({
  navbarMenuItems,
  shortHeader,
}: {
  navbarMenuItems?: React.ReactNode;
  shortHeader?: boolean;
}) {
  const location = useLocation();
  const viewOptionsSearch = useViewOptionsSearch();

  const navbarMenuItemsElement = (
    <>
      {navbarMenuItems}
      <StaticNavbarMenuItems />
    </>
  );

  return (
    <Navbar variant="service">
      <Navbar.LogoAndServiceText variant="flagship" asChild>
        <RemixLink
          to={{
            pathname: location.pathname.startsWith("/storefront") ? "/storefront/" : "/examples/",
            search: viewOptionsSearch,
          }}
          aria-label="To the front page"
          prefetch="intent"
        >
          <div>
            Hedwig {!shortHeader && <span className="hidden-before-medium">Design System</span>}
          </div>
        </RemixLink>
      </Navbar.LogoAndServiceText>

      {/* Mobile */}
      <Navbar.Navigation className="hidden-after-large">
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
              <VStack align="start" className="hds-mt-32" gap="4">
                {navbarMenuItemsElement}
              </VStack>
            </Container>
          </Navbar.ExpandableMenuContent>
        </Navbar.ExpandableMenu>
      </Navbar.Navigation>

      {/* Desktop */}
      <Navbar.Navigation className="hidden-before-large">
        {navbarMenuItemsElement}
      </Navbar.Navigation>
    </Navbar>
  );
}

function StaticNavbarMenuItems() {
  return (
    <>
      <Navbar.Item>
        <ThemeSwitcher />
      </Navbar.Item>
    </>
  );
}

function ThemeSwitcher() {
  const viewOptions = useViewOptions();
  const viewOptionsSearch = useViewOptionsSearch({
    theme: viewOptions.theme === "bring" ? "posten" : "bring",
  });

  return (
    <Button variant="primary-outline" size="small" asChild>
      <RemixLink
        to={{
          search: viewOptionsSearch,
        }}
      >
        {kebabCaseToFirstLetterUpperCase(viewOptions.theme)}
      </RemixLink>
    </Button>
  );
}

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
