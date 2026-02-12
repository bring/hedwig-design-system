import "@postenbring/hedwig-css";
import { HStack, Button, VStack } from "@postenbring/hedwig-react";
import { GlobeIcon, EnvelopeIcon } from "../../assets/icon-examples";

function Example() {
  return (
    <HStack gap="24" style={{ padding: "24px" }}>
      <VStack gap="24" wrap align="center">
        <Button icon="leading">
          <EnvelopeIcon />
          Leading
        </Button>
        <Button size="small" icon="leading">
          <GlobeIcon />
          Leading
        </Button>
      </VStack>
      <VStack gap="24" wrap align="center">
        <Button icon>
          <EnvelopeIcon />
        </Button>
        <Button size="small" icon>
          <GlobeIcon />
        </Button>
      </VStack>
      <VStack gap="24" wrap align="center">
        <Button icon="trailing">
          Trailing
          <EnvelopeIcon />
        </Button>
        <Button size="small" icon="trailing">
          Trailing
          <GlobeIcon />
        </Button>
      </VStack>
    </HStack>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  index: 1,
  description:
    "Buttons with icons have less padding between the icon and the edge of the button. Therefore we have a separate `icon` prop.",
};
