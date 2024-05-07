import type { ReactNode } from "react";
import { forwardRef, useContext } from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname";
import { AccordionItemContext } from "./context";

export interface AccordionContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const AccordionContent = forwardRef<HTMLDivElement, AccordionContentProps>(
  ({ children, className, ...rest }, ref) => {
    const context = useContext(AccordionItemContext);
    if (context === null) {
      return null;
    }
    return (
      <div
        aria-hidden={!context.open}
        data-state={context.open ? "open" : "closed"}
        {...{ inert: context.open ? "true" : undefined }}
        className={clsx("hds-accordion-item-content", className as undefined)}
        ref={ref}
        {...rest}
      >
        <div className={clsx("hds-accordion-item-content-inner")}>{children}</div>
      </div>
    );
  },
);

AccordionContent.displayName = "Accordion.Content";
