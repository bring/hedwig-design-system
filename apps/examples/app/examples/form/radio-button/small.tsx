import "@postenbring/hedwig-css";
import { RadioGroup, RadioButton } from "@postenbring/hedwig-react";

const Example = () => (
  <RadioGroup legend="Legend" name="group1" size="small">
    <RadioButton defaultChecked value="Hello">
      Hello
    </RadioButton>
    <RadioButton value="Hello">Hello</RadioButton>
    <RadioButton value="Hello">Hello</RadioButton>
  </RadioGroup>
);

export default Example;

import type { ExampleConfig } from "../..";
export const config: ExampleConfig = {
  description: `Radio buttons should be grouped in a <code>RadioGroup</code> with a given <code>name</code>`,
  index: 1,
  layout: "centered-fullwidth",
};
