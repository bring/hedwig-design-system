import { Navbar, NavbarLogo, NavbarButton, NavbarNavigation } from "./navbar";
import {
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
  ExpandableMenu: typeof NavbarExpandableMenuComponent;
  Button: typeof NavbarButton;
  Navigation: typeof NavbarNavigation;
};
NavbarComponent.Logo = NavbarLogo;
NavbarComponent.ExpandableMenu = NavbarExpandableMenuComponent;
NavbarComponent.Button = NavbarButton;
NavbarComponent.Navigation = NavbarNavigation;

export { NavbarComponent as Navbar };
export type * from "./navbar";
