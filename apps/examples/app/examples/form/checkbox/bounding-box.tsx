import "@postenbring/hedwig-css";
import { Fieldset, Checkbox, VStack } from "@postenbring/hedwig-react";

const Example = () => (
  <VStack gap="12">
    <Fieldset legend="Legend">
      <Checkbox variant="bounding-box" defaultChecked value="Hello">
        Hello
      </Checkbox>
      <Checkbox variant="bounding-box" value="Hello">
        Hello
      </Checkbox>
      <Checkbox variant="bounding-box" value="Hello">
        Hello
      </Checkbox>
    </Fieldset>
    <Fieldset legend="Small checkboxes">
      <Checkbox variant="bounding-box" defaultChecked value="Hello" size="small">
        Hello
      </Checkbox>
      <Checkbox variant="bounding-box" value="Hello" size="small">
        Hello
      </Checkbox>
      <Checkbox variant="bounding-box" value="Hello" size="small">
        Hello
      </Checkbox>
    </Fieldset>
  </VStack>
);

export default Example;

import type { ExampleConfig } from "../..";
export const config: ExampleConfig = {
  index: 2,
  layout: "centered-fullwidth",
};
