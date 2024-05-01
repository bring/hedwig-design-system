import React, { createContext, useContext, forwardRef, useState, useRef, useEffect } from "react";
import { createRoot } from "react-dom/client";
import type { ClassValue } from "@postenbring/hedwig-css/typed-classname/index.mjs";
import { clsx } from "@postenbring/hedwig-css/typed-classname";
import { focusTrap, type OverridableComponent } from "../utils";
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

interface ButtonInterface {
  className?: ClassValue;
  open?: boolean;
  innerRef?: React.RefObject<HTMLButtonElement>;
  ref?: React.ForwardedRef<HTMLButtonElement>;
  text: React.ReactNode;
  title?: string;
  toggleOpen?: () => void;
  width?: number;
}

function RenderButton({
  className,
  innerRef,
  open = false,
  ref,
  text,
  title,
  toggleOpen,
  width,
  ...rest
}: ButtonInterface) {
  const icon = open ? <CloseIcon /> : <MenuIcon />;
  const style = width ? { width } : {};
  return (
    <button
      className={clsx("hds-navbar__button", className)}
      onClick={toggleOpen}
      ref={ref ?? innerRef}
      style={style}
      title={title}
      type="button"
      {...rest}
    >
      <span className={clsx("hds-navbar__button-responsive-text")}>{text}</span> {icon}
    </button>
  );
}

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

      className,
      ...rest
    },
    ref,
  ) => {
    const [open, toggleOpen] = useNavbarExpendableMenuContext();
    const [width, setWidth] = useState(0);
    const measureButtonRef = useRef<HTMLButtonElement>(null);

    const text: React.ReactNode = open ? whenOpenText : whenClosedText;
    const title = open ? whenOpenHelperTitle : whenClosedHelperTitle;

    /**
     *
     * @param element - Button to measure
     * @param callback - report the width back
     */
    const measureButton = (element: React.ReactNode, callback: (width: number) => void) => {
      // Create an empty div to render the Button in
      const container = document.createElement("div");
      container.style.cssText = "display: inline-block; position: absolute; visibility: hidden";

      // Attach the empty div inside the navigation section
      const c = document.getElementsByClassName("hds-navbar__navigation")[0];
      c.appendChild(container);

      // Render the Button here
      const root = createRoot(container as HTMLElement);
      root.render(element);

      /**
       * Get the offsetWidth now that it is rendered
       * Also clean up after us
       */
      const getWidth = () => {
        callback(measureButtonRef.current?.offsetWidth ?? 0);
        root.unmount();
        c.removeChild(container);
      };
      // This is instead of the callback that used to be on ReactDOM.render()
      setTimeout(getWidth, 0);
    };

    useEffect(() => {
      measureButton(
        <RenderButton
          className={(className ? className : "") as ClassValue}
          innerRef={measureButtonRef}
          text={whenClosedText}
          title={title}
          {...rest}
        />,
        (closedWidth: number) => {
          measureButton(
            <RenderButton
              className={(className ? className : "") as ClassValue}
              innerRef={measureButtonRef}
              open
              text={whenOpenText}
              title={title}
              {...rest}
            />,
            (openWidth: number) => {
              setWidth(Math.max(openWidth, closedWidth));
            },
          );
        },
      );
    }, [className, rest, title, whenClosedText, whenOpenText]);

    return (
      <RenderButton
        className={(className ? className : "") as ClassValue}
        open={open}
        ref={ref}
        text={text as string}
        title={title}
        toggleOpen={toggleOpen}
        width={width}
        {...rest}
      />
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
> = forwardRef(({ as: Component = "section", children, className, ...rest }, ref) => {
  const [open] = useNavbarExpendableMenuContext();
  return (
    <Component
      {...rest}
      className={clsx("hds-navbar__expandable-menu-content", className as undefined)}
      data-state={open ? "open" : "closed"}
      inert={open ? undefined : "true"}
      ref={ref}
    >
      <div className={clsx("hds-navbar__expandable-menu-content-inner")}>{children}</div>
    </Component>
  );
});
NavbarExpandableMenuContent.displayName = "Navbar.ExpandableMenu.Content";
