import {
  Navbar,
  NavbarLogo,
  NavbarButton,
  NavbarNavigation,
  NavbarLogoAndServiceText,
} from "./navbar";
import {
  useNavbarExpendableMenuContext,
  NavbarExpandableMenu,
  NavbarExpandableMenuTrigger,
  NavbarExpandableMenuContent,
} from "./navbar-expandable-menu";

const NavbarExpandableMenuComponent = NavbarExpandableMenu as typeof NavbarExpandableMenu & {
  Trigger: typeof NavbarExpandableMenuTrigger;
  Content: typeof NavbarExpandableMenuContent;
};
NavbarExpandableMenuComponent.Trigger = NavbarExpandableMenuTrigger;
NavbarExpandableMenuComponent.Content = NavbarExpandableMenuContent;

const NavbarComponent = Navbar as typeof Navbar & {
  Logo: typeof NavbarLogo;
  LogoAndServiceText: typeof NavbarLogoAndServiceText;
  ExpandableMenu: typeof NavbarExpandableMenuComponent;
  Button: typeof NavbarButton;
  Navigation: typeof NavbarNavigation;
};
NavbarComponent.Logo = NavbarLogo;
NavbarComponent.LogoAndServiceText = NavbarLogoAndServiceText;
NavbarComponent.ExpandableMenu = NavbarExpandableMenuComponent;
NavbarComponent.Button = NavbarButton;
NavbarComponent.Navigation = NavbarNavigation;

export { NavbarComponent as Navbar, useNavbarExpendableMenuContext };
export type * from "./navbar";
