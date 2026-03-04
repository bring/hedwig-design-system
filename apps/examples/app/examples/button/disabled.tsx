import "@postenbring/hedwig-css";
import { Button, HStack, VStack } from "@postenbring/hedwig-react";

function Example() {
  return (
    <HStack gap="24">
      <VStack gap="24" wrap align="center" style={{ paddingTop: "24px" }}>
        <Button disabled>Primary</Button>
        <Button disabled size="small">
          Primary
        </Button>
      </VStack>
      <VStack gap="24" wrap align="center" style={{ paddingTop: "24px" }}>
        <Button disabled variant="secondary">
          Secondary
        </Button>
        <Button disabled variant="secondary" size="small">
          Secondary
        </Button>
      </VStack>
      <VStack gap="24" wrap align="center" style={{ paddingTop: "24px" }}>
        <Button disabled variant="tertiary">
          Tertiary
        </Button>
        <Button disabled variant="tertiary" size="small">
          Tertiary
        </Button>
      </VStack>
    </HStack>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  index: 3,
};
