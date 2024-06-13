import "@postenbring/hedwig-css";
import { Fieldset, RadioButton } from "@postenbring/hedwig-react";

function Example() {
  return (
    <Fieldset
      legend={
        <>
          Radio buttons wrapped in Fieldset will get error styling when Fieldset has errorMessage
          <br />
          However, you should probably use RadioGroup instead of Fieldset for Radio buttons
        </>
      }
      errorMessage="Something's wrong"
    >
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
}

export default Example;

import type { ExampleConfig } from "../..";
export const config: ExampleConfig = {
  index: 4,
  layout: "centered-fullwidth",
};
