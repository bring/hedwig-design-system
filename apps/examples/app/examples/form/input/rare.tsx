import "@postenbring/hedwig-css";
import { Input, VStack } from "@postenbring/hedwig-react";

function Example() {
  return (
    <VStack gap="16-20" style={{ padding: "var(--hds-spacing-24-32) 0" }}>
      <Input
        label="Info"
        defaultValue="Some info value"
        validationMessage="Info message"
        data-color="info"
      />
      <Input
        label="Success"
        defaultValue="Some error value"
        validationMessage="Success"
        data-color="success"
      />
      <Input
        label="Warning"
        defaultValue="Some error value"
        validationMessage="Warning message"
        data-color="warning"
      />
      {/* This one should really never happen */}
      <Input
        label="Read only with error"
        value="Some value"
        readOnly
        data-color="error"
        validationMessage="This is invalid"
        aria-invalid
      />
    </VStack>
  );
}

export default Example;

import type { ExampleConfig } from "../..";
export const config: ExampleConfig = {
  description: `Input fields that are rarely used`,
  index: 5,
  layout: "centered-fullwidth",
};
