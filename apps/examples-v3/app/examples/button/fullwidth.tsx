import "@postenbring/hedwig-css";
import { Button, HStack, VStack } from "@postenbring/hedwig-react";

function Example() {
  return (
    <VStack gap="24" wrap>
      <HStack gap="8" wrap>
        <Button fullWidth="mobile">Primary</Button>
        <Button fullWidth="mobile" variant="secondary">
          Secondary
        </Button>
      </HStack>
      <HStack gap="8" wrap style={{ paddingTop: "24px", width: "250px" }}>
        <Button fullWidth>Fullwidth</Button>
      </HStack>
    </VStack>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  index: 3,
  layout: "centered-fullwidth",
  breakpointIndicator: true,
  description: `Button will be fullwidth on mobile screens when <code>fullWidth="mobile"</code> is set. And the button will be fullwidth on all screens when <code>fullWidth</code> is set.`,
};
