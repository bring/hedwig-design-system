import "@postenbring/hedwig-css";
import { Tag, HStack } from "@postenbring/hedwig-react";

function Example() {
  return (
    <HStack gap="8" align="end">
      <Tag>Default</Tag>
      <Tag data-color="posten">Posten</Tag>
      <Tag data-color="bring">Bring</Tag>
      <Tag data-color="neutral">Neutral</Tag>
      <Tag data-color="info">Info</Tag>
      <Tag data-color="success">Success</Tag>
      <Tag data-color="warning">Warning</Tag>
      <Tag data-color="error">Error</Tag>
    </HStack>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  index: 1,
  description: "The <code>data-color</code> prop sets the semantic color of the tag.",
};
