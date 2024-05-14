import { createContext, useContext, forwardRef, useState, useEffect, useId } from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname";
import { focusTrap } from "../utils/utils";
import { CloseIcon, MenuIcon } from "./icons";

const expandableMenuContext = createContext([
  false as boolean,
  () => {
    // Empty
  },
] as const);
export const useNavbarExpendableMenuContext = () => useContext(expandableMenuContext);

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
  const [open, setOpen] = useState(false);
  function toggleOpen() {
    setOpen((prev) => !prev);
  }

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
    <expandableMenuContext.Provider value={[open, toggleOpen]}>
      {children}
    </expandableMenuContext.Provider>
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
    const [open, toggleOpen] = useNavbarExpendableMenuContext();

    // Measure the width of the text when open and closed and choose the widest one
    // This is to ensure that the button doesn't change size when the text changes
    const [textWidth, setTextWidth] = useState<number | undefined>(undefined);
    const measurementId = useId();
    useEffect(() => {
      const widthWhenOpen =
        document.getElementById(`${measurementId}-when-open`)?.getBoundingClientRect().width ?? 0;
      const widthWhenClosed =
        document.getElementById(`${measurementId}-when-closed`)?.getBoundingClientRect().width ?? 0;

      setTextWidth(widthWhenOpen < widthWhenClosed ? widthWhenClosed : widthWhenOpen);
    }, [measurementId]);

    const text = open ? whenOpenText : whenClosedText;
    const title = open ? whenOpenHelperTitle : whenClosedHelperTitle;
    const icon = open ? <CloseIcon /> : <MenuIcon />;

    return (
      <button
        className={clsx("hds-navbar__item", className as undefined)}
        onClick={toggleOpen}
        ref={ref}
        title={title}
        type="button"
        style={{ position: "relative", ...style }}
        {...rest}
      >
        {/* Measurement elements, not shown to the user */}
        <span
          id={`${measurementId}-when-closed`}
          aria-hidden
          style={{
            position: "absolute",
            visibility: "hidden",
            pointerEvents: "none",
            whiteSpace: "nowrap",
          }}
        >
          {whenOpenText}
        </span>
        <span
          id={`${measurementId}-when-open`}
          aria-hidden
          style={{
            position: "absolute",
            visibility: "hidden",
            pointerEvents: "none",
            whiteSpace: "nowrap",
          }}
        >
          {whenClosedText}
        </span>

        {/* Actual content */}
        <span
          style={{ width: textWidth, whiteSpace: "nowrap" }}
          className={clsx("hds-navbar__item-responsive-text")}
        >
          {text}
        </span>
        <span style={{ width: 32, height: 32 }}>{icon}</span>
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
  const [open] = useNavbarExpendableMenuContext();
  return (
    <section
      {...rest}
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
