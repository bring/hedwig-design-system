import { PrimaryButton, HStack, VStack } from "@postenbring/hedwig-react";

function Example() {
  return (
    <VStack gap="24">
      <HStack gap="24" wrap align="end">
        <PrimaryButton size="large">Call to action</PrimaryButton>
        <PrimaryButton size="medium">Call to action</PrimaryButton>
        <PrimaryButton size="small">Call to action</PrimaryButton>
      </HStack>
      <HStack gap="24" wrap align="end">
        <PrimaryButton fill="outline" size="large">
          Call to action
        </PrimaryButton>
        <PrimaryButton fill="outline" size="medium">
          Call to action
        </PrimaryButton>
        <PrimaryButton fill="outline" size="small">
          Call to action
        </PrimaryButton>
      </HStack>
    </VStack>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  index: 0,
};
