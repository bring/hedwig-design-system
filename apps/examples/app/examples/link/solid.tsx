import "@postenbring/hedwig-css";
import { Box, Link, VStack } from "@postenbring/hedwig-react";

function Example() {
  return (
    <Box variant="warning">
      <VStack gap="40" align="center">
        <Link href="#demo-link" variant="solid" size="default">
          Call to action
        </Link>
        <Link href="#demo-link" variant="solid" size="small">
          Call to action
        </Link>
        <Link href="#demo-link" variant="solid" size="large">
          Call to action
        </Link>
        <Link href="#demo-link" variant="solid" size="technical">
          Call to action
        </Link>
      </VStack>
    </Box>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  index: 2,
};
