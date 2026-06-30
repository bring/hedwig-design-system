import "@postenbring/hedwig-css";
import { Checkbox, Fieldset } from "@postenbring/hedwig-react";

const Example = () => (
  <Fieldset
    validationMessage="You must select at least two handling requirements"
    data-color="error"
  >
    <Fieldset.Legend>Package Handling</Fieldset.Legend>
    <Fieldset.Description>Please select required handling services</Fieldset.Description>
    <Checkbox value="fragile" aria-invalid>
      Fragile handling
    </Checkbox>
    <Checkbox value="perishable" aria-invalid>
      Temperature controlled
    </Checkbox>
    <Checkbox value="signature" aria-invalid>
      Signature required
    </Checkbox>
  </Fieldset>
);

export default Example;

import type { ExampleConfig } from "../..";
export const config: ExampleConfig = {
  description:
    "Checkboxes wrapped in Fieldset will get error styling with <code>data-color='error'</code>. Validation Message should be used together with <code>data-color='error'</code> to indicate to the user what needs to be changed. Remember to apply `aria-invalid`",
  index: 2,
  layout: "centered-fullwidth",
};
