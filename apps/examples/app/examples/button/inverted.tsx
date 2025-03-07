import "@postenbring/hedwig-css";
import { HStack, Button, VStack } from "@postenbring/hedwig-react";
import { GlobeIconSmall, EnvelopeIconLarge } from "../../assets/icon-examples";

function Example() {
  return (
    <VStack gap="24" style={{ backgroundColor: "var(--hds-colors-darker)", padding: "24px" }}>
      <h2 style={{ color: "white" }}>Large - Only text</h2>
      <HStack gap="24" wrap align="end">
        <Button variant="inverted">Call to action</Button>
        <Button variant="inverted" disabled>
          Disabled
        </Button>
      </HStack>
      <h2 style={{ color: "white" }}>Small - Only text</h2>
      <HStack gap="24" wrap align="end">
        <Button variant="inverted" size="small">
          Call to action
        </Button>
        <Button variant="inverted" size="small" disabled>
          Disabled
        </Button>
      </HStack>
      <h2 style={{ color: "white" }}>Large - With leading icon</h2>
      <HStack gap="24" wrap align="end">
        <Button variant="inverted">
          <EnvelopeIconLarge />
          Call to action
        </Button>
        <Button variant="inverted" disabled>
          <EnvelopeIconLarge />
          Disabled
        </Button>
      </HStack>
      <h2 style={{ color: "white" }}>Small - With leading icon</h2>
      <HStack gap="24" wrap align="end">
        <Button variant="inverted" size="small">
          <GlobeIconSmall />
          Call to action
        </Button>
        <Button variant="inverted" size="small" disabled>
          <GlobeIconSmall />
          Disabled
        </Button>
      </HStack>
      <h2 style={{ color: "white" }}>Large - With only icon</h2>
      <HStack gap="24" wrap align="end">
        <Button variant="inverted">
          <EnvelopeIconLarge />
        </Button>
        <Button variant="inverted" disabled>
          <EnvelopeIconLarge />
        </Button>
      </HStack>
      <h2 style={{ color: "white" }}>Small - With only icon</h2>
      <HStack gap="24" wrap align="end">
        <Button variant="inverted" size="small">
          <GlobeIconSmall />
        </Button>
        <Button variant="inverted" size="small" disabled>
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
