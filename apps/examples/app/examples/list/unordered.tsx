import { HStack, UnorderedList } from "@postenbring/hedwig-react";

function Example() {
  return (
    <HStack gap="20" wrap>
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
    </HStack>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = { index: 0 };
