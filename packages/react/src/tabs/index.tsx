import "@postenbring/hedwig-css/dist/fonts.css";
import "@postenbring/hedwig-css/dist/tokens.css";
import "@postenbring/hedwig-css/dist/body.css";

import "@postenbring/hedwig-css/dist/tabs.css";

import { Tabs } from "./tabs";
import { TabsList, Tab } from "./tabs-list";
import { TabsContents, TabsContent } from "./tabs-content";

const TabsComponent = Tabs as typeof Tabs & {
  List: typeof TabsList;
  Tab: typeof Tab;
  Contents: typeof TabsContents;
  Content: typeof TabsContent;
};
TabsComponent.List = TabsList;
TabsComponent.Tab = Tab;
TabsComponent.Contents = TabsContents;
TabsComponent.Content = TabsContent;

export { TabsComponent as Tabs };

export type * from "./tabs";
export type * from "./tabs-list";
export type * from "./tabs-content";
