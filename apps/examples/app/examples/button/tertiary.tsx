import "@postenbring/hedwig-css";
import { HStack, Button, VStack } from "@postenbring/hedwig-react";
import { GlobeIconSmall, EnvelopeIconLarge } from "../../assets/icon-examples";

function Example() {
  return (
    <VStack gap="24">
      <h2>Large - Only text</h2>
      <HStack gap="24" wrap align="end">
        <Button variant="tertiary">Call to action</Button>
        <Button variant="tertiary" disabled>
          Disabled
        </Button>
      </HStack>
      <h2>Small - Only text</h2>
      <HStack gap="24" wrap align="end">
        <Button variant="tertiary" size="small">
          Call to action
        </Button>
        <Button variant="tertiary" size="small" disabled>
          Disabled
        </Button>
      </HStack>
      <h2>Large - With leading icon</h2>
      <HStack gap="24" wrap align="end">
        <Button variant="tertiary">
          <EnvelopeIconLarge />
          Call to action
        </Button>
        <Button variant="tertiary" disabled>
          <EnvelopeIconLarge />
          Disabled
        </Button>
      </HStack>
      <h2>Small - With leading icon</h2>
      <HStack gap="24" wrap align="end">
        <Button variant="tertiary" size="small">
          <GlobeIconSmall />
          Call to action
        </Button>
        <Button variant="tertiary" size="small" disabled>
          <GlobeIconSmall />
          Disabled
        </Button>
      </HStack>
      <h2>Large - With only icon</h2>
      <HStack gap="24" wrap align="end">
        <Button variant="tertiary">
          <EnvelopeIconLarge />
        </Button>
        <Button disabled>
          <EnvelopeIconLarge />
        </Button>
      </HStack>
      <h2>Small - With only icon</h2>
      <HStack gap="24" wrap align="end">
        <Button variant="tertiary" size="small">
          <GlobeIconSmall />
        </Button>
        <Button variant="tertiary" size="small" disabled>
          <GlobeIconSmall />
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
