import type { HTMLAttributes, ReactElement } from "react";
import { forwardRef } from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname";
import { Slot } from "@radix-ui/react-slot";
import { useTabsContext } from "./context";

export interface TabsContentsProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactElement<TabsContentProps> | ReactElement<TabsContentProps>[];

  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   *
   * @default false
   */
  asChild?: boolean;
}

export const TabsContents = forwardRef<HTMLDivElement, TabsContentsProps>(
  ({ asChild, children, ...rest }, ref) => {
    const Component = asChild ? Slot : "div";
    return (
      <Component ref={ref} className={clsx("hds-tabs__contents")} {...rest}>
        {children}
      </Component>
    );
  },
);
TabsContents.displayName = "Tabs.Contents";

export interface TabsContentProps extends HTMLAttributes<HTMLElement> {
  children: ReactElement<HTMLElement> | ReactElement<HTMLElement>[] | string;

  /**
   * Content for the referenced tabId
   */
  forTabId: string;

  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   *
   * @default false
   */
  asChild?: boolean;
}

export const TabsContent = forwardRef<HTMLDivElement, TabsContentProps>(
  ({ asChild, forTabId, children, ...rest }, ref) => {
    const context = useTabsContext();
    const Component = asChild ? Slot : "div";

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
