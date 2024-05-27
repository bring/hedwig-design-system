import "@postenbring/hedwig-css";
import { Box, Input, VStack } from "@postenbring/hedwig-react";

function Example() {
  return (
    <VStack gap="16-20" style={{ padding: "var(--hds-spacing-24-32) 0" }}>
      <Input label="Plain" />
      <Input label="Error" defaultValue="Some value" errorMessage="This is invalid" />
      <Input label="Read only" value="Some value" readOnly />
      {/* This one should really never happen */}
      <Input
        label="Read only with error"
        value="Some value"
        readOnly
        errorMessage="This is invalid"
      />
      <Box>
        <Input label="White" variant="white" />
      </Box>
      <Box>
        <Input
          label="White with error"
          defaultValue="Some value"
          variant="white"
          errorMessage="This is invalid"
        />
      </Box>
    </VStack>
  );
}

export default Example;

import type { ExampleConfig } from "../..";
export const config: ExampleConfig = {
  layout: "centered-fullwidth",
};
