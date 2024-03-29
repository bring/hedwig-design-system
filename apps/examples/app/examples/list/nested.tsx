import { OrderedList, UnorderedList } from "@postenbring/hedwig-react";

function Example() {
  return (
    <div style={{ display: "flex", gap: "var(--hds-spacing-32)" }}>
      <UnorderedList>
        <li>
          List item
          <UnorderedList>
            <li>Nested list item</li>
            <li>Nested list item</li>
            <li>Nested list item</li>
          </UnorderedList>
        </li>
        <li>List item</li>
      </UnorderedList>
      <OrderedList>
        <li>
          List item
          <OrderedList>
            <li>Nested list item</li>
            <li>Nested list item</li>
            <li>Nested list item</li>
          </OrderedList>
        </li>
        <li>List item</li>
      </OrderedList>
    </div>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = { index: 3 };
