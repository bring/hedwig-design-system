import "@postenbring/hedwig-css";
import { Tag, HStack } from "@postenbring/hedwig-react";

function Example() {
  return (
    <HStack gap="8" align="end">
      <Tag size="default">Default</Tag>
      <Tag size="small">Small</Tag>
    </HStack>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  index: 3,
  description:
    "The <code>size</code> prop sets the size of the tag. Defaults to <code>default</code>.",
};
