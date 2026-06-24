import "@postenbring/hedwig-css";
import { Input, VStack, Container } from "@postenbring/hedwig-react";

const Example = () => (
  <Container variant="slim">
    <VStack gap="16-20" style={{ padding: "var(--hds-spacing-20-24) 0" }}>
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
      {/* This one should really never happen */}
      <Input
        label="Read only with error"
        value="Some value"
        readOnly
        data-color="error"
        validationMessage="This is invalid"
        aria-invalid
      />
    </VStack>
  </Container>
);

export default Example;

import type { ExampleConfig } from "../..";
export const config: ExampleConfig = {
  description:
    "`data-color` can be used to set colors `info`, `success` and `warning` in addition to `error`.",
  index: 5,
  layout: "centered-fullwidth",
};
