import "@postenbring/hedwig-css";
import { Button, HStack } from "@postenbring/hedwig-react";

function Example() {
  return (
    <HStack gap="8" wrap>
      <Button fullWidth="mobile">Main action</Button>
      <Button variant="primary-outline" fullWidth="mobile">
        Alternative action
      </Button>
    </HStack>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  index: 3,
  layout: "centered-fullwidth",
  breakpointIndicator: "top",
  description: `A main and alternative action button set that become fullwidth on mobile`,
};
