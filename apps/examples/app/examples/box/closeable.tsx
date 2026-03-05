import "@postenbring/hedwig-css";
import { Box, Link, Text } from "@postenbring/hedwig-react";

function Example() {
  return (
    <Box closeable>
      <Text variant="h3-title" as="h3">
        Box content
      </Text>
      <Text className="hds-mt-16-20">
        This is some body copy in a box, but you can basically add anything you want in here.
      </Text>
      <Text className="hds-mt-16-20">
        <Link href="#a-link-for-whatever-reason">A link for whatever reason</Link>
      </Text>
    </Box>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  index: 4,
  description: `Use the <code>closeable</code> prop to add a close button to the box.`,
};
