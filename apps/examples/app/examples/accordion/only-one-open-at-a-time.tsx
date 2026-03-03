import "@postenbring/hedwig-css";
import { useState } from "react";
import { Accordion } from "@postenbring/hedwig-react";

function Example() {
  const [openItem, setOpenItem] = useState<"one" | "two" | "three" | undefined>("one");
  function toggle(item: typeof openItem) {
    setOpenItem(item === openItem ? undefined : item);
  }

  return (
    <Accordion>
      <Accordion.Item onOpenChange={() => toggle("one")} open={openItem === "one"}>
        <Accordion.Header>Can the mail be forwarded abroad?</Accordion.Header>
        <Accordion.Content>
          Yes, with some limitations. Shipments of items cannot be forwarded abroad due to customs
          declaration.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item onOpenChange={() => toggle("two")} open={openItem === "two"}>
        <Accordion.Header>Will all mail be forwarded to new address?</Accordion.Header>
        <Accordion.Content>
          All types of addressed mail distributed through Posten will be forwarded. Within Norway,
          it also applies to items sent in letters.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item onOpenChange={() => toggle("three")} open={openItem === "three"}>
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
  description:
    "To only allow one accordion to be open at the time, you need to control the <code>open</code> prop. Use the <code>onOpenChange</code> prop to toggle the state of the accordion items.",
  index: 1,
  layout: "padding-only",
};
