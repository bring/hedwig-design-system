import "@postenbring/hedwig-css";
import { Accordion } from "@postenbring/hedwig-react";

function Example() {
  return (
    <Accordion>
      <Accordion.Item>
        <Accordion.Header>Can the mail be forwarded abroad?</Accordion.Header>
        <Accordion.Content>
          Yes, with some limitations. Shipments of items cannot be forwarded abroad due to customs
          declaration.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item defaultOpen>
        <Accordion.Header>Will all mail be forwarded to new address?</Accordion.Header>
        <Accordion.Content>
          All types of addressed mail distributed through Posten will be forwarded. Within Norway,
          it also applies to items sent in letters.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item>
        <Accordion.Header>How do I change my order?</Accordion.Header>
        <Accordion.Content>
          Sign in to My address or call customer service at 22 03 00 00.
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  index: 0,
  layout: "padding-only",
};
