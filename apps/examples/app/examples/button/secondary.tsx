import { HStack, SecondaryButton, VStack } from "@postenbring/hedwig-react";

function Example() {
  return (
    <VStack gap="24">
      <HStack gap="24" wrap align="end">
        <SecondaryButton size="large">Call to action</SecondaryButton>
        <SecondaryButton size="medium">Call to action</SecondaryButton>
        <SecondaryButton size="small">Call to action</SecondaryButton>
      </HStack>
      <HStack gap="24" wrap align="end">
        <SecondaryButton fill="outline" size="large">
          Call to action
        </SecondaryButton>
        <SecondaryButton fill="outline" size="medium">
          Call to action
        </SecondaryButton>
        <SecondaryButton fill="outline" size="small">
          Call to action
        </SecondaryButton>
      </HStack>
    </VStack>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  index: 1,
};
