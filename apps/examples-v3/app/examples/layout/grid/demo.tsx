import "@postenbring/hedwig-css";
import { Grid, Box } from "@postenbring/hedwig-react";

function Example() {
  return (
    <Grid gap="12-16" span={{ initial: 12, small: 4 }}>
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
  layout: "centered-fullwidth",
  index: 0,
};
