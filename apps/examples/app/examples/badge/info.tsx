import "@postenbring/hedwig-css";
import { Badge, HStack } from "@postenbring/hedwig-react";

function Example() {
  return (
    <HStack gap="8" align="end">
      <Badge data-color="info">Info</Badge>
      <Badge data-color="info" size="smaller">
        Info
      </Badge>
    </HStack>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  index: 4,
};
