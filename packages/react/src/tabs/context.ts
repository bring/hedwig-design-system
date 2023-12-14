import { createContext } from "react";

export interface TabsContextProps {
  mounted: boolean;
  activeTabId?: string;
  toggleActiveTabId: (tabId: string) => void;
}

export const TabsContext = createContext<TabsContextProps>({
  mounted: false,
  activeTabId: undefined,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars -- Added default section, without handling
  toggleActiveTabId: (tabId: string) => {
    // default
  },
});
