import "@postenbring/hedwig-css";
import { RadioGroup, RadioButton, HStack } from "@postenbring/hedwig-react";

function Example() {
  return (
    <HStack justify="center" gap="24" wrap className="hds-mt-16 hds-mb-16">
      <RadioGroup legend="Legend" name="group1" style={{ minWidth: 400 }}>
        <RadioButton title="Check this box" defaultChecked value="Hello">
          Detailed description if needed
        </RadioButton>
        <RadioButton title="Check this box" value="Hello">
          Detailed description if needed
        </RadioButton>
        <RadioButton title="Check this box" value="Hello">
          Detailed description if needed
        </RadioButton>
      </RadioGroup>
      <RadioGroup legend="Legend" name="group2" style={{ minWidth: 400 }}>
        <RadioButton title="Check this box" variant="bounding-box" defaultChecked value="Hello">
          Detailed description if needed
        </RadioButton>
        <RadioButton title="Check this box" variant="bounding-box" value="Hello">
          Detailed description if needed
        </RadioButton>
        <RadioButton title="Check this box" variant="bounding-box" value="Hello">
          Detailed description if needed
        </RadioButton>
      </RadioGroup>
    </HStack>
  );
}

export default Example;

import type { ExampleConfig } from "../..";
export const config: ExampleConfig = {
  description: `Provide a title to the RadioButton if you need to add more context to the user.`,
  index: 2,
  layout: "centered-fullwidth",
};
