import "@postenbring/hedwig-css";
import { Alert, VStack } from "@postenbring/hedwig-react";

function Example() {
  return (
    <VStack gap="12-16">
      <Alert data-color="success">
        <Alert.Title>Success</Alert.Title>
        <Alert.Description>
          Something went according to expectations. Thats great!
        </Alert.Description>
      </Alert>
      <Alert data-color="success">
        <Alert.Title>Alert header</Alert.Title>
      </Alert>
    </VStack>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  index: 1,
};
