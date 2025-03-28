import "@postenbring/hedwig-css";
import { HStack, Button, VStack } from "@postenbring/hedwig-react";
import { GlobeIconSmall, EnvelopeIconLarge } from "../../assets/icon-examples";

function Example() {
  return (
    <HStack gap="24" style={{ padding: "24px" }}>
      <VStack gap="24" wrap align="center">
        <Button>
          <EnvelopeIconLarge />
          Leading
        </Button>
        <Button size="small">
          <GlobeIconSmall />
          Leading
        </Button>
      </VStack>
      <VStack gap="24" wrap align="center">
        <Button>
          <EnvelopeIconLarge />
        </Button>
        <Button size="small">
          <GlobeIconSmall />
        </Button>
      </VStack>
      <VStack gap="24" wrap align="center">
        <Button>
          Trailing
          <EnvelopeIconLarge />
        </Button>
        <Button size="small">
          Trailing
          <GlobeIconSmall />
        </Button>
      </VStack>
    </HStack>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  index: 1,
};
