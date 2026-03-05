import "@postenbring/hedwig-css";
import { HStack, Badge } from "@postenbring/hedwig-react";

function Example() {
  return (
    <HStack gap="8" align="end">
      <Badge variant="warning">Warning</Badge>
      <Badge variant="warning" size="smaller">
        Warning
      </Badge>
    </HStack>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  index: 3,
};
