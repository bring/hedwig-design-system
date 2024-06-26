import type { HTMLAttributes, ReactElement, MouseEvent } from "react";
import { forwardRef, useEffect, useRef } from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname";
import { useResize, useHydrated, useMergeRefs } from "../utils/utils";
import { useTabsContext } from "./context";

export interface TabsListProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactElement<TabsTabProps> | ReactElement<TabsTabProps>[];

  /**
   * Direction of the tabs. Can either be vertical or horizontal.
   * Horizontal breaks on window width with fallback back to vertical
   *
   * @default "horizontal"
   */
  direction?: "vertical" | "horizontal";
}

export const TabsList = forwardRef<HTMLDivElement, TabsListProps>(
  ({ children, direction = "horizontal", className, ...rest }, ref) => {
    const { activeTabId } = useTabsContext();
    const tabsListRef = useRef<HTMLDivElement>(null);
    const mergedRef = useMergeRefs([tabsListRef, ref]);
    const { width: tabsWidth } = useResize(tabsListRef);

    const isClientSide = useHydrated();
    const { innerWidth } = isClientSide ? window : { innerWidth: 1000 };
    const wideEnough = innerWidth >= tabsWidth;

    const previousTabId = useRef(activeTabId);

    // Marker animation
    useEffect(() => {
      const tabList = tabsListRef.current;
      const activeTab = tabList?.querySelector(`[data-tabid="${activeTabId}"]`);
      if (!activeTab || !tabList) return;

      const { offsetHeight: containerHeight, offsetWidth: containerWidth } = tabList;
      const { offsetHeight, offsetWidth, offsetTop, offsetLeft } = activeTab as HTMLElement;

      // Calculate the height and width of the marker relative to the container
      const height = offsetHeight / containerHeight;
      const width = offsetWidth / containerWidth;

      // NOTE: Doing a DOM manipulation here to set the CSS variables for the marker
      // Not really the react idomatic way, but as long as it works we are able to skip some intermidiate `useState`
      tabsListRef.current.style.setProperty("--_hds-tabs-marker-height", String(height));
      tabsListRef.current.style.setProperty("--_hds-tabs-marker-width", String(width));
      tabsListRef.current.style.setProperty("--_hds-tabs-marker-top", `${offsetTop}px`);
      tabsListRef.current.style.setProperty("--_hds-tabs-marker-left", `${offsetLeft}px`);

      // Start with border fallback, then switch to the animated marker when the user changes tabs
      // This way the marker is placed immediately to the default tab, then animates smoothly to the next when selected
      if (previousTabId.current !== activeTabId) {
        tabsListRef.current.style.setProperty(
          "--_hds-tabs-marker-animated-color",
          "var(--_hds-tabs-marker-color)",
        );
        tabsListRef.current.style.setProperty(
          "--_hds-tabs-marker-border-fallback-color",
          "transparent",
        );
      }
      previousTabId.current = activeTabId;
    }, [activeTabId, innerWidth]);

    return (
      <div
        className={clsx(
          "hds-tabs__list",
          direction === "horizontal"
            ? {
                "hds-tabs__list--horizontal": wideEnough,
                "hds-tabs__list--vertical": !wideEnough,
              }
            : {
                "hds-tabs__list--vertical": true,
              },
          className as undefined,
        )}
        ref={mergedRef}
        role="tablist"
        {...rest}
      >
        {children}
      </div>
    );
  },
);
TabsList.displayName = "Tabs.List";

export interface TabsTabProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactElement<HTMLElement> | string;

  /**
   * Identifier for the tab
   */
  tabId: string;
}

export const TabsTab = forwardRef<HTMLButtonElement, TabsTabProps>(
  ({ children, tabId, className, onClick, ...rest }, ref) => {
    const context = useTabsContext();

    const toggleTab = (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      context.toggleActiveTabId(tabId);
      onClick?.(e);
    };
    return (
      <button
        className={clsx(
          "hds-tabs__tab",
          { "hds-tabs__tab--active": context.activeTabId === tabId },
          className as undefined,
        )}
        data-tabid={tabId}
        onClick={toggleTab}
        ref={ref}
        type="button"
        role="tab"
        {...rest}
      >
        {children}
      </button>
    );
  },
);
TabsTab.displayName = "Tabs.Tab";
