import { Text, VStack } from "@postenbring/hedwig-react";

function Example() {
  return (
    <VStack gap="16">
      <div>
        <Text variant="h1-display" as="p">
          Display
        </Text>
        <Text variant="h1" as="p">
          H1
        </Text>
        <Text variant="h2" as="p">
          H2
        </Text>
        <Text variant="h3" as="p">
          H3
        </Text>
        <Text variant="body">Body</Text>
        <Text variant="body-small">Body Small</Text>
        <Text variant="technical">Technical</Text>
        <Text variant="caption">Caption</Text>
      </div>
      <div>
        <Text variant="h3-title" as="p">
          H3 Title
        </Text>
        <Text variant="body-title">Body Title</Text>
        <Text variant="body-small-title">Body Small Title</Text>
        <Text variant="technical-title">Technical Title</Text>
        <Text variant="caption-title">Caption Title</Text>
      </div>
    </VStack>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  index: 0,
};
