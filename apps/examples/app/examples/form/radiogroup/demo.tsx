import "@postenbring/hedwig-css";
import { RadioGroup, Radiobutton } from "@postenbring/hedwig-react";

function Example() {
  return (
    <RadioGroup legend="Legend" name="group1">
      <Radiobutton defaultChecked value="Hello">
        Hello
      </Radiobutton>
      <Radiobutton value="Hello">Hello</Radiobutton>
      <Radiobutton value="Hello">Hello</Radiobutton>
    </RadioGroup>
  );
}

export default Example;

import type { ExampleConfig } from "../..";
export const config: ExampleConfig = {
  description: `Radiobuttons should be grouped in a <code>RadioGroup</code> with a given <code>name</code>`,
  index: 0,
  layout: "centered-fullwidth",
};
