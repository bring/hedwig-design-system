import "@postenbring/hedwig-css";
import { Input, VStack } from "@postenbring/hedwig-react";

function Example() {
  return (
    <VStack gap="16-20" style={{ padding: "var(--hds-spacing-24-32) 0" }}>
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
      <Input
        label="Danger"
        validationMessage={{ value: "Something is definitely wrong", variant: "danger" }}
      />
    </VStack>
  );
}

export default Example;

import type { ExampleConfig } from "../..";
export const config: ExampleConfig = {
  index: 5,
  layout: "centered-fullwidth",
};
