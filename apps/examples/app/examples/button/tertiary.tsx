import "@postenbring/hedwig-css";
import { HStack, Button, VStack } from "@postenbring/hedwig-react";

function Example() {
  return (
    <VStack gap="24">
      <HStack gap="24" wrap align="end">
        <Button variant="tertiary">Call to action</Button>
        <Button variant="tertiary" disabled>
          Call to action
        </Button>
      </HStack>
      <HStack gap="24" wrap align="end">
        <Button variant="tertiary" size="small">
          Call to action
        </Button>
        <Button variant="tertiary" size="small" disabled>
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
