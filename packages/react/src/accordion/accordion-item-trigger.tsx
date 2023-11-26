import type { ButtonHTMLAttributes, MouseEvent, ReactNode } from "react";
import { forwardRef, useContext } from "react";
import { t } from "@postenbring/hedwig-css/typed-classname/index.mjs";
import { clsx } from "clsx";
import type { OverridableComponent } from "../utils";
import { AccordionItemContext } from "./context";

export interface AccordionTriggerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

function FaArrowDownButNotReally() {
  return <span>v </span>;
}

function FaArrowUpButNotReally() {
  return <span>^ </span>;
}

export const AccordionTrigger: OverridableComponent<AccordionTriggerProps, HTMLButtonElement> =
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
        className={clsx(t("hds-accordion-item-trigger"), className)}
        onClick={expandOrCollapse}
        ref={ref}
        type="button"
      >
        <span>
          <div className={clsx(t("hds-accordion-item-trigger--icon"))}>
            {itemContext.open ? <FaArrowUpButNotReally /> : <FaArrowDownButNotReally />}
          </div>
          {children}
        </span>
      </Component>
    );
  });

AccordionTrigger.displayName = "AccordionTrigger";
