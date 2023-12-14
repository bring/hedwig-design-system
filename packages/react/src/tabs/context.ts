import { createContext } from "react";

export interface TabsContextProps {
  activeTabId?: string;
  toggleActiveTabId: (tabId: string) => void;
}

export const TabsContext = createContext<TabsContextProps>({
  activeTabId: undefined,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars -- Added default section, without handling
  toggleActiveTabId: (tabId: string) => {
    // default
  },
});
