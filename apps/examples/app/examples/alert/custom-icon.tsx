import "@postenbring/hedwig-css";
import { Alert, VStack } from "@postenbring/hedwig-react";
import { RainbowIcon } from "../../assets/icon-examples";

function Example() {
  return (
    <VStack gap="12-16">
      <Alert variant="neutral" icon={<RainbowIcon />}>
        <Alert.Title>Custom icon</Alert.Title>
        <Alert.Description>This alert uses a custom icon.</Alert.Description>
      </Alert>
      <Alert
        variant="neutral"
        style={{
          backgroundColor: "var(--hds-colors-signature)",
          color: "var(--hds-ui-colors-white)",
        }}
        icon={<RainbowIcon />}
      >
        <Alert.Title>Custom colors</Alert.Title>
        <Alert.Description>This alert has custom color and background-color.</Alert.Description>
      </Alert>
    </VStack>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  index: 5,
  description:
    "For variant <code>neutral</code> you can pass an <code>icon</code> prop to use a custom icon.",
};
