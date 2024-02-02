import React, { createContext, useContext, forwardRef, useState } from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname/index.mjs";
import type { OverridableComponent } from "../utils";

const navbarContext = createContext([
  false as boolean,
  () => {
    // Empty
  },
] as const);

/**
 * Root
 */
export interface NavbarExpandableMenuProps {
  children: React.ReactNode;
}
export function NavbarExpandableMenu({ children }: NavbarExpandableMenuProps) {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen((currentOpen) => !currentOpen);
  };
  return <navbarContext.Provider value={[open, toggleOpen]}>{children}</navbarContext.Provider>;
}
NavbarExpandableMenu.displayName = "NavbarExpandableMenu";

/**
 * Trigger
 *
 * ## TODO
 * - [ ] Hide text when on mobile
 * - [ ] Open / Close icon
 */
export interface NavbarExpandableMenuTriggerProps
  extends Omit<React.HTMLAttributes<HTMLButtonElement>, "children"> {
  whenClosedText: React.ReactNode;
  whenClosedHelperTitle?: string;

  whenOpenText: React.ReactNode;
  whenOpenHelperTitle?: string;
}
export const NavbarExpandableMenuTrigger = forwardRef<
  HTMLButtonElement,
  NavbarExpandableMenuTriggerProps
>(
  (
    {
      whenClosedText,
      whenClosedHelperTitle,

      whenOpenText,
      whenOpenHelperTitle,

      className,
      ...rest
    },
    ref,
  ) => {
    const [open, toggleOpen] = useContext(navbarContext);

    const text = open ? whenOpenText : whenClosedText;
    const title = open ? whenOpenHelperTitle : whenClosedHelperTitle;

    return (
      <button
        className={clsx(
          "hds-navbar__expandable-menu-trigger",
          "hds-navbar__button",
          className as undefined,
        )}
        onClick={toggleOpen}
        ref={ref}
        title={title}
        type="button"
        {...rest}
      >
        {text}
      </button>
    );
  },
);
NavbarExpandableMenuTrigger.displayName = "Navbar.ExpandableMenu.Trigger";

/**
 * Content
 */
export interface NavbarExpandableMenuContentProps {
  children: React.ReactNode;
  className?: string;
}
export const NavbarExpandableMenuContent: OverridableComponent<
  NavbarExpandableMenuContentProps,
  HTMLDivElement
> = forwardRef(({ as: Component = "div", children, className, ...rest }, ref) => {
  const [open] = useContext(navbarContext);
  return (
    <Component
      {...rest}
      className={clsx("hds-navbar__expandable-menu-content", className as undefined)}
      data-state={open ? "open" : "closed"}
      ref={ref}
    >
      {children}
    </Component>
  );
});
NavbarExpandableMenuContent.displayName = "Navbar.ExpandableMenu.Content";
