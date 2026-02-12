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
        <Accordion.Header>One</Accordion.Header>
        <Accordion.Content>
          Lorum ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item onOpenChange={() => toggle("two")} open={openItem === "two"}>
        <Accordion.Header>Two</Accordion.Header>
        <Accordion.Content>
          Lorum ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item onOpenChange={() => toggle("three")} open={openItem === "three"}>
        <Accordion.Header>Three</Accordion.Header>
        <Accordion.Content>
          Lorum ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget
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
