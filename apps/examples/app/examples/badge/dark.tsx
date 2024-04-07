import { DarkBadge, HStack } from "@postenbring/hedwig-react";

function Example() {
  return (
    <HStack gap="8" align="end">
      <DarkBadge>Dark</DarkBadge>
      <DarkBadge size="smaller">Dark</DarkBadge>
    </HStack>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  index: 1,
};
