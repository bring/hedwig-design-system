import "@postenbring/hedwig-css";
import { HStack, Box } from "@postenbring/hedwig-react";

function Example() {
  return (
    <HStack gap="12-16" wrap>
      <Box>1</Box>
      <Box>2</Box>
      <Box>3</Box>
      <Box>4</Box>
      <Box>5</Box>
      <Box>6</Box>
    </HStack>
  );
}

export default Example;

import type { ExampleConfig } from "../..";
export const config: ExampleConfig = {
  description: "Wrap to the next line when there is not enough space.",
  index: 3,
};
