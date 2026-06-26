import "@postenbring/hedwig-css";
import { RadioGroup, RadioButton } from "@postenbring/hedwig-react";

const Example = () => (
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

export default Example;

import type { ExampleConfig } from "../..";
export const config: ExampleConfig = {
  index: 2,
  layout: "centered-fullwidth",
};
