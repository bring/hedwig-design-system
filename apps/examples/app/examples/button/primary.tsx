import "@postenbring/hedwig-css";
import { Button, HStack, VStack } from "@postenbring/hedwig-react";
import { GlobeIconSmall, EnvelopeIconLarge } from "../../assets/icon-examples";

function Example() {
  return (
    <VStack gap="24">
      <h2>Large - Only text</h2>
      <HStack gap="24" wrap align="end">
        <Button>Call to action</Button>
        <Button disabled>Disabled</Button>
      </HStack>
      <h2>Small - Only text</h2>
      <HStack gap="24" wrap align="end">
        <Button size="small">Call to action</Button>
        <Button size="small" disabled>
          Disabled
        </Button>
      </HStack>
      <h2>Large - With leading icon</h2>
      <HStack gap="24" wrap align="end">
        <Button>
          <EnvelopeIconLarge />
          Call to action
        </Button>
        <Button disabled>
          <EnvelopeIconLarge />
          Disabled
        </Button>
      </HStack>
      <h2>Small - With leading icon</h2>
      <HStack gap="24" wrap align="end">
        <Button size="small">
          <GlobeIconSmall />
          Call to action
        </Button>
        <Button size="small" disabled>
          <GlobeIconSmall />
          Disabled
        </Button>
      </HStack>
      <h2>Large - With only icon</h2>
      <HStack gap="24" wrap align="end">
        <Button>
          <EnvelopeIconLarge />
        </Button>
        <Button disabled>
          <EnvelopeIconLarge />
        </Button>
      </HStack>
      <h2>Small - With only icon</h2>
      <HStack gap="24" wrap align="end">
        <Button size="small">
          <GlobeIconSmall />
        </Button>
        <Button size="small" disabled>
          <GlobeIconSmall />
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
