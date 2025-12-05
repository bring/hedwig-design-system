import "@postenbring/hedwig-css";
import { Badge, HStack } from "@postenbring/hedwig-react";

function Example() {
  return (
    <HStack gap="8" align="end">
      <Badge data-color="neutral">Info</Badge>
      <Badge data-color="neutral" size="smaller">
        Info
      </Badge>
    </HStack>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  index: 5,
};
