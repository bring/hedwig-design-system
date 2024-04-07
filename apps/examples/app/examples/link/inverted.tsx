import { Box, Link, VStack } from "@postenbring/hedwig-react";

function Example() {
  return (
    <Box
      style={{
        backgroundColor: "var(--hds-ui-colors-black)",
      }}
    >
      <VStack gap="40" align="center">
        <Link href="#demo-link" variant="inverted" size="medium">
          Call to action
        </Link>
        <Link href="#demo-link" variant="inverted" size="small">
          Call to action
        </Link>
        <Link href="#demo-link" variant="inverted" size="large">
          Call to action
        </Link>
      </VStack>
    </Box>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  index: 1,
};
