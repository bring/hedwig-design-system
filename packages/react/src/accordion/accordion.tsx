import type { HTMLAttributes, ReactElement } from "react";
import { forwardRef, useState } from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname/index.mjs";
import type { OverridableComponent } from "../utils";
import type { AccordionType } from "./context";
import { AccordionContext } from "./context";
import type { AccordionItemProps } from "./accordion-item";

export interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Accepts type of <AccordionItem/>
   */
  children: ReactElement<AccordionItemProps> | ReactElement<AccordionItemProps>[];
  className?: string | undefined;
  /**
   * Can be either "single" or "multiple".
   *
   * Single will basically mean that just a singular item will be opened at the time, and all
   * others will be closed
   *
   * Multiple is the default option, and will allow for multiple options to be visible/opened at the
   * same time
   */
  variant?: AccordionType;
}

export const Accordion: OverridableComponent<AccordionProps, HTMLDivElement> = forwardRef(
  ({ as: Component = "div", children, className, variant = "multiple", ...rest }, ref) => {
    const [openItems, setOpenItems] = useState<string[]>([]);
    const toggleOpenItem = (itemId: string) => {
      if (variant === "single") {
        setOpenItems([itemId]);
      } else {
        setOpenItems(
          openItems.includes(itemId)
            ? openItems.filter((id) => id !== itemId)
            : [...openItems, itemId],
        );
      }
    };
    return (
      <AccordionContext.Provider value={{ variant, openItems, toggleOpenItem, mounted: true }}>
        <Component {...rest} className={clsx("hds-accordion", className as undefined)} ref={ref}>
          {children}
        </Component>
      </AccordionContext.Provider>
    );
  },
);

Accordion.displayName = "Accordion";
