import type { ReactElement } from "react";
import { forwardRef } from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname";
import { AccordionItem, type AccordionItemProps } from "./accordion-item";
import { AccordionHeader } from "./accordion-header";
import { AccordionContent } from "./accordion-content";

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Accepts type of <AccordionItem/>
   */
  children: ReactElement<AccordionItemProps> | ReactElement<AccordionItemProps>[];

  /**
   * Adds padding to the left of the accordion
   */
  indent?: boolean;
}

/**
 * @example
 * ```tsx
 * <Accordion>
 *   <Accordion.Item defaultOpen>
 *     <Accordion.Header>Item one</Accordion.Header>
 *     <Accordion.Content>
 *       Some content
 *     </Accordion.Content>
 *   </Accordion.Item>
 *   <Accordion.Item>
 *     <Accordion.Header>Item two</Accordion.Header>
 *     <Accordion.Content>
 *       Some more content
 *     </Accordion.Content>
 *   </Accordion.Item>
 * </Accordion>
 * ```
 */
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
) as AccordionType;
Accordion.displayName = "Accordion";

Accordion.Item = AccordionItem;
Accordion.Header = AccordionHeader;
Accordion.Content = AccordionContent;

type AccordionType = ReturnType<typeof forwardRef<HTMLDivElement, AccordionProps>> & {
  Item: typeof AccordionItem;
  Header: typeof AccordionHeader;
  Content: typeof AccordionContent;
};
