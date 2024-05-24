import "@postenbring/hedwig-css";
import { Button, HStack, VStack } from "@postenbring/hedwig-react";

function Example() {
  return (
    <VStack gap="24">
      <HStack gap="24" wrap align="end">
        <Button size="large">Call to action</Button>
        <Button size="medium">Call to action</Button>
        <Button size="small">Call to action</Button>
      </HStack>
      <HStack gap="24" wrap align="end">
        <Button variant="primary-outline" size="large">
          Call to action
        </Button>
        <Button variant="primary-outline" size="medium">
          Call to action
        </Button>
        <Button variant="primary-outline" size="small">
          Call to action
        </Button>
      </HStack>
    </VStack>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  index: 0,
};
