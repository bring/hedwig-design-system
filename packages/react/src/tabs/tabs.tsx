import type { HTMLAttributes, ReactElement } from "react";
import { forwardRef, useState } from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname/index.mjs";
import type { OverridableComponent } from "../utils";
import { TabsContext } from "./context";
import type { TabContentsProps } from "./tabs-content";
import type { TabListProps } from "./tabs-list";

export interface TabsProps extends HTMLAttributes<HTMLElement> {
  children: ReactElement<TabListProps | TabContentsProps>[];

  /**
   * Define which tab to use as default. Must be one of the <Tab/>s identifier.
   */
  defaultTab: string;
}

export const Tabs: OverridableComponent<TabsProps, HTMLDivElement> = forwardRef(
  ({ as: Component = "div", defaultTab, children, ...rest }, ref) => {
    const [activeTabId, toggleActiveTabId] = useState<string>(defaultTab);
    return (
      <Component className={clsx("hds-tabs")} ref={ref} {...rest}>
        <TabsContext.Provider value={{ activeTabId, toggleActiveTabId, mounted: true }}>
          {children}
        </TabsContext.Provider>
      </Component>
    );
  },
);

Tabs.displayName = "Tabs";
