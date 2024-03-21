import type { HTMLAttributes, ReactElement } from "react";
import { forwardRef } from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname";
import type { OverridableComponent } from "../utils";
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

  className?: string;
}

export const Accordion: OverridableComponent<AccordionProps, HTMLDivElement> = forwardRef(
  ({ as: Component = "div", children, className, indent = true, ...rest }, ref) => {
    return (
      <Component
        {...rest}
        className={clsx(
          "hds-accordion",
          !indent && "hds-accordion--no-indent",
          className as undefined,
        )}
        ref={ref}
      >
        {children}
      </Component>
    );
  },
);

Accordion.displayName = "Accordion";
