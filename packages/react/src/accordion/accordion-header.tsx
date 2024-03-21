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
    const itemContext = useContext(AccordionItemContext);
    if (itemContext === null) {
      return null;
    }
    const expandOrCollapse = (e: MouseEvent<HTMLButtonElement>) => {
      itemContext.setOpen(!itemContext.open);
      onClick && onClick(e);
    };
    return (
      <Component
        {...rest}
        aria-expanded={itemContext.open}
        className={clsx(
          "hds-accordion-item-header",
          { "hds-accordion-item-header--open": itemContext.open },
          className as undefined,
        )}
        onClick={expandOrCollapse}
        ref={ref}
        type="button"
      >
        <span>{children}</span>
      </Component>
    );
  });

AccordionHeader.displayName = "Accordion.Header";
