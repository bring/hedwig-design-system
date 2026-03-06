import "@postenbring/hedwig-css";
import { Input, VStack } from "@postenbring/hedwig-react";

function Example() {
  return (
    <VStack gap="16-20" style={{ padding: "var(--hds-spacing-24-32) 0" }}>
      <Input label="Plain" size="small" />
      <Input
        label="Info"
        size="small"
        validationMessage={{ value: "Some information regarding this field", variant: "info" }}
      />
      <Input
        label="Success"
        size="small"
        value="Valid input data"
        validationMessage={{ value: "This went really well", variant: "success" }}
      />
      <Input
        label="Warning"
        size="small"
        validationMessage={{
          value: "You should probably fix this, but don't worry too much",
          variant: "warning",
        }}
      />
      <Input
        label="Danger"
        defaultValue="Some value"
        validationMessage="This is invalid"
        size="small"
      />
      <Input label="Disabled" value="Some value" disabled size="small" />
      <Input label="Read only" value="Some value" readOnly size="small" />
      {/* This one should really never happen */}
      <Input
        label="Read only with error"
        value="Some value"
        readOnly
        errorMessage="This is invalid"
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
