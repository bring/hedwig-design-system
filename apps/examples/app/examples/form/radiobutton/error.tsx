import "@postenbring/hedwig-css";
import { RadioGroup, Radiobutton, HStack } from "@postenbring/hedwig-react";

function Example() {
  return (
    <HStack justify="center" gap="24" wrap className="hds-mt-16 hds-mb-16">
      <RadioGroup
        legend="Legend"
        name="group1"
        errorMessage="Something is wrong"
        style={{ minWidth: 400 }}
      >
        <Radiobutton defaultChecked value="Hello">
          Check this box
        </Radiobutton>
        <Radiobutton value="Hello">Check this box</Radiobutton>
        <Radiobutton value="Hello">Check this box</Radiobutton>
      </RadioGroup>
      <RadioGroup
        legend="Legend"
        name="group2"
        errorMessage="Something is wrong"
        style={{ minWidth: 400 }}
      >
        <Radiobutton variant="bounding-box" defaultChecked value="Hello">
          Check this box
        </Radiobutton>
        <Radiobutton variant="bounding-box" value="Hello">
          Check this box
        </Radiobutton>
        <Radiobutton variant="bounding-box" value="Hello">
          Check this box
        </Radiobutton>
      </RadioGroup>
    </HStack>
  );
}

export default Example;

import type { ExampleConfig } from "../..";
export const config: ExampleConfig = {
  description: `RadioGroup will aid you with styling and aria when it is provided an error message`,
  index: 3,
  layout: "centered-fullwidth",
};
