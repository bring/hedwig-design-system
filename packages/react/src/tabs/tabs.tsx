import type { HTMLAttributes, ReactElement } from "react";
import { forwardRef, useState } from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname";
import { Slot } from "@radix-ui/react-slot";
import { TabsContext } from "./context";
import { TabsContent, TabsContents, type TabsContentsProps } from "./tabs-content";
import { TabsList, TabsTab, type TabsListProps } from "./tabs-list";

export interface TabsProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactElement<TabsListProps | TabsContentsProps>[] | ReactElement;

  /**
   * Define which tab to use as default. Must be one of the <Tab/>s identifier.
   */
  defaultTab: string;

  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   *
   * @default false
   */
  asChild?: boolean;
}

export const Tabs = forwardRef<HTMLDivElement, TabsProps>(
  ({ asChild, defaultTab, children, ...rest }, ref) => {
    const [activeTabId, setActiveTabId] = useState<string>(defaultTab);
    const Component = asChild ? Slot : "div";
    return (
      <Component className={clsx("hds-tabs")} ref={ref} {...rest}>
        <TabsContext.Provider value={{ activeTabId, toggleActiveTabId: setActiveTabId }}>
          {children}
        </TabsContext.Provider>
      </Component>
    );
  },
) as TabsType;
Tabs.displayName = "Tabs";

type TabsType = ReturnType<typeof forwardRef<HTMLDivElement, TabsProps>> & {
  List: typeof TabsList;
  Tab: typeof TabsTab;
  Contents: typeof TabsContents;
  Content: typeof TabsContent;
};

Tabs.List = TabsList;
Tabs.Tab = TabsTab;
Tabs.Contents = TabsContents;
Tabs.Content = TabsContent;
