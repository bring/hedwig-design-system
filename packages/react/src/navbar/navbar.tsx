import React, { forwardRef, type HTMLAttributes } from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname";
import { Slot } from "@radix-ui/react-slot";
import type { OverridableComponent } from "../utils";

export interface NavbarProps extends HTMLAttributes<HTMLElement> {
  /**
   * Navbar variant
   *
   * By default the `posten.no` variant is used which has a fixed logo and a fixed height of 112px
   *
   * For internal services or flagship services use the `service` should be used
   */
  variant?: "default" | "service";
  children: React.ReactNode;
}

/**
 * 🚨 WORK IN PROGRESS 🚨
 */
export const Navbar = forwardRef<HTMLElement, NavbarProps>(
  ({ children, className, variant, ...rest }, ref) => {
    return (
      <header
        className={clsx("hds-navbar", variant && `hds-navbar--${variant}`, className as undefined)}
        ref={ref}
        {...rest}
      >
        {children}
      </header>
    );
  },
);
Navbar.displayName = "Navbar";

interface NavbarLogoProps {
  children?: never;
}

/**
 * A fixed Posten or Bring logo.
 *
 * The logo follows the brand theme, so if the class `hds-theme-bring` is set the Bring logo will be shown instead of the Posten logo
 */
export const NavbarLogo: OverridableComponent<NavbarLogoProps, HTMLDivElement> = forwardRef(
  ({ as: Component = "div", className, ...rest }, ref) => {
    return (
      <Component className={clsx("hds-navbar__logo", className as undefined)} ref={ref} {...rest} />
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
   * Use `flagship` for public facing applications
   */
  variant: "service" | "flagship";

  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
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

// Navbar button
interface NavbarButtonProps {
  icon?: React.ReactNode;
  children: React.ReactNode;
}
export const NavbarButton: OverridableComponent<NavbarButtonProps, HTMLElement> = forwardRef(
  ({ as: Component = "button", children, icon, className, ...rest }, ref) => {
    return (
      <Component className={clsx("hds-navbar__button", className as undefined)} ref={ref} {...rest}>
        {children} {icon}
      </Component>
    );
  },
);
NavbarButton.displayName = "Navbar.Button";

interface NavbarNavigationProps {
  children: React.ReactNode;
}
export const NavbarNavigation: OverridableComponent<NavbarNavigationProps, HTMLElement> =
  forwardRef(({ as: Component = "div", className, ...rest }, ref) => {
    return (
      <Component
        className={clsx("hds-navbar__navigation", className as undefined)}
        ref={ref}
        {...rest}
      />
    );
  });
NavbarNavigation.displayName = "Navbar.Navigation";
