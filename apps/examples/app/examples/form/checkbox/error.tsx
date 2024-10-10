import "@postenbring/hedwig-css";
import { Fieldset, Checkbox, HStack } from "@postenbring/hedwig-react";

function Example() {
  return (
    <HStack justify="center" gap="24" wrap className="hds-mt-16 hds-mb-16">
      <Fieldset legend="Legend" errorMessage="Something is wrong" style={{ minWidth: 400 }}>
        <Checkbox defaultChecked value="Hello">
          Check this box
        </Checkbox>
        <Checkbox value="Hello">Check this box</Checkbox>
        <Checkbox value="Hello">Check this box</Checkbox>
      </Fieldset>
      <Fieldset legend="Legend" errorMessage="Something is wrong" style={{ minWidth: 400 }}>
        <Checkbox variant="bounding-box" defaultChecked value="Hello">
          Check this box
        </Checkbox>
        <Checkbox variant="bounding-box" value="Hello">
          Check this box
        </Checkbox>
        <Checkbox variant="bounding-box" value="Hello">
          Check this box
        </Checkbox>
      </Fieldset>
      <Fieldset
        legend="Legend"
        errorMessage="Aria-live is off for this error"
        errorMessageProps={{ "aria-live": "off" }}
        style={{ minWidth: 400 }}
      >
        <Checkbox variant="bounding-box" defaultChecked value="Hello">
          Check this box
        </Checkbox>
        <Checkbox variant="bounding-box" value="Hello">
          Check this box
        </Checkbox>
        <Checkbox variant="bounding-box" value="Hello">
          Check this box
        </Checkbox>
      </Fieldset>
    </HStack>
  );
}

export default Example;

import type { ExampleConfig } from "../..";
export const config: ExampleConfig = {
  description: `Fieldset will aid you with styling and aria when it is provided an error message`,
  index: 3,
  layout: "centered-fullwidth",
};
