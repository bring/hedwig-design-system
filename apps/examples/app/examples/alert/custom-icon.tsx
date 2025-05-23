import "@postenbring/hedwig-css";
import { Alert, VStack } from "@postenbring/hedwig-react";

function Example() {
  return (
    <VStack gap="12-16">
      <Alert
        variant="neutral"
        icon={
          // Rainbow icon
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
            <path d="M320 96C178.6 96 64 210.6 64 352l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96C0 175.3 143.3 32 320 32s320 143.3 320 320l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96C576 210.6 461.4 96 320 96zm0 192c-35.3 0-64 28.7-64 64l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96c0-70.7 57.3-128 128-128s128 57.3 128 128l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96c0-35.3-28.7-64-64-64zM160 352l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96c0-123.7 100.3-224 224-224s224 100.3 224 224l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96c0-88.4-71.6-160-160-160s-160 71.6-160 160z" />
          </svg>
        }
      >
        <Alert.Title>Custom icon</Alert.Title>
        <Alert.Description>This alert uses a custom icon.</Alert.Description>
      </Alert>
      <Alert
        variant="neutral"
        style={{
          backgroundColor: "var(--hds-colors-signature)",
          color: "var(--hds-ui-colors-white)",
        }}
        icon={
          // Rainbow icon
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
            <path d="M320 96C178.6 96 64 210.6 64 352l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96C0 175.3 143.3 32 320 32s320 143.3 320 320l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96C576 210.6 461.4 96 320 96zm0 192c-35.3 0-64 28.7-64 64l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96c0-70.7 57.3-128 128-128s128 57.3 128 128l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96c0-35.3-28.7-64-64-64zM160 352l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96c0-123.7 100.3-224 224-224s224 100.3 224 224l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96c0-88.4-71.6-160-160-160s-160 71.6-160 160z" />
          </svg>
        }
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
