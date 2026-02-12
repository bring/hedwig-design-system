import "@postenbring/hedwig-css";
import { Fieldset, Checkbox } from "@postenbring/hedwig-react";

function Example() {
  return (
    <Fieldset legend="Legend">
      <Checkbox defaultChecked value="Hello">
        Hello
      </Checkbox>
      <Checkbox value="Hello">Hello</Checkbox>
      <Checkbox value="Hello">Hello</Checkbox>
    </Fieldset>
  );
}

export default Example;

import type { ExampleConfig } from "../..";
export const config: ExampleConfig = {
  description: `Checkboxes should be grouped in a Fieldset`,
  index: 0,
  layout: "centered-fullwidth",
};
