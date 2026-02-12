import "@postenbring/hedwig-css";
import { Input, VStack } from "@postenbring/hedwig-react";

function Example() {
  return (
    <VStack gap="16-20" style={{ padding: "var(--hds-spacing-24-32) 0" }}>
      <Input label="Plain" />
      <Input
        label="Info"
        validationMessage={{ value: "Some information regarding this field", variant: "info" }}
      />
      <Input
        label="Success"
        value="Valid input data"
        validationMessage={{ value: "This went really well", variant: "success" }}
      />
      <Input
        label="Warning"
        validationMessage={{
          value: "You should probably fix this, but don't worry too much",
          variant: "warning",
        }}
      />
      <Input label="Danger" defaultValue="Some value" validationMessage="This is invalid" />
      <Input label="Disabled" value="Some value" disabled />
      <Input label="Read only" value="Some value" readOnly />
      {/* This one should really never happen */}
      <Input
        label="Read only with error"
        value="Some value"
        readOnly
        validationMessage="This is invalid"
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
