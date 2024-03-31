import { createContext, useContext } from "react";

export interface TabsContextProps {
  activeTabId: string;
  toggleActiveTabId: (tabId: string) => void;
}

export const TabsContext = createContext<TabsContextProps | null>(null);

export function useTabsContext() {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error(
      "Tabs context required. Did you use `<Tabs.List />`, `<Tabs.Tab />`, or `<Tabs.Content />` outside of <Tabs/>?",
    );
  }
  return context;
}
