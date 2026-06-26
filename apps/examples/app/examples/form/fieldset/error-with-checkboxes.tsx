import "@postenbring/hedwig-css";
import { Checkbox, Fieldset } from "@postenbring/hedwig-react";

function Example() {
  return (
    <Fieldset legend="Legend" validationMessage="Something's wrong" data-color="error">
      <Checkbox value="Hello" aria-invalid>
        Hello
      </Checkbox>
      <Checkbox value="Hello" aria-invalid>
        Hello
      </Checkbox>
      <Checkbox value="Hello" aria-invalid>
        Hello
      </Checkbox>
    </Fieldset>
  );
}

export default Example;

import type { ExampleConfig } from "../..";
export const config: ExampleConfig = {
  description:
    "Checkboxes wrapped in Fieldset will get error styling with `data-color='error'`. Remember to apply `aria-invalid`",
  index: 3,
  layout: "centered-fullwidth",
};
