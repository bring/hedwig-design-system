import {
  Navbar,
  NavbarLogo,
  NavbarItem,
  NavbarButtonItem,
  NavbarLinkItem,
  NavbarItemIcon,
  NavbarNavigation,
  NavbarLogoAndServiceText,
} from "./navbar";
import {
  useNavbarExpendableMenuContext,
  NavbarExpandableMenu,
  NavbarExpandableMenuTrigger,
  NavbarExpandableMenuContent,
} from "./navbar-expandable-menu";

const NavbarComponent = Navbar as typeof Navbar & {
  Logo: typeof NavbarLogo;
  LogoAndServiceText: typeof NavbarLogoAndServiceText;
  ExpandableMenu: typeof NavbarExpandableMenu;
  ExpandableMenuTrigger: typeof NavbarExpandableMenuTrigger;
  ExpandableMenuContent: typeof NavbarExpandableMenuContent;
  Item: typeof NavbarItem;
  ButtonItem: typeof NavbarButtonItem;
  LinkItem: typeof NavbarLinkItem;
  ItemIcon: typeof NavbarItemIcon;
  Navigation: typeof NavbarNavigation;
};
NavbarComponent.Logo = NavbarLogo;
NavbarComponent.LogoAndServiceText = NavbarLogoAndServiceText;
NavbarComponent.ExpandableMenu = NavbarExpandableMenu;
NavbarComponent.ExpandableMenuTrigger = NavbarExpandableMenuTrigger;
NavbarComponent.ExpandableMenuContent = NavbarExpandableMenuContent;
NavbarComponent.Item = NavbarItem;
NavbarComponent.ButtonItem = NavbarButtonItem;
NavbarComponent.LinkItem = NavbarLinkItem;
NavbarComponent.ItemIcon = NavbarItemIcon;
NavbarComponent.Navigation = NavbarNavigation;

export {
  NavbarComponent as Navbar,
  NavbarLogo,
  NavbarItem,
  NavbarButtonItem,
  NavbarLinkItem,
  NavbarItemIcon,
  NavbarNavigation,
  NavbarLogoAndServiceText,
  useNavbarExpendableMenuContext,
  NavbarExpandableMenu,
  NavbarExpandableMenuTrigger,
  NavbarExpandableMenuContent,
};
export type * from "./navbar";
