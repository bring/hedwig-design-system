import "@postenbring/hedwig-css";
import { Fieldset, Checkbox, HStack } from "@postenbring/hedwig-react";

const Example = () => (
  <HStack justify="center" gap="24" wrap className="hds-mt-16 hds-mb-16">
    <Fieldset
      legend="Legend"
      validationMessage="Some information"
      data-color="info"
      style={{ minWidth: 400 }}
    >
      <Checkbox defaultChecked value="Hello">
        Check this box
      </Checkbox>
      <Checkbox value="Hello">Check this box</Checkbox>
      <Checkbox value="Hello">Check this box</Checkbox>
    </Fieldset>
    <Fieldset
      legend="Legend"
      validationMessage="Great success!"
      data-color="success"
      style={{ minWidth: 400 }}
    >
      <Checkbox defaultChecked value="Hello">
        Check this box
      </Checkbox>
      <Checkbox value="Hello">Check this box</Checkbox>
      <Checkbox value="Hello">Check this box</Checkbox>
    </Fieldset>
    <Fieldset
      legend="Legend"
      validationMessage="Warning message"
      data-color="warning"
      style={{ minWidth: 400 }}
    >
      <Checkbox defaultChecked value="Hello">
        Check this box
      </Checkbox>
      <Checkbox value="Hello">Check this box</Checkbox>
      <Checkbox value="Hello">Check this box</Checkbox>
    </Fieldset>
  </HStack>
);

export default Example;

import type { ExampleConfig } from "../..";
export const config: ExampleConfig = {
  description:
    "The <code>data-color</code> prop can be used to set the visual styling of form components based on a semantic meaning, such as <code>info</code>, <code>warning</code>, <code>success</code> and <code>error</code>",
  index: 5,
  layout: "centered-fullwidth",
};
