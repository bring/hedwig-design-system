import { Box, HStack, Badge } from "@postenbring/hedwig-react";

function Example() {
  return (
    <Box>
      <HStack gap="8" align="end">
        <Badge variant="white">White</Badge>
        <Badge variant="white" size="smaller">
          White
        </Badge>
      </HStack>
    </Box>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  index: 2,
};
