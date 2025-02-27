import "@postenbring/hedwig-css";
import { HStack, Button, VStack, Container } from "@postenbring/hedwig-react";

function Example() {
  return (
    <Container style={{ backgroundColor: "var(--hds-colors-darker)", padding: "24px" }}>
      <VStack gap="24">
        <HStack gap="24" wrap align="end">
          <Button variant="inverted">Call to action</Button>
          <Button variant="inverted" disabled>
            Disabled
          </Button>
        </HStack>
        <HStack gap="24" wrap align="end">
          <Button variant="inverted" size="small">
            Call to action
          </Button>
          <Button variant="inverted" size="small" disabled>
            Disabled
          </Button>
        </HStack>
      </VStack>
    </Container>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  index: 1,
};
