import "@postenbring/hedwig-css";
import { Checkbox, Fieldset } from "@postenbring/hedwig-react";

function Example() {
  return (
    <Fieldset validationMessage="Something's wrong" data-color="error">
      <Fieldset.Legend>Please choose</Fieldset.Legend>
      <Fieldset.Description>
        Checkboxes wrapped in Fieldset will get error styling when Fieldset has validationMessage
      </Fieldset.Description>
      <Checkbox value="Hello" aria-invalid>
        Option 1
      </Checkbox>
      <Checkbox value="Hello" aria-invalid>
        Option 2
      </Checkbox>
      <Checkbox value="Hello" aria-invalid>
        Option 3
      </Checkbox>
    </Fieldset>
  );
}

export default Example;

import type { ExampleConfig } from "../..";
export const config: ExampleConfig = {
  index: 2,
  layout: "centered-fullwidth",
};
