import "@postenbring/hedwig-css";
import { Box, Link, Text } from "@postenbring/hedwig-react";

function Example() {
  return (
    <Box data-color="warning">
      <Text variant="h3-title" as="h3">
        Box content
      </Text>
      <Text className="hds-mt-16-20">
        Use the data-color attributte to get feature colors like warning on a Box
      </Text>
      <Text className="hds-mt-16-20">
        <Link variant="solid" href="#a-link-for-whatever-reason">
          A link for whatever reason
        </Link>
      </Text>
    </Box>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  index: 6,
};
