import "@postenbring/hedwig-css";
import { VStack, Box } from "@postenbring/hedwig-react";

function Example() {
  return (
    <VStack gap="12-16">
      <Box>1</Box>
      <Box>2</Box>
      <Box>3</Box>
    </VStack>
  );
}

export default Example;

import type { ExampleConfig } from "../..";
export const config: ExampleConfig = { index: 1 };
