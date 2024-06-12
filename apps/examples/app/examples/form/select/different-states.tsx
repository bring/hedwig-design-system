import "@postenbring/hedwig-css";
import { Box, Select, SelectProps, VStack } from "@postenbring/hedwig-react";

function Example() {
  return (
    <VStack gap="16-20" style={{ padding: "var(--hds-spacing-24-32) 0" }}>
      <SelectExample label="Plain" />
      <SelectExample label="Error" defaultValue="Some value" errorMessage="This is invalid" />
      <Box>
        <SelectExample label="White" variant="white" />
      </Box>
      <Box>
        <SelectExample
          label="White with error"
          defaultValue="Some value"
          variant="white"
          errorMessage="This is invalid"
        />
      </Box>
    </VStack>
  );
}

function SelectExample(props: Omit<SelectProps, "children">) {
  return (
    <Select defaultValue="" {...props}>
      <option disabled hidden value="">
        Please select
      </option>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
    </Select>
  );
}

export default Example;

import type { ExampleConfig } from "../..";
export const config: ExampleConfig = {
  index: 2,
  layout: "centered-fullwidth",
};
