import { HStack, WhiteBadge } from "@postenbring/hedwig-react";

function Example() {
  return (
    <HStack gap="8" align="end">
      <WhiteBadge>White</WhiteBadge>
      <WhiteBadge size="smaller">White</WhiteBadge>
    </HStack>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  index: 2,
};
