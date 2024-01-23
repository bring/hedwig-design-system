import "@postenbring/hedwig-css/dist/fonts.css";
import "@postenbring/hedwig-css/dist/tokens.css";
import "@postenbring/hedwig-css/dist/body.css";

import "@postenbring/hedwig-css/dist/accordion.css";

import { Accordion } from "./accordion";
import { AccordionItem } from "./accordion-item";
import { AccordionTrigger } from "./accordion-trigger";
import { AccordionContent } from "./accordion-content";

const AccordionComponent = Accordion as typeof Accordion & {
  Item: typeof AccordionItem;
  Trigger: typeof AccordionTrigger;
  Content: typeof AccordionContent;
};

AccordionComponent.Item = AccordionItem;
AccordionComponent.Trigger = AccordionTrigger;
AccordionComponent.Content = AccordionContent;

export { AccordionComponent as Accordion };

export type * from "./accordion";
export type * from "./accordion-item";
export type * from "./accordion-trigger";
export type * from "./accordion-content";
