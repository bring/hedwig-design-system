import "@postenbring/hedwig-css";
import { Alert } from "@postenbring/hedwig-react";

function Example() {
  return (
    <Alert variant="success">
      <Alert.Title>Success</Alert.Title>
      <Alert.Description>Something went according to expectations. Thats great!</Alert.Description>
    </Alert>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  index: 1,
};
