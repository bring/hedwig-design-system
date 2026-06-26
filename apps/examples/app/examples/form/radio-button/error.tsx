import "@postenbring/hedwig-css";
import { RadioGroup, RadioButton, HStack } from "@postenbring/hedwig-react";

const Example = () => (
  <HStack justify="center" gap="24" wrap className="hds-mt-16 hds-mb-16">
    <RadioGroup
      legend="Legend"
      name="group1"
      validationMessage="Select an option"
      validationMessageProps={{ "aria-live": "off" }}
      style={{ minWidth: 400 }}
      data-color="error"
    >
      <RadioButton value="Yes">Check this box</RadioButton>
      <RadioButton value="No">Check this box</RadioButton>
      <RadioButton value="Maybe">Check this box</RadioButton>
    </RadioGroup>
    <RadioGroup
      legend="Legend"
      name="group2"
      errorMessage="Select an option"
      errorMessageProps={{ "aria-live": "off" }}
      style={{ minWidth: 400 }}
    >
      <RadioButton variant="bounding-box" defaultChecked value="Hello">
        Check this box
      </RadioButton>
      <RadioButton variant="bounding-box" value="Hello">
        Check this box
      </RadioButton>
      <RadioButton variant="bounding-box" value="Hello">
        Check this box
      </RadioButton>
    </RadioGroup>
  </HStack>
);

export default Example;

import type { ExampleConfig } from "../..";
export const config: ExampleConfig = {
  description: `RadioGroup will aid you with styling and aria when it is provided an error message`,
  index: 4,
  layout: "centered-fullwidth",
};
