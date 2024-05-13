import { forwardRef, type HTMLAttributes } from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname";
import { Slot } from "@radix-ui/react-slot";
import {
  NavbarExpandableMenu,
  NavbarExpandableMenuContent,
  NavbarExpandableMenuTrigger,
} from "./navbar-expandable-menu";

interface NavbarLogoProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   *
   * @default false
   */
  asChild?: boolean;
}

/**
 * A fixed Posten or Bring logo.
 *
 * The logo follows the brand theme, so if the class `hds-theme-bring` is set the Bring logo will be shown instead of the Posten logo
 */
export const NavbarLogo = forwardRef<HTMLDivElement, NavbarLogoProps>(
  ({ children, className, asChild, ...rest }, ref) => {
    const Component = asChild ? Slot : "div";
    return (
      <Component className={clsx(`hds-navbar__logo`, className as undefined)} ref={ref} {...rest}>
        {children}
      </Component>
    );
  },
);
NavbarLogo.displayName = "Navbar.Logo";

interface NavbarLogoAndServiceText extends HTMLAttributes<HTMLDivElement> {
  /**
   * The text display next to the logo
   */
  children: React.ReactNode;

  /**
   * The text variant
   *
   * Use `service` for internal applications
   *
   * Use `flagship` for public facing applications
   */
  variant: "service" | "flagship";

  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   *
   * @default false
   */
  asChild?: boolean;
}

/**
 * Internal service or flagship text next to either the Posten or Bring logo
 *
 * The logo follows the brand theme, so if the class `hds-theme-bring` is set the Bring logo will be shown instead of the Posten logo
 */
export const NavbarLogoAndServiceText = forwardRef<HTMLDivElement, NavbarLogoAndServiceText>(
  ({ children, asChild, variant, className, ...rest }, ref) => {
    const Component = asChild ? Slot : "div";
    return (
      <Component
        ref={ref}
        className={clsx(
          "hds-navbar__logo-and-service-text",
          `hds-navbar__logo-and-service-text--${variant}`,
          className as undefined,
        )}
        {...rest}
      >
        {children}
      </Component>
    );
  },
);
NavbarLogoAndServiceText.displayName = "Navbar.NavbarLogoAndText";

interface NavbarItemIconProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}
/**
 * Icon to be used inside a `Navbar.Item`, `Navbar.ButtonItem`, or `Navbar.LinkItem`
 */
export const NavbarItemIcon = forwardRef<HTMLDivElement, NavbarItemIconProps>(
  ({ children, className, ...rest }, ref) => {
    return (
      <Slot className={clsx("hds-navbar__item-icon", className as undefined)} ref={ref} {...rest}>
        {children}
      </Slot>
    );
  },
);
NavbarItemIcon.displayName = "Navbar.ItemIcon";

interface NavbarItemProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;

  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   *
   * @default false
   */
  asChild?: boolean;
}

/**
 * Generic Navbar item
 *
 * Use `Navbar.ButtonItem` or `Navbar.LinkItem` for links and buttons
 */
export const NavbarItem = forwardRef<HTMLDivElement, NavbarItemProps>(
  ({ asChild, children, className, ...rest }, ref) => {
    const Component = asChild ? Slot : "div";
    return (
      <Component className={clsx("hds-navbar__item", className as undefined)} ref={ref} {...rest}>
        {children}
      </Component>
    );
  },
);
NavbarItem.displayName = "Navbar.Item";

interface NavbarButtonItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;

  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   *
   * @default false
   */
  asChild?: boolean;
}
export const NavbarButtonItem = forwardRef<HTMLButtonElement, NavbarButtonItemProps>(
  ({ asChild, children, className, ...rest }, ref) => {
    const Component = asChild ? Slot : "button";
    return (
      <Component
        className={clsx("hds-navbar__item", className as undefined)}
        ref={ref}
        type="button"
        {...rest}
      >
        {children}
      </Component>
    );
  },
);
NavbarButtonItem.displayName = "Navbar.ButtonItem";

interface NavbarLinkItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;

  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   *
   * @default false
   */
  asChild?: boolean;
}

export const NavbarLinkItem = forwardRef<HTMLAnchorElement, NavbarLinkItemProps>(
  ({ asChild, children, className, ...rest }, ref) => {
    const Component = asChild ? Slot : "a";
    return (
      <Component className={clsx("hds-navbar__item", className as undefined)} ref={ref} {...rest}>
        {children}
      </Component>
    );
  },
);
NavbarLinkItem.displayName = "Navbar.LinkItem";

interface NavbarNavigationProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;

  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   *
   * @default false
   */
  asChild?: boolean;
}
export const NavbarNavigation = forwardRef<HTMLDivElement, NavbarNavigationProps>(
  ({ asChild, className, ...rest }, ref) => {
    const Component = asChild ? Slot : "div";
    return (
      <Component
        className={clsx("hds-navbar__navigation", className as undefined)}
        ref={ref}
        {...rest}
      />
    );
  },
);
NavbarNavigation.displayName = "Navbar.Navigation";

export interface NavbarProps extends HTMLAttributes<HTMLElement> {
  /**
   * Navbar variant
   *
   * By default the `posten.no` variant is used which has a fixed logo and a fixed height of 112px
   *
   * For internal services or flagship services use the `service` should be used
   *
   * @default "default"
   */
  variant?: "default" | "service";

  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   *
   * @default false
   */
  asChild?: boolean;
}

/**
 * 🚨 WORK IN PROGRESS 🚨
 */
export const Navbar = forwardRef<HTMLDivElement, NavbarProps>(
  ({ asChild, children, className, variant, ...rest }, ref) => {
    const Component = asChild ? Slot : "header";
    return (
      <Component
        className={clsx("hds-navbar", variant && `hds-navbar--${variant}`, className as undefined)}
        ref={ref}
        {...rest}
      >
        {children}
      </Component>
    );
  },
) as NavbarType;
Navbar.displayName = "Navbar";

type NavbarType = ReturnType<typeof forwardRef<HTMLDivElement, NavbarProps>> & {
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

Navbar.Logo = NavbarLogo;
Navbar.LogoAndServiceText = NavbarLogoAndServiceText;
Navbar.ExpandableMenu = NavbarExpandableMenu;
Navbar.ExpandableMenuTrigger = NavbarExpandableMenuTrigger;
Navbar.ExpandableMenuContent = NavbarExpandableMenuContent;
Navbar.Item = NavbarItem;
Navbar.ButtonItem = NavbarButtonItem;
Navbar.LinkItem = NavbarLinkItem;
Navbar.ItemIcon = NavbarItemIcon;
Navbar.Navigation = NavbarNavigation;
