import { createContext, useContext, forwardRef, useState, useEffect, useId } from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname";
import { focusTrap } from "../utils/utils";
import { CloseIcon, MenuIcon } from "./icons";

interface ExpandableMenuContextProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  contentId: string;
}

const ExpandableMenuContext = createContext<ExpandableMenuContextProps | null>(null);
export const useNavbarExpendableMenuContext = () => {
  const value = useContext(ExpandableMenuContext);
  if (value === null) {
    throw new Error("useNavbarExpendableMenuContext must be used within a Navbar.ExpandableMenu");
  }
  return value;
};

export interface NavbarExpandableMenuProps {
  children: React.ReactNode;
}

/**
 * Expandable Menu Provider
 * Handles scroll and focus locking,
 * as well as scrolling the user to the top of the page.
 *
 * If we want a sticky header in the future the scrolling should be configurable
 */
export function NavbarExpandableMenu({ children }: NavbarExpandableMenuProps) {
  const contentId = useId();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      window.scrollTo(0, 0);
      document.body.classList.add(clsx("hds-navbar-scroll-lock"));
      const releaseFocusTrap = focusTrap(
        document.getElementsByClassName(clsx("hds-navbar"))[0] as HTMLElement,
      );

      return () => {
        document.body.classList.remove(clsx("hds-navbar-scroll-lock"));
        releaseFocusTrap();
      };
    }
  }, [open]);

  return (
    <ExpandableMenuContext.Provider value={{ contentId, open, setOpen }}>
      {children}
    </ExpandableMenuContext.Provider>
  );
}

NavbarExpandableMenu.displayName = "NavbarExpandableMenu";

/**
 * Trigger
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

      style,
      className,
      ...rest
    },
    ref,
  ) => {
    const { contentId, open, setOpen } = useNavbarExpendableMenuContext();

    function toggleOpen() {
      setOpen(!open);
    }

    return (
      <button
        aria-expanded={open}
        aria-controls={contentId}
        className={clsx(
          "hds-navbar__item",
          className as undefined,
          open ? "hds-navbar__item--open" : "hds-navbar__item--closed",
        )}
        onClick={toggleOpen}
        ref={ref}
        title={open ? whenOpenHelperTitle : whenClosedHelperTitle}
        type="button"
        style={{ position: "relative", ...style }}
        {...rest}
      >
        <span className="hds-navbar__item-responsive-text">
          <span aria-hidden={!open} className={clsx("hds-navbar__item-whenopentext")}>
            {whenOpenText}
          </span>
          <span aria-hidden={open} className={clsx("hds-navbar__item-whenclosedtext")}>
            {whenClosedText}
          </span>
        </span>
        <span style={{ width: 32, height: 32 }}>{open ? <CloseIcon /> : <MenuIcon />}</span>
      </button>
    );
  },
);
NavbarExpandableMenuTrigger.displayName = "Navbar.ExpandableMenuTrigger";

/**
 * Content
 */
export interface NavbarExpandableMenuContentProps {
  children: React.ReactNode;
  className?: string;
}

export const NavbarExpandableMenuContent = forwardRef<
  HTMLDivElement,
  NavbarExpandableMenuContentProps
>(({ children, className, ...rest }, ref) => {
  const { contentId, open } = useNavbarExpendableMenuContext();
  return (
    <section
      {...rest}
      id={contentId}
      className={clsx("hds-navbar__expandable-menu-content", className as undefined)}
      data-state={open ? "open" : "closed"}
      {...{ inert: open ? undefined : "true" }}
      ref={ref}
    >
      <div className={clsx("hds-navbar__expandable-menu-content-inner")}>{children}</div>
    </section>
  );
});
NavbarExpandableMenuContent.displayName = "Navbar.ExpandableMenuContent";
