import "@postenbring/hedwig-css";
import { Textarea, VStack } from "@postenbring/hedwig-react";

function Example() {
  return (
    <VStack gap="16-20" style={{ padding: "var(--hds-spacing-24-32) 0" }}>
      <Textarea label="Plain" />
      <Textarea label="Error" defaultValue="Some value" errorMessage="This is invalid" />
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
