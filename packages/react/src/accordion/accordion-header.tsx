import type { MouseEvent, ReactNode } from "react";
import { forwardRef, useContext } from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname";
import { AccordionItemContext } from "./context";

export interface AccordionHeaderProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const AccordionHeader = forwardRef<HTMLButtonElement, AccordionHeaderProps>(
  ({ children, className, onClick, ...rest }, ref) => {
    const context = useContext(AccordionItemContext);
    if (context === null) {
      return null;
    }
    const expandOrCollapse = (e: MouseEvent<HTMLButtonElement>) => {
      context.setOpen(!context.open);
      onClick?.(e);
    };
    return (
      <button
        {...rest}
        aria-expanded={context.open}
        aria-controls={context.contentId}
        data-state={context.open ? "open" : "closed"}
        className={clsx("hds-accordion-item-header", className as undefined)}
        onClick={expandOrCollapse}
        ref={ref}
        type="button"
      >
        <span>{children}</span>
      </button>
    );
  },
);

AccordionHeader.displayName = "Accordion.Header";
