import type { HTMLAttributes, ReactElement, MouseEvent } from "react";
import { forwardRef, useContext, useRef } from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname";
import { type OverridableComponent, useResize } from "../utils";
import { TabsContext } from "./context";

export interface TabListProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactElement<TabProps> | ReactElement<TabProps>[];

  /**
   * Direction of the tabs. Can either be vertical or horizontal.
   * Horizontal breaks on window width with fallback back to vertical
   */
  direction?: "vertical" | "horizontal";
}

export function TabsList({ children, direction = "horizontal", className, ...rest }: TabListProps) {
  const tabsListRef = useRef<HTMLDivElement>(null);
  const { width: tabsWidth } = useResize(tabsListRef);
  const { innerWidth } = window;
  const wideEnough = innerWidth >= tabsWidth;
  return (
    <div
      className={clsx(
        "hds-tabs--list",
        direction === "horizontal"
          ? {
              [`hds-tabs--list-horizontal`]: wideEnough,
              "hds-tabs--list-vertical": !wideEnough,
            }
          : {
              "hds-tabs--list-vertical": true,
            },
        className as undefined,
      )}
      ref={tabsListRef}
      role="tablist"
      {...rest}
    >
      {children}
    </div>
  );
}

TabsList.displayName = "Tabs.List";

export interface TabProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactElement<HTMLElement> | string;

  /**
   * Identifier for the tab
   */
  tabId: string;
}

export const Tab: OverridableComponent<TabProps, HTMLButtonElement> = forwardRef(
  ({ as: Component = "button", children, tabId, className, onClick, ...rest }, ref) => {
    const context = useContext(TabsContext);
    if (!context.mounted) {
      throw new Error("Context required. Did you use <TabContent/> outside of <Tabs/>?");
    }
    const toggleTab = (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      context.toggleActiveTabId(tabId);
      onClick && onClick(e);
    };
    return (
      <Component
        className={clsx(
          "hds-tabs--tab",
          { "hds-tabs--tab-active": context.activeTabId === tabId },
          className as undefined,
        )}
        data-tabid={tabId}
        onClick={toggleTab}
        ref={ref}
        role="tab"
        {...rest}
      >
        {children}
      </Component>
    );
  },
);

Tab.displayName = "Tabs.Tab";
