import "@postenbring/hedwig-css";
import { Alert } from "@postenbring/hedwig-react";

function Example() {
  return (
    <Alert variant="success">
      <Alert.Title>Alert header</Alert.Title>
    </Alert>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  index: 4,
};
