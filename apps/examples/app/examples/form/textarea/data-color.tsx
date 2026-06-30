import "@postenbring/hedwig-css";
import { Textarea, VStack } from "@postenbring/hedwig-react";

const Example = () => (
  <VStack gap="16-20" style={{ padding: "var(--hds-spacing-24-32) 0" }}>
    <Textarea label="Info" validationMessage="Information to the user" data-color="info" />
    <Textarea
      label="Success"
      value="A valid text from the end user"
      validationMessage="What you have written is valid 🎉"
      data-color="success"
    />
    <Textarea
      label="Warning"
      value="Some value too long to be send properly through the support system"
      validationMessage="The message you have written is too long and will be cropped"
      data-color="warning"
    />
  </VStack>
);

export default Example;

import type { ExampleConfig } from "../..";
export const config: ExampleConfig = {
  index: 4,
  layout: "centered-fullwidth",
};
