import "@postenbring/hedwig-css";
import { RadioGroup, RadioButton, HStack } from "@postenbring/hedwig-react";

function Example() {
  return (
    <HStack justify="center" gap="24" wrap className="hds-mt-16 hds-mb-16">
      <RadioGroup
        legend="Legend"
        name="group1"
        validationMessage="Select an option"
        data-color="info"
        style={{ minWidth: 400 }}
      >
        <RadioButton value="Yes">Check this box</RadioButton>
        <RadioButton value="No">Check this box</RadioButton>
        <RadioButton value="Maybe">Check this box</RadioButton>
      </RadioGroup>
      <RadioGroup
        legend="Legend"
        name="group1"
        validationMessage="Select an option"
        data-color="success"
        style={{ minWidth: 400 }}
      >
        <RadioButton value="Yes">Check this box</RadioButton>
        <RadioButton value="No">Check this box</RadioButton>
        <RadioButton value="Maybe">Check this box</RadioButton>
      </RadioGroup>
      <RadioGroup
        legend="Legend"
        name="group1"
        validationMessage="Select an option"
        data-color="warning"
        style={{ minWidth: 400 }}
      >
        <RadioButton value="Yes">Check this box</RadioButton>
        <RadioButton value="No">Check this box</RadioButton>
        <RadioButton value="Maybe">Check this box</RadioButton>
      </RadioGroup>
    </HStack>
  );
}

export default Example;

import type { ExampleConfig } from "../..";
export const config: ExampleConfig = {
  description: "Setting `data-color` to `info`, `success` or `warning` is also valid",
  index: 5,
  layout: "centered-fullwidth",
};
