import "@postenbring/hedwig-css";
import { useState } from "react";
import { Accordion } from "@postenbring/hedwig-react";

function Example() {
  const [state, setState] = useState({ one: true, two: false, three: false });
  function toggle(key: keyof typeof state) {
    setState((prev) => {
      return {
        one: key === "one" ? !prev.one : false,
        two: key === "two" ? !prev.two : false,
        three: key === "three" ? !prev.three : false,
      };
    });
  }

  return (
    <Accordion>
      <Accordion.Item onOpenChange={() => toggle("one")} open={state.one}>
        <Accordion.Header>One</Accordion.Header>
        <Accordion.Content>
          Lorum ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item onOpenChange={() => toggle("two")} open={state.two}>
        <Accordion.Header>Two</Accordion.Header>
        <Accordion.Content>
          Lorum ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item onOpenChange={() => toggle("three")} open={state.three}>
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
