import "@postenbring/hedwig-css";
import { Fieldset, Checkbox, HStack } from "@postenbring/hedwig-react";

function Example() {
  return (
    <HStack justify="center" gap="24" wrap className="hds-mt-16 hds-mb-16">
      <Fieldset
        legend="Legend"
        validationMessage="Something is wrong"
        data-color="error"
        style={{ minWidth: 400 }}
      >
        <Checkbox defaultChecked value="Hello" aria-invalid>
          Check this box
        </Checkbox>
        <Checkbox value="Hello" aria-invalid>
          Check this box
        </Checkbox>
        <Checkbox value="Hello" aria-invalid>
          Check this box
        </Checkbox>
      </Fieldset>
      <Fieldset
        legend="Legend"
        validationMessage="Something is wrong"
        data-color="error"
        style={{ minWidth: 400 }}
      >
        <Checkbox variant="bounding-box" defaultChecked value="Hello" aria-invalid>
          Check this box
        </Checkbox>
        <Checkbox variant="bounding-box" value="Hello" aria-invalid>
          Check this box
        </Checkbox>
        <Checkbox variant="bounding-box" value="Hello" aria-invalid>
          Check this box
        </Checkbox>
      </Fieldset>
      <Fieldset
        legend="Legend"
        validationMessage="Aria-live is off for this error"
        validationMessageProps={{ "aria-live": "off" }}
        data-color="error"
        style={{ minWidth: 400 }}
      >
        <Checkbox variant="bounding-box" defaultChecked value="Hello" aria-invalid>
          Check this box
        </Checkbox>
        <Checkbox variant="bounding-box" value="Hello" aria-invalid>
          Check this box
        </Checkbox>
        <Checkbox variant="bounding-box" value="Hello" aria-invalid>
          Check this box
        </Checkbox>
      </Fieldset>
    </HStack>
  );
}

export default Example;

import type { ExampleConfig } from "../..";
export const config: ExampleConfig = {
  description:
    'Fieldset will aid you with styling and aria when it is provided `data-color="error"`',
  index: 4,
  layout: "centered-fullwidth",
};
