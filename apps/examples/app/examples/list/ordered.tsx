import { OrderedList } from "@postenbring/hedwig-react";

function Example() {
  return (
    <div style={{ display: "flex", gap: "var(--hds-spacing-20)" }}>
      <OrderedList size="large">
        <li>List item</li>
        <li>List item</li>
        <li>List item</li>
      </OrderedList>
      <OrderedList size="medium">
        <li>List item</li>
        <li>List item</li>
        <li>List item</li>
      </OrderedList>
      <OrderedList size="small">
        <li>List item</li>
        <li>List item</li>
        <li>List item</li>
      </OrderedList>
    </div>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = { index: 1 };
