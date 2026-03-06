import "@postenbring/hedwig-css";
import { Badge, HStack } from "@postenbring/hedwig-react";

function Example() {
  return (
    <HStack gap="8" align="end">
      <Badge variant="lighter">Lighter</Badge>
      <Badge variant="lighter" size="smaller">
        Lighter
      </Badge>
    </HStack>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  index: 1,
};
