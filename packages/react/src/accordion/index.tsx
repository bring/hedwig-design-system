import "@postenbring/hedwig-css/dist/fonts.css";
import "@postenbring/hedwig-css/dist/tokens.css";
import "@postenbring/hedwig-css/dist/body.css";

import "@postenbring/hedwig-css/dist/accordion.css";

import { Accordion } from "./accordion";
import { AccordionItem } from "./accordion-item";
import { AccordionHeader } from "./accordion-header";
import { AccordionContent } from "./accordion-content";

const AccordionComponent = Accordion as typeof Accordion & {
  Item: typeof AccordionItem;
  Header: typeof AccordionHeader;
  Content: typeof AccordionContent;
};

AccordionComponent.Item = AccordionItem;
AccordionComponent.Header = AccordionHeader;
AccordionComponent.Content = AccordionContent;

export { AccordionComponent as Accordion };

export type * from "./accordion";
export type * from "./accordion-item";
export type * from "./accordion-header";
export type * from "./accordion-content";
