import "@postenbring/hedwig-css";
import { Input, VStack } from "@postenbring/hedwig-react";

function Example() {
  return (
    <VStack gap="16-20" style={{ padding: "var(--hds-spacing-24-32) 0" }}>
      <Input label="Plain" size="small" />
      <Input
        label="Error"
        defaultValue="Some error value"
        validationMessage="Error message"
        data-color="error"
        aria-invalid
        size="small"
      />
      <Input label="Disabled" value="Some value" disabled size="small" />
      <Input label="Read only" value="Some value" readOnly size="small" />
    </VStack>
  );
}

export default Example;

import type { ExampleConfig } from "../..";
export const config: ExampleConfig = {
  index: 3,
  layout: "centered-fullwidth",
};
