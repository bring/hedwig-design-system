import "@postenbring/hedwig-css";
import { Checkbox, Fieldset } from "@postenbring/hedwig-react";

function Example() {
  return (
    <Fieldset errorMessage="Something's wrong">
      <Fieldset.Legend>Please choose</Fieldset.Legend>
      <Fieldset.Description>
        Checkboxes wrapped in Fieldset will get error styling when Fieldset has errorMessage
      </Fieldset.Description>
      <Checkbox value="Hello">Option 1</Checkbox>
      <Checkbox value="Hello">Option 2</Checkbox>
      <Checkbox value="Hello">Option 3</Checkbox>
    </Fieldset>
  );
}

export default Example;

import type { ExampleConfig } from "../..";
export const config: ExampleConfig = {
  index: 2,
  layout: "centered-fullwidth",
};
