import "@postenbring/hedwig-css";
import { Badge, HStack } from "@postenbring/hedwig-react";

function Example() {
  return (
    <HStack gap="8" align="end">
      <Badge variant="darker">Darker</Badge>
      <Badge variant="darker" size="smaller">
        Darker
      </Badge>
    </HStack>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  index: 2,
};
