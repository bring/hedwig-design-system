import "@postenbring/hedwig-css";
import { Box, Textarea, VStack } from "@postenbring/hedwig-react";

function Example() {
  return (
    <VStack gap="16-20" style={{ padding: "var(--hds-spacing-24-32) 0" }}>
      <Textarea label="Plain" />
      <Textarea label="Error" defaultValue="Some value" errorMessage="This is invalid" />
      <Textarea label="Read only" value="Some value" readOnly />
      <Box>
        <Textarea label="White" variant="white" />
      </Box>
      <Box>
        <Textarea
          label="White with error"
          defaultValue="Some value"
          variant="white"
          errorMessage="This is invalid"
        />
      </Box>
      <Box>
        <Textarea label="White readonly" defaultValue="Some value" variant="white" readOnly />
      </Box>
    </VStack>
  );
}

export default Example;

import type { ExampleConfig } from "../..";
export const config: ExampleConfig = {
  index: 2,
  layout: "centered-fullwidth",
};
