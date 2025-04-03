import "@postenbring/hedwig-css";
import { Button, HStack, VStack } from "@postenbring/hedwig-react";

function Example() {
  return (
    <HStack gap="24">
      <VStack gap="24" wrap align="center" style={{ paddingTop: "24px" }}>
        <Button>Primary</Button>
        <Button size="small">Primary</Button>
      </VStack>
      <VStack gap="24" wrap align="center" style={{ paddingTop: "24px" }}>
        <Button variant="secondary">Secondary</Button>
        <Button variant="secondary" size="small">
          Secondary
        </Button>
      </VStack>
      <VStack gap="24" wrap align="center" style={{ paddingTop: "24px" }}>
        <Button variant="tertiary">Tertiary</Button>
        <Button variant="tertiary" size="small">
          Tertiary
        </Button>
      </VStack>
      <VStack
        gap="24"
        wrap
        align="center"
        style={{ backgroundColor: "var(--hds-colors-darker)", padding: "24px" }}
      >
        <Button variant="inverted">Inverted</Button>
        <Button variant="inverted" size="small">
          Inverted
        </Button>
      </VStack>
    </HStack>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  index: 0,
};
