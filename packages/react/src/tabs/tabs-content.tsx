import type { HTMLAttributes, ReactElement } from "react";
import { forwardRef, useContext } from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname";
import type { OverridableComponent } from "../utils";
import { TabsContext } from "./context";

export interface TabContentsProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactElement<TabsContentProps> | ReactElement<TabsContentProps>[];
}

export function TabsContents({ children, ...rest }: TabContentsProps) {
  return (
    <div className={clsx("hds-tabs--contents")} {...rest}>
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
    const context = useContext(TabsContext);
    if (!context.mounted) {
      throw new Error("Context required. Did you use <Tabs.Content /> outside of <Tabs/>?");
    }
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
