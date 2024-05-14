import { HStack, Button, VStack } from "@postenbring/hedwig-react";

function Example() {
  return (
    <VStack gap="24">
      <HStack gap="24" wrap align="end">
        <Button variant="secondary" size="large">
          Call to action
        </Button>
        <Button variant="secondary" size="medium">
          Call to action
        </Button>
        <Button variant="secondary" size="small">
          Call to action
        </Button>
      </HStack>
      <HStack gap="24" wrap align="end">
        <Button variant="secondary-outline" size="large">
          Call to action
        </Button>
        <Button variant="secondary-outline" size="medium">
          Call to action
        </Button>
        <Button variant="secondary-outline" size="small">
          Call to action
        </Button>
      </HStack>
    </VStack>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  index: 1,
};
