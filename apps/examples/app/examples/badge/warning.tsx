import { HStack, WarningBadge } from "@postenbring/hedwig-react";

function Example() {
  return (
    <HStack gap="8" align="end">
      <WarningBadge>Warning</WarningBadge>
      <WarningBadge size="smaller">Warning</WarningBadge>
    </HStack>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  index: 3,
};
