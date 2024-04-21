import { Box, Input } from "@postenbring/hedwig-react";

function Example() {
  return (
    <Box>
      <Input label="Label" variant="white" />
    </Box>
  );
}

export default Example;

import type { ExampleConfig } from "../..";
export const config: ExampleConfig = {
  layout: "centered-fullwidth",
};
