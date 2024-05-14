import { HStack, Badge } from "@postenbring/hedwig-react";

function Example() {
  return (
    <HStack gap="8" align="end">
      <Badge variant="warning">Warning</Badge>
      <Badge size="smaller">Warning</Badge>
    </HStack>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  index: 3,
};
