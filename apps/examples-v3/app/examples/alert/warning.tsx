import "@postenbring/hedwig-css";
import { Alert } from "@postenbring/hedwig-react";

function Example() {
  return (
    <Alert variant="warning">
      <Alert.Title>Warning</Alert.Title>
      <Alert.Description>
        Something did not go as expected. Yellow always means something negative.
      </Alert.Description>
    </Alert>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  index: 2,
};
