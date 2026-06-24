import "@postenbring/hedwig-css";
import { Input, VStack } from "@postenbring/hedwig-react";

function Example() {
  return (
    <VStack gap="16-20" style={{ padding: "var(--hds-spacing-24-32) 0" }}>
      <Input label="Plain" size="small" />
      <Input
        label="Info"
        defaultValue="Some info value"
        validationMessage="Info message"
        data-color="info"
        size="small"
      />
      <Input
        label="Success"
        defaultValue="Some error value"
        validationMessage="Success"
        data-color="success"
        size="small"
      />
      <Input
        label="Warning"
        defaultValue="Some error value"
        validationMessage="Warning message"
        data-color="warning"
        size="small"
      />
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
      {/* This one should really never happen */}
      <Input
        label="Read only with error"
        value="Some value"
        readOnly
        data-color="error"
        validationMessage="This is invalid"
        aria-invalid
        size="small"
      />
    </VStack>
  );
}

export default Example;

import type { ExampleConfig } from "../..";
export const config: ExampleConfig = {
  index: 3,
  layout: "centered-fullwidth",
};
