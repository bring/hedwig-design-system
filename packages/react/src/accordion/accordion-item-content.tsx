import type { HTMLAttributes, ReactNode } from "react";
import { forwardRef, useContext } from "react";
import { clsx } from "clsx";
import { t } from "@postenbring/hedwig-css/typed-classname/index.mjs";
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
          t("hds-accordion-item-content"),
          {
            [t(`hds-accordion-item-content--closed`)]: !context.open,
          },
          className,
        )}
        ref={ref}
      >
        {children}
      </Component>
    );
  });

AccordionContent.displayName = "AccordionContent";
