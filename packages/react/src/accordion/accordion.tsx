import type { HTMLAttributes, ReactElement } from "react";
import { forwardRef } from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname";
import type { AccordionItemProps } from "./accordion-item";

export interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Accepts type of <AccordionItem/>
   */
  children: ReactElement<AccordionItemProps> | ReactElement<AccordionItemProps>[];

  /**
   * Adds padding to the left of the accordion
   */
  indent?: boolean;
}

export const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
  ({ children, className, indent = true, ...rest }, ref) => {
    return (
      <div
        {...rest}
        className={clsx(
          "hds-accordion",
          !indent && "hds-accordion--no-indent",
          className as undefined,
        )}
        ref={ref}
      >
        {children}
      </div>
    );
  },
);

Accordion.displayName = "Accordion";
