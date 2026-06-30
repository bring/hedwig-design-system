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
      ></Input>
    </VStack>
  </Container>
);

export default Example;

import type { ExampleConfig } from "../..";
export const config: ExampleConfig = {
  description:
    "The <code>data-color</code> prop can be used to set the visual styling of form components based on a semantic meaning, such as <code>info</code>, <code>warning</code>, <code>success</code> and <code>error</code>",
  index: 5,
  layout: "centered-fullwidth",
};
