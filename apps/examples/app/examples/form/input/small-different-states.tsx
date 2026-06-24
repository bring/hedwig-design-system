import "@postenbring/hedwig-css";
import { Input, VStack, Container } from "@postenbring/hedwig-react";

const Example = () => (
  <Container variant="slim">
    <VStack gap="16-20" style={{ padding: "var(--hds-spacing-20-24) 0" }}>
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
  </Container>
);

export default Example;

import type { ExampleConfig } from "../..";
export const config: ExampleConfig = {
  index: 3,
  layout: "centered-fullwidth",
};
