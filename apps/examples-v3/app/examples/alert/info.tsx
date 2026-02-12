import "@postenbring/hedwig-css";
import { Alert } from "@postenbring/hedwig-react";

function Example() {
  return (
    <Alert variant="info">
      <Alert.Title>Information</Alert.Title>
      <Alert.Description>Some not that important information.</Alert.Description>
    </Alert>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  index: 0,
};
