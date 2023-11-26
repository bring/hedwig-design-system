import * as React from "react";
import { forwardRef, useState } from "react";
import { clsx } from "clsx";
import { t } from "@postenbring/hedwig-css/typed-classname/index.mjs";
import type { OverridableComponent } from "../utils";
import type { AccordionType } from "./context";
import { AccordionContext } from "./context";
import type { AccordionItemProps } from "./accordion-item";

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactElement<AccordionItemProps> | React.ReactElement<AccordionItemProps>[];
  className?: string | undefined;
  variant?: AccordionType;
  size?: "small" | "medium";
}

export const Accordion: OverridableComponent<AccordionProps, HTMLDivElement> = forwardRef(
  (
    { as: Component = "div", children, className, variant = "multiple", size = "medium", ...rest },
    ref,
  ) => {
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
        <Component
          {...rest}
          className={clsx(t("hds-accordion"), t(`hds-accordion--${size}`), className)}
          ref={ref}
        >
          {children}
        </Component>
      </AccordionContext.Provider>
    );
  },
);

Accordion.displayName = "Accordion";
