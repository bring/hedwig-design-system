import "@postenbring/hedwig-css/dist/fonts.css";
import "@postenbring/hedwig-css/dist/tokens.css";
import "@postenbring/hedwig-css/dist/body.css";

import "@postenbring/hedwig-css/dist/navbar.css";

import { Navbar, NavbarLogo, NavbarButton } from "./navbar";
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
};
NavbarComponent.Logo = NavbarLogo;
NavbarComponent.ExpandableMenu = NavbarExpandableMenuComponent;
NavbarComponent.Button = NavbarButton;

export { NavbarComponent as Navbar };
export type * from "./navbar";
