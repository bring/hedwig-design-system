import type { HTMLAttributes, MouseEvent, ReactElement } from "react";
import { forwardRef, useContext, useRef, useState } from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname/index.mjs";
import type { OverridableComponent } from "../utils";
import { TabsContext } from "./context";

export interface TabsProps extends HTMLAttributes<HTMLElement> {
  children: ReactElement<TabListProps> | ReactElement<TabContentsProps>;
}

export const Tabs: OverridableComponent<TabsProps, HTMLDivElement> = forwardRef(
  ({ as: Component = "div", children, ...rest }, ref) => {
    const [activeTabId, toggleActiveTabId] = useState<string>("");
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
  direction?: "vertical" | "horizontal" | "auto";
}

export function TabList({ children, direction = "auto", className, ...rest }: TabListProps) {
  const tabsListRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className={clsx("hds-tabs--list", `hds-tabs--list-${direction}`, className as undefined)}
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
  tabId: string;
  defaultActive?: boolean;
}

export const Tab: OverridableComponent<TabProps, HTMLButtonElement> = forwardRef(
  (
    {
      as: Component = "button",
      children,
      tabId,
      defaultActive = false,
      className,
      onClick,
      ...rest
    },
    ref,
  ) => {
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
          {
            "hds-tabs--tab-active":
              context.activeTabId === tabId || (!context.activeTabId && defaultActive),
          },
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
  forTabId: string;
  defaultActive?: boolean;
}

export const TabContent: OverridableComponent<TabContentProps, HTMLElement> = forwardRef(
  ({ as: Component = "div", forTabId, defaultActive = false, children, ...rest }, ref) => {
    const context = useContext(TabsContext);
    if (context.activeTabId === forTabId || (!context.activeTabId && defaultActive)) {
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
