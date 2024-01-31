import type { HTMLAttributes, ReactElement } from "react";
import { forwardRef, useState } from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname/index.mjs";
import type { OverridableComponent } from "../utils";
import { AccordionItemContext } from "./context";
import type { AccordionHeaderProps } from "./accordion-header";
import type { AccordionContentProps } from "./accordion-content";

export type AccordionItemChildrenType =
  | ReactElement<AccordionHeaderProps>
  | ReactElement<AccordionContentProps>;

export interface AccordionItemProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Control the open state of the accordion manually
   */
  open?: boolean;

  /**
   * Use with open to control the open state of the accordion manually
   */
  onOpenChange?: (open: boolean) => void;

  /**
   * If the accordion should be open by default
   */
  defaultOpen?: boolean;

  /**
   * Accepts type of Accordion.Content and Accordion.Header
   */
  children: AccordionItemChildrenType[];
}

export const AccordionItem: OverridableComponent<AccordionItemProps, HTMLDivElement> = forwardRef(
  (
    {
      as: Component = "div",
      children,
      defaultOpen,
      open: outerOpen,
      onOpenChange,
      className,
      ...rest
    },
    ref,
  ) => {
    const [innerOpen, setInnerOpen] = useState(defaultOpen ?? false);
    const open = outerOpen ?? innerOpen;

    const handleOpen = () => {
      if (outerOpen !== undefined) {
        onOpenChange && onOpenChange(!open);
      } else {
        setInnerOpen(!open);
      }
    };

    return (
      <Component
        {...rest}
        className={clsx(
          "hds-accordion-item",
          {
            "hds-accordion-item__expanded": open,
          },
          className as undefined,
        )}
        ref={ref}
      >
        <AccordionItemContext.Provider value={{ open, setOpen: handleOpen }}>
          {children}
        </AccordionItemContext.Provider>
      </Component>
    );
  },
);

AccordionItem.displayName = "Accordion.Item";
