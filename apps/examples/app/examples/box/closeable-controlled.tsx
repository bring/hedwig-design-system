import "@postenbring/hedwig-css";
import { Box, Button, Link, Text } from "@postenbring/hedwig-react";
import { useState } from "react";

function Example() {
  const [closed, setClosed] = useState(false);
  if (closed) {
    return (
      <Button onClick={() => setClosed(false)} variant="primary-outline">
        Open box again
      </Button>
    );
  }
  return (
    <Box closeable closed={closed} onClose={() => setClosed(true)}>
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
  description: `Control the close state of the box with the <code>closed</code> and <code>onClose</code> props.`,
};
