import type { HTMLAttributes, ReactElement } from "react";
import { forwardRef, useContext, useEffect, useId, useState } from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname/index.mjs";
import type { OverridableComponent } from "../utils";
import { AccordionContext, AccordionItemContext } from "./context";
import type { AccordionTriggerProps } from "./accordion-trigger";
import type { AccordionContentProps } from "./accordion-content";

export type AccordionItemChildrenType =
  | ReactElement<AccordionTriggerProps>
  | ReactElement<AccordionContentProps>;

export interface AccordionItemProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Accepts type of <AccordionContent/> and <AccordionTrigger/>
   */
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

    // For single only variant of the accordion
    // Close this item when another accordion is opened
    // Ensuring only one is opend at the same time
    useEffect(() => {
      if (context.variant === "multiple") {
        return;
      }
      if (open && !context.openItems.includes(accordionItemId)) {
        setOpen(false);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps -- We know better
    }, [context.openItems]);

    return (
      <Component
        {...rest}
        className={clsx(
          "hds-accordion-item",
          {
            "hds-accordion-item__expanded": open,
          },
          className as undefined,
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
