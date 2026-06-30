import "@postenbring/hedwig-css";
import { RadioGroup, RadioButton, HStack } from "@postenbring/hedwig-react";

const Example = () => (
  <HStack justify="center" gap="24" wrap className="hds-mt-16 hds-mb-16">
    <RadioGroup
      name="group1"
      validationMessage="Select an option"
      data-color="info"
      style={{ minWidth: 400 }}
    >
      <RadioGroup.Legend>Legend</RadioGroup.Legend>
      <RadioButton value="Yes">Check this box</RadioButton>
      <RadioButton value="No">Check this box</RadioButton>
      <RadioButton value="Maybe">Check this box</RadioButton>
    </RadioGroup>
    <RadioGroup
      name="group1"
      validationMessage="Select an option"
      data-color="success"
      style={{ minWidth: 400 }}
    >
      <RadioGroup.Legend>Legend</RadioGroup.Legend>
      <RadioButton value="Yes">Check this box</RadioButton>
      <RadioButton value="No">Check this box</RadioButton>
      <RadioButton value="Maybe">Check this box</RadioButton>
    </RadioGroup>
    <RadioGroup
      name="group1"
      validationMessage="Select an option"
      data-color="warning"
      style={{ minWidth: 400 }}
    >
      <RadioGroup.Legend>Legend</RadioGroup.Legend>
      <RadioButton value="Yes">Check this box</RadioButton>
      <RadioButton value="No">Check this box</RadioButton>
      <RadioButton value="Maybe">Check this box</RadioButton>
    </RadioGroup>
  </HStack>
);

export default Example;

import type { ExampleConfig } from "../..";
export const config: ExampleConfig = {
  description:
    "The <code>data-color</code> prop can be used to set the visual styling of form components based on a semantic meaning, such as <code>info</code>, <code>warning</code>, <code>success</code> and <code>error</code>",
  index: 5,
  layout: "centered-fullwidth",
};
