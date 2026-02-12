import "@postenbring/hedwig-css";
import { Fieldset, Checkbox, HStack } from "@postenbring/hedwig-react";

function Example() {
  return (
    <HStack justify="center" gap="24" wrap className="hds-mt-16 hds-mb-16">
      <Fieldset legend="Legend" style={{ minWidth: 400 }}>
        <Checkbox title="Check this box" defaultChecked value="Hello">
          Detailed description if needed
        </Checkbox>
        <Checkbox title="Check this box" value="Hello">
          Detailed description if needed
        </Checkbox>
        <Checkbox title="Check this box" value="Hello">
          Detailed description if needed
        </Checkbox>
      </Fieldset>
      <Fieldset legend="Legend" style={{ minWidth: 400 }}>
        <Checkbox title="Check this box" variant="bounding-box" defaultChecked value="Hello">
          Detailed description if needed
        </Checkbox>
        <Checkbox title="Check this box" variant="bounding-box" value="Hello">
          Detailed description if needed
        </Checkbox>
        <Checkbox title="Check this box" variant="bounding-box" value="Hello">
          Detailed description if needed
        </Checkbox>
      </Fieldset>
    </HStack>
  );
}

export default Example;

import type { ExampleConfig } from "../..";
export const config: ExampleConfig = {
  description: `Provide a title to the checkbox if you need to add more context to the user.`,
  index: 2,
  layout: "centered-fullwidth",
};
