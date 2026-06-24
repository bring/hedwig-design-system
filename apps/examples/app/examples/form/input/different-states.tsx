import "@postenbring/hedwig-css";
import { Input, VStack } from "@postenbring/hedwig-react";

function Example() {
  return (
    <VStack gap="16-20" style={{ padding: "var(--hds-spacing-24-32) 0" }}>
      <Input label="Plain" />
      <Input
        label="Error"
        defaultValue="Some error value"
        validationMessage="Error message"
        data-color="error"
        aria-invalid
      />
      <Input label="Disabled" value="Some value" disabled />
      <Input label="Read only" value="Some value" readOnly />
    </VStack>
  );
}

export default Example;

import type { ExampleConfig } from "../..";
export const config: ExampleConfig = {
  index: 2,
  layout: "centered-fullwidth",
};
