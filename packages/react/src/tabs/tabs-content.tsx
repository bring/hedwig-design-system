import type { HTMLAttributes, ReactElement } from "react";
import { forwardRef, useContext } from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname/index.mjs";
import type { OverridableComponent } from "../utils";
import { TabsContext } from "./context";

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

  /**
   * Content for the referenced tabId
   */
  forTabId: string;
}

export const TabContent: OverridableComponent<TabContentProps, HTMLElement> = forwardRef(
  ({ as: Component = "div", forTabId, children, ...rest }, ref) => {
    const context = useContext(TabsContext);
    if (!context.mounted) {
      throw new Error("Context required. Did you use <TabContent/> outside of <Tabs/>?");
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

TabContent.displayName = "TabContent";
