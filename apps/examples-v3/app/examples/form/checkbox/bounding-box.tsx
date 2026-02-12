import "@postenbring/hedwig-css";
import { Fieldset, Checkbox } from "@postenbring/hedwig-react";

function Example() {
  return (
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
  );
}

export default Example;

import type { ExampleConfig } from "../..";
export const config: ExampleConfig = {
  index: 1,
  layout: "centered-fullwidth",
};
