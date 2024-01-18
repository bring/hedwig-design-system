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
