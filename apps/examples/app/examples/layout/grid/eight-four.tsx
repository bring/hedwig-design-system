import { Grid, Box } from "@postenbring/hedwig-react";

function Example() {
  return (
    <Grid gap="12-16" span={{ initial: 12, small: 8 }}>
      <Box>1</Box>
      <Grid.Item span={{ small: 4 }}>
        <Box>2</Box>
      </Grid.Item>
      <Grid.Item span={{ small: 4 }}>
        <Box>3</Box>
      </Grid.Item>
      <Box>4</Box>
    </Grid>
  );
}

export default Example;

import type { ExampleConfig } from "../..";
export const config: ExampleConfig = {
  breakpointIndicator: "top",
  description:
    "A layout where one item is twice as wide as the other. Also called a <code>2/3 + 1/3</code> layout.",
  layout: "centered-fullwidth",
  index: 4,
};
