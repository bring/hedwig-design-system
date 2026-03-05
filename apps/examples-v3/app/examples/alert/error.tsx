import "@postenbring/hedwig-css";
import { Alert } from "@postenbring/hedwig-react";

function Example() {
  return (
    <Alert variant="error">
      <Alert.Title>Error</Alert.Title>
      <Alert.Description>Something has gone wrong.</Alert.Description>
    </Alert>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  index: 3,
};
