import "@postenbring/hedwig-css";
import { Fieldset, RadioButton } from "@postenbring/hedwig-react";

const Example = () => (
  <Fieldset legend="Legend" validationMessage="Something's wrong" data-color="error">
    <RadioButton value="Hello" name="radiogroup">
      Hello
    </RadioButton>
    <RadioButton value="Hello" name="radiogroup">
      Hello
    </RadioButton>
    <RadioButton value="Hello" name="radiogroup">
      Hello
    </RadioButton>
  </Fieldset>
);

export default Example;

import type { ExampleConfig } from "../..";
export const config: ExampleConfig = {
  description: `Radio buttons wrapped in Fieldset will get error styling when Fieldset has data-color="error". However, you should probably use RadioGroup instead of Fieldset for Radio buttons`,
  index: 4,
  layout: "centered-fullwidth",
};
