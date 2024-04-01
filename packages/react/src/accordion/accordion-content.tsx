import type { HTMLAttributes, ReactNode } from "react";
import { forwardRef, useContext } from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname";
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
        aria-hidden={!context.open}
        data-state={context.open ? "open" : "closed"}
        inert={context.open ? undefined : "true"}
        className={clsx("hds-accordion-item-content", className as undefined)}
        ref={ref}
        {...rest}
      >
        <div className={clsx("hds-accordion-item-content-inner")}>{children}</div>
      </Component>
    );
  });

AccordionContent.displayName = "Accordion.Content";
