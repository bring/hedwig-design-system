import { Tabs } from "./tabs";
import { TabsList, TabsTab } from "./tabs-list";
import { TabsContents, TabsContent } from "./tabs-content";

const TabsComponent = Tabs as typeof Tabs & {
  List: typeof TabsList;
  Tab: typeof TabsTab;
  Contents: typeof TabsContents;
  Content: typeof TabsContent;
};
TabsComponent.List = TabsList;
TabsComponent.Tab = TabsTab;
TabsComponent.Contents = TabsContents;
TabsComponent.Content = TabsContent;

export { TabsComponent as Tabs, TabsList, TabsTab, TabsContents, TabsContent };

export type * from "./tabs";
export type * from "./tabs-list";
export type * from "./tabs-content";
