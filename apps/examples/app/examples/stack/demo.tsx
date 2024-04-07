import { Stack, Box } from "@postenbring/hedwig-react";

function Example() {
  return (
    <Stack gap="12-16" direction={{ xsmall: "column", small: "row" }}>
      <Box>1</Box>
      <Box>2</Box>
      <Box>3</Box>
    </Stack>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {};
