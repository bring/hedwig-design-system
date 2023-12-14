import type { HTMLAttributes, MouseEvent, ReactElement } from "react";
import { forwardRef, useContext, useRef, useState } from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname/index.mjs";
import type { OverridableComponent} from "../utils";
import { useResize } from "../utils";
import { TabsContext } from "./context";

export interface TabsProps extends HTMLAttributes<HTMLElement> {
  children: ReactElement<TabListProps> | ReactElement<TabContentsProps>;

  /**
   * Define which tab to use as default
   */
  defaultTab: string;
}

export const Tabs: OverridableComponent<TabsProps, HTMLDivElement> = forwardRef(
  ({ as: Component = "div", defaultTab, children, ...rest }, ref) => {
    const [activeTabId, toggleActiveTabId] = useState<string>(defaultTab);
    return (
      <Component className={clsx("hds-tabs")} ref={ref} {...rest}>
        <TabsContext.Provider value={{ activeTabId, toggleActiveTabId }}>
          {children}
        </TabsContext.Provider>
      </Component>
    );
  },
);

Tabs.displayName = "Tabs";

export interface TabListProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactElement<TabProps> | ReactElement<TabProps>[];

  /**
   * Direction of the tabs. Can either be vertical or horizontal.
   * Horizontal breaks on window width with fallback back to vertical
   */
  direction?: "vertical" | "horizontal";
}

export function TabList({ children, direction = "horizontal", className, ...rest }: TabListProps) {
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

TabList.displayName = "TabList";

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

Tab.displayName = "Tab";

export interface TabContentsProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactElement<TabContentProps> | ReactElement<TabContentProps>[];
}

export function TabContents({ children, ...rest }: TabContentsProps) {
  return (
    <div className={clsx("hds-tabs--contents")} {...rest}>
      {children}
    </div>
  );
}

TabContents.displayName = "TabContents";

export interface TabContentProps extends HTMLAttributes<HTMLElement> {
  children: ReactElement<HTMLElement> | ReactElement<HTMLElement>[] | string;

  /**
   * Content for the referenced tabId
   */
  forTabId: string;
}

export const TabContent: OverridableComponent<TabContentProps, HTMLElement> = forwardRef(
  ({ as: Component = "div", forTabId, children, ...rest }, ref) => {
    const context = useContext(TabsContext);
    if (context.activeTabId === forTabId) {
      return (
        <Component {...rest} ref={ref}>
          {children}
        </Component>
      );
    }
    return null;
  },
);

TabContent.displayName = "TabContent";
