import { Grid, Box } from "@postenbring/hedwig-react";

function Example() {
  return (
    <Grid gap="12-16" span={{ initial: 4, small: 6 }} center={{ small: true }}>
      <Box>1</Box>
      <Box>2</Box>
      <Box>3</Box>
      <Box>4</Box>
      <Box>5</Box>
      <Box>6</Box>
    </Grid>
  );
}

export default Example;

import type { ExampleConfig } from "../..";
export const config: ExampleConfig = {
  breakpointIndicator: "top",
  description:
    "Center the grid items horizontally when they are not taking up the full width of the grid.",
  layout: "centered-fullwidth",
  index: 1,
};
