import type { ButtonHTMLAttributes, MouseEvent, ReactNode } from "react";
import { forwardRef, useContext } from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname";
import type { OverridableComponent } from "../utils";
import { AccordionItemContext } from "./context";

export interface AccordionHeaderProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const AccordionHeader: OverridableComponent<AccordionHeaderProps, HTMLButtonElement> =
  forwardRef(({ as: Component = "button", children, className, onClick, ...rest }, ref) => {
    const context = useContext(AccordionItemContext);
    if (context === null) {
      return null;
    }
    const expandOrCollapse = (e: MouseEvent<HTMLButtonElement>) => {
      context.setOpen(!context.open);
      onClick && onClick(e);
    };
    return (
      <Component
        {...rest}
        aria-expanded={context.open}
        data-state={context.open ? "open" : "closed"}
        className={clsx("hds-accordion-item-header", className as undefined)}
        onClick={expandOrCollapse}
        ref={ref}
        type="button"
      >
        <span>{children}</span>
      </Component>
    );
  });

AccordionHeader.displayName = "Accordion.Header";
