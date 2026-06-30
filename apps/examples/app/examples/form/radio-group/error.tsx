import "@postenbring/hedwig-css";
import { RadioGroup, RadioButton } from "@postenbring/hedwig-react";

function Example() {
  return (
    <RadioGroup name="group1" validationMessage="Something's wrong">
      <RadioGroup.Legend>Default radio group</RadioGroup.Legend>
      <RadioGroup.Description>This is a description</RadioGroup.Description>
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
  index: 2,
  layout: "centered-fullwidth",
};
