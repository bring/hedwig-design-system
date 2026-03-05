import "@postenbring/hedwig-css";
import { HStack, Box } from "@postenbring/hedwig-react";

function Example() {
  return (
    <HStack gap="12-16">
      <Box>1</Box>
      <Box>2</Box>
      <Box>3</Box>
    </HStack>
  );
}

export default Example;

import type { ExampleConfig } from "../..";
export const config: ExampleConfig = { index: 0 };
