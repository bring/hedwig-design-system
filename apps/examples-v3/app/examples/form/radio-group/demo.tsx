import "@postenbring/hedwig-css";
import { RadioGroup, RadioButton } from "@postenbring/hedwig-react";

function Example() {
  return (
    <RadioGroup legend="Legend" name="group1">
      <RadioButton defaultChecked value="Hello">
        Hello
      </RadioButton>
      <RadioButton value="Hello">Hello</RadioButton>
      <RadioButton value="Hello">Hello</RadioButton>
    </RadioGroup>
  );
}

export default Example;

import type { ExampleConfig } from "../..";
export const config: ExampleConfig = {
  description: `Radio buttons should be grouped in a <code>RadioGroup</code> with a given <code>name</code>`,
  index: 0,
  layout: "centered-fullwidth",
};
