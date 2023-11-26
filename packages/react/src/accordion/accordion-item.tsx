import React, { forwardRef, useContext, useEffect, useId, useState } from "react";
import { clsx } from "clsx";
import { t } from "@postenbring/hedwig-css/typed-classname/index.mjs";
import type { OverridableComponent } from "../utils";
import { AccordionContext, AccordionItemContext } from "./context";
import type { AccordionTriggerProps } from "./accordion-item-trigger";
import type { AccordionContentProps } from "./accordion-item-content";

export type AccordionItemChildrenType =
  | React.ReactElement<AccordionTriggerProps>
  | React.ReactElement<AccordionContentProps>;

export interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  children: AccordionItemChildrenType[];
}

export const AccordionItem: OverridableComponent<AccordionItemProps, HTMLDivElement> = forwardRef(
  ({ as: Component = "div", children, className, ...rest }, ref) => {
    const context = useContext(AccordionContext);
    const [open, setOpen] = useState(false);
    const accordionItemId = useId();
    const handleOpen = () => {
      setOpen(!open);
      if (context.variant === "single") {
        context.toggleOpenItem(accordionItemId);
      }
    };
    if (!context.mounted) {
      throw new Error("Context required. Did you use <AccordionItem/> outside of <Accordion/>?");
    }
    useEffect(() => {
      if (context.variant === "multiple") {
        return;
      }
      if (open && !context.openItems.includes(accordionItemId)) {
        setOpen(false);
      }
    }, [context.openItems]);
    return (
      <Component
        {...rest}
        className={clsx(
          t("hds-accordion-item"),
          {
            [t(`hds-accordion-item__expanded`)]: open,
          },
          className,
        )}
        ref={ref}
      >
        <AccordionItemContext.Provider value={{ open, setOpen: handleOpen }}>
          {children}
        </AccordionItemContext.Provider>
      </Component>
    );
  },
);

AccordionItem.displayName = "AccordionItem";
