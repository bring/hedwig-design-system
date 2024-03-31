import type { HTMLAttributes, ReactElement } from "react";
import { forwardRef } from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname";
import type { OverridableComponent } from "../utils";
import { useTabsContext } from "./context";

export interface TabContentsProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactElement<TabsContentProps> | ReactElement<TabsContentProps>[];
}

export function TabsContents({ children, ...rest }: TabContentsProps) {
  return (
    <div className={clsx("hds-tabs__contents")} {...rest}>
      {children}
    </div>
  );
}
TabsContents.displayName = "Tabs.Contents";

export interface TabsContentProps extends HTMLAttributes<HTMLElement> {
  children: ReactElement<HTMLElement> | ReactElement<HTMLElement>[] | string;

  /**
   * Content for the referenced tabId
   */
  forTabId: string;
}

export const TabsContent: OverridableComponent<TabsContentProps, HTMLElement> = forwardRef(
  ({ as: Component = "div", forTabId, children, ...rest }, ref) => {
    const context = useTabsContext();

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

TabsContent.displayName = "Tabs.Content";
