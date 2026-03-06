import "@postenbring/hedwig-css";
import { RadioGroup, RadioButton } from "@postenbring/hedwig-react";

function Example() {
  return (
    <RadioGroup legend="Legend" name="group1">
      <RadioButton variant="bounding-box" defaultChecked value="Hello">
        Hello
      </RadioButton>
      <RadioButton variant="bounding-box" value="Hello">
        Hello
      </RadioButton>
      <RadioButton variant="bounding-box" value="Hello">
        Hello
      </RadioButton>
    </RadioGroup>
  );
}

export default Example;

import type { ExampleConfig } from "../..";
export const config: ExampleConfig = {
  index: 1,
  layout: "centered-fullwidth",
};
