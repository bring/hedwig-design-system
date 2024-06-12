import "@postenbring/hedwig-css";
import { Fieldset, Radiobutton } from "@postenbring/hedwig-react";

function Example() {
  return (
    <Fieldset
      legend={
        <>
          Radiobuttons wrapped in Fieldset will get error styling when Fieldset has errorMessage
          <br />
          However, you should probably use RadioGroup instead of Fieldset for Radiobuttons
        </>
      }
      errorMessage="Something's wrong"
    >
      <Radiobutton value="Hello" name="radiogroup">
        Hello
      </Radiobutton>
      <Radiobutton value="Hello" name="radiogroup">
        Hello
      </Radiobutton>
      <Radiobutton value="Hello" name="radiogroup">
        Hello
      </Radiobutton>
    </Fieldset>
  );
}

export default Example;

import type { ExampleConfig } from "../..";
export const config: ExampleConfig = {
  index: 4,
  layout: "centered-fullwidth",
};
