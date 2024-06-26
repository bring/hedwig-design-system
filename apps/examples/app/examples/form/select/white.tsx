import "@postenbring/hedwig-css";
import { Box, Select } from "@postenbring/hedwig-react";

function Example() {
  return (
    <Box>
      <Select label="Label" variant="white" defaultValue="">
        <option disabled hidden value="">
          Please select
        </option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </Select>
    </Box>
  );
}

export default Example;

import type { ExampleConfig } from "../..";
export const config: ExampleConfig = {
  index: 1,
  layout: "centered-fullwidth",
};
