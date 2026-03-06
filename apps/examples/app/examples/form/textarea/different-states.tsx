import "@postenbring/hedwig-css";
import { Textarea, VStack } from "@postenbring/hedwig-react";

function Example() {
  return (
    <VStack gap="16-20" style={{ padding: "var(--hds-spacing-24-32) 0" }}>
      <Textarea label="Plain" />
      <Textarea
        label="Info"
        defaultValue="Some value"
        validationMessage={{ value: "Some information", variant: "info" }}
      />
      <Textarea
        label="Success"
        defaultValue="Some value"
        validationMessage={{ value: "This went really well", variant: "success" }}
      />
      <Textarea
        label="Warning"
        defaultValue="Some value"
        validationMessage={{
          value: "You should probably fix this, but don't worry too much",
          variant: "warning",
        }}
      />
      <Textarea label="Danger" defaultValue="Some value" validationMessage="This is invalid" />
      <Textarea label="Disabled" value="Some value" disabled />
      <Textarea label="Read only" value="Some value" readOnly />
    </VStack>
  );
}

export default Example;

import type { ExampleConfig } from "../..";
export const config: ExampleConfig = {
  index: 2,
  layout: "centered-fullwidth",
};
