import type { HTMLAttributes, ReactNode } from "react";
import { forwardRef, useContext } from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname/index.mjs";
import type { OverridableComponent } from "../utils";
import { AccordionItemContext } from "./context";

export interface AccordionContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const AccordionContent: OverridableComponent<AccordionContentProps, HTMLDivElement> =
  forwardRef(({ as: Component = "div", children, className, ...rest }, ref) => {
    const context = useContext(AccordionItemContext);
    if (context === null) {
      return null;
    }
    return (
      <Component
        {...rest}
        className={clsx(
          "hds-accordion-item-content",
          {
            "hds-accordion-item-content--closed": !context.open,
          },
          className as undefined,
        )}
        ref={ref}
      >
        {children}
      </Component>
    );
  });

AccordionContent.displayName = "Accordion.Content";
