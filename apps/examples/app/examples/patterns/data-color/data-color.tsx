import "@postenbring/hedwig-css";
import { Alert, Badge, HStack, VStack } from "@postenbring/hedwig-react";

function Example() {
  return (
    <VStack gap="16-20" className="hds-mt-20-24 hds-mb-20-24">
      <Alert data-color="info">
        <Alert.Title>Info</Alert.Title>
        <Alert.Description>An alert with data-color=&quot;info&quot;</Alert.Description>
      </Alert>
      <Alert data-color="success">
        <Alert.Title>Success</Alert.Title>
        <Alert.Description>An alert with data-color=&quot;success&quot;</Alert.Description>
      </Alert>
      <Alert data-color="warning">
        <Alert.Title>Warning</Alert.Title>
        <Alert.Description>An alert with data-color=&quot;warning&quot;</Alert.Description>
      </Alert>
      <Alert data-color="error">
        <Alert.Title>Error</Alert.Title>
        <Alert.Description>An alert with data-color=&quot;error&quot;</Alert.Description>
      </Alert>
      <Alert data-color="neutral">
        <Alert.Title>Neutral</Alert.Title>
        <Alert.Description>An alert with data-color=&quot;neutral&quot;</Alert.Description>
      </Alert>
      <HStack gap="12">
        <Badge data-color="neutral">Neutral</Badge>
        <Badge data-color="info">Info</Badge>
      </HStack>
    </VStack>
  );
}

export default Example;

import type { ExampleConfig } from "../..";
export const config: ExampleConfig = {
  index: 0,
  description: `<p>Use the <code>data-color</code> prop in your body or html tag to set the color theme of your app (Posten/Bring).</p>
  <p>
  <code>&lt;body data-color="posten"&gt;</code>
  </p>
  <p>
  This is replacing the old way of setting the color theme using classes like <code>hds-theme-posten</code> and <code>hds-theme-bring</code>.</p>
  </p>
  <p>For certain subsequent components, such as <strong>Alert, Box</strong> and <strong>Badge</strong>, the <code>data-color</code> prop also allows you to set the visual style of certain components based on its semantic meaning.</p>
  Supported values are:
  <ul>
    <li><code>info</code> for informational messages</li>
    <li><code>success</code> for success messages.</li>
    <li><code>warning</code> for warnings</li>
    <li><code>error</code> for error messages</li>
    <li><code>neutral</code> for neutral or generic alerts</li>
  </ul>
  <p>Support for the data-color prop (either all values, or a subset of them) will be continuously added to more components.</p>`,
};
