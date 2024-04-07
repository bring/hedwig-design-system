import { PrimaryButton, HStack } from "@postenbring/hedwig-react";

function Example() {
  return (
    <HStack gap="8" wrap>
      <PrimaryButton fullWidth="mobile">Main action</PrimaryButton>
      <PrimaryButton fill="outline" fullWidth="mobile">
        Alternative action
      </PrimaryButton>
    </HStack>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  index: 3,
  layout: "centered-fullwidth",
  breakpointIndicator: true,
  description: `A main and alternative action button set that become fullwidth on mobile`,
};
