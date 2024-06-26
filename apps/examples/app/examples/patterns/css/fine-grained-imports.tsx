import "@postenbring/hedwig-css/dist/reset.css";
import "@postenbring/hedwig-css/dist/body.css";
import "@postenbring/hedwig-css/dist/tokens.css";
import "@postenbring/hedwig-css/dist/fonts.css";

import "@postenbring/hedwig-css/dist/box.css";
import "@postenbring/hedwig-css/dist/button.css";
import "@postenbring/hedwig-css/dist/text.css";

import { Box, Button, Text } from "@postenbring/hedwig-react";

function Example() {
  return (
    <Box>
      <Text as="h1" variant="body-title">
        A button
      </Text>
      <Button className="hds-mt-8-12">Submit</Button>
    </Box>
  );
}

export default Example;

import type { ExampleConfig } from "../..";
export const config: ExampleConfig = {
  index: 0,
  description: `<p>Include only the css you need. Remember to import the global css files</p>
    <ul>
      <li><code>@postenbring/hedwig-css/dist/reset.css</code></li>
      <li><code>@postenbring/hedwig-css/dist/body.css</code></li>
      <li><code>@postenbring/hedwig-css/dist/tokens.css</code></li>
      <li><code>@postenbring/hedwig-css/dist/fonts.css</code></li>
    </ul>`,
};
