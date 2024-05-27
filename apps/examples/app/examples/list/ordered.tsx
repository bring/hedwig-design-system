import "@postenbring/hedwig-css";
import { HStack, OrderedList } from "@postenbring/hedwig-react";

function Example() {
  return (
    <HStack gap="20" wrap>
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
    </HStack>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = { index: 1 };
