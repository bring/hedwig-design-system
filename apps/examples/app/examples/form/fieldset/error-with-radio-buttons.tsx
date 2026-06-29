import "@postenbring/hedwig-css";
import { Fieldset, RadioButton } from "@postenbring/hedwig-react";

function Example() {
  return (
    <Fieldset validationMessage="Something's wrong" data-color="error">
      <Fieldset.Legend>Please select an option</Fieldset.Legend>
      <Fieldset.Description>
        However, you should use RadioGroup instead of Fieldset
      </Fieldset.Description>
      <RadioButton value="Hello" name="radiogroup" aria-invalid>
        Option 1
      </RadioButton>
      <RadioButton value="Hello" name="radiogroup" aria-invalid>
        Option 2
      </RadioButton>
      <RadioButton value="Hello" name="radiogroup" aria-invalid>
        Option 3
      </RadioButton>
    </Fieldset>
  );
}

export default Example;

import type { ExampleConfig } from "../..";
export const config: ExampleConfig = {
  index: 3,
  layout: "centered-fullwidth",
};
