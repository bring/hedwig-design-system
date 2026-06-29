import "@postenbring/hedwig-css";
import { Fieldset, RadioButton } from "@postenbring/hedwig-react";

const Example = () => (
  <Fieldset validationMessage="Something's wrong" data-color="error">
    <Fieldset.Legend>Please select an option</Fieldset.Legend>
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

export default Example;

import type { ExampleConfig } from "../..";
export const config: ExampleConfig = {
  description: `Radio buttons wrapped in Fieldset will get error styling when Fieldset has data-color="error". However, you should probably use RadioGroup instead of Fieldset for Radio buttons`,
  index: 3,
  layout: "centered-fullwidth",
};
