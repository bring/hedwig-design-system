import "@postenbring/hedwig-css";
import { Input, VStack } from "@postenbring/hedwig-react";

function Example() {
  return (
    <VStack gap="16-20" style={{ padding: "var(--hds-spacing-24-32) 0" }}>
      <Input label="Plain" />
      <Input label="Error" defaultValue="Some value" errorMessage="This is invalid" />
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
      <Input
        label="Error"
        defaultValue="Some error value"
        validationMessage="Error message"
        data-color="error"
        aria-invalid
      />
      <Input label="Disabled" value="Some value" disabled />
      <Input label="Read only" value="Some value" readOnly />
      {/* This one should really never happen */}
      <Input
        label="Read only with error"
        value="Some value"
        readOnly
        data-color="error"
        validationMessage="This is invalid"
        aria-invalid
      />
      <Input
        label="Read only with error"
        value="Some value"
        readOnly
        errorMessage="This is invalid"
      />
    </VStack>
  );
}

export default Example;

import type { ExampleConfig } from "../..";
export const config: ExampleConfig = {
  index: 2,
  layout: "centered-fullwidth",
};
