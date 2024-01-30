import type { ButtonHTMLAttributes, MouseEvent, ReactNode } from "react";
import { forwardRef, useContext } from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname/index.mjs";
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
          "hds-accordion-item-trigger",
          { "hds-accordion-item-trigger--open": itemContext.open },
          className as undefined,
        )}
        onClick={expandOrCollapse}
        ref={ref}
        type="button"
      >
        <span className={clsx("hds-accordion-item-trigger--icon")}>
          <svg
            fill="none"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g className="hds-accordion-item-trigger--icon-chevron">
              <path
                className="hds-accordion-item-trigger--icon-chevron_down"
                d="M19.6289 9.15625L18.9609 8.45312C18.7852 8.27734 18.5039 8.27734 18.3633 8.45312L12 14.8164L5.60156 8.45312C5.46094 8.27734 5.17969 8.27734 5.00391 8.45312L4.33594 9.15625C4.16016 9.29688 4.16016 9.57812 4.33594 9.75391L11.6836 17.1016C11.8594 17.2773 12.1055 17.2773 12.2812 17.1016L19.6289 9.75391C19.8047 9.57812 19.8047 9.29688 19.6289 9.15625Z"
              />
            </g>
          </svg>
        </span>
        <span>{children}</span>
      </Component>
    );
  });

AccordionHeader.displayName = "Accordion.Header";
