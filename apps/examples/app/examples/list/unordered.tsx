import { UnorderedList } from "@postenbring/hedwig-react";

function Example() {
  return (
    <div style={{ display: "flex", gap: "var(--hds-spacing-20)" }}>
      <UnorderedList size="large">
        <li>List item</li>
        <li>List item</li>
        <li>List item</li>
      </UnorderedList>
      <UnorderedList size="medium">
        <li>List item</li>
        <li>List item</li>
        <li>List item</li>
      </UnorderedList>
      <UnorderedList size="small">
        <li>List item</li>
        <li>List item</li>
        <li>List item</li>
      </UnorderedList>
    </div>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = { index: 0 };
