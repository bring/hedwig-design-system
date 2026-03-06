import "@postenbring/hedwig-css";
import { Badge, HStack } from "@postenbring/hedwig-react";

function Example() {
  return (
    <HStack gap="8" align="end">
      <Badge data-color="error">Error</Badge>
      <Badge data-color="error" size="smaller">
        Error
      </Badge>
    </HStack>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  index: 8,
};
