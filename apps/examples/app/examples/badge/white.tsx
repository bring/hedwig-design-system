import { Box, HStack, WhiteBadge } from "@postenbring/hedwig-react";

function Example() {
  return (
    <Box>
      <HStack gap="8" align="end">
        <WhiteBadge>White</WhiteBadge>
        <WhiteBadge size="smaller">White</WhiteBadge>
      </HStack>
    </Box>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  index: 2,
};
