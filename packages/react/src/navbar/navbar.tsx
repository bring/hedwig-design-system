import React, { forwardRef, type HTMLAttributes } from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname/index.mjs";
import type { OverridableComponent } from "../utils";

export interface NavbarProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}
/**
 * 🚨 WORK IN PROGRESS 🚨
 */
export const Navbar = forwardRef<HTMLElement, NavbarProps>(
  ({ children, className, ...rest }, ref) => {
    return (
      <header className={clsx("hds-navbar", className as undefined)} ref={ref} {...rest}>
        {children}
      </header>
    );
  },
);
Navbar.displayName = "Navbar";

// Navbar logo
interface NavbarLogoProps {
  children?: never;
}
export const NavbarLogo: OverridableComponent<NavbarLogoProps, HTMLDivElement> = forwardRef(
  ({ as: Component = "div", className, ...rest }, ref) => {
    return (
      <Component className={clsx("hds-navbar__logo", className as undefined)} ref={ref} {...rest} />
    );
  },
);
NavbarLogo.displayName = "Navbar.Logo";

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
