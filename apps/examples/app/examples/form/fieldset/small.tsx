import "@postenbring/hedwig-css";
import { Checkbox, Fieldset } from "@postenbring/hedwig-react";

function Example() {
  return (
    <Fieldset size="small">
      <Fieldset.Legend>Default fieldset</Fieldset.Legend>
      <Fieldset.Description>This is a description</Fieldset.Description>
      <Checkbox defaultChecked value="Hello">
        Hello
      </Checkbox>
      <Checkbox value="Hello">Hello</Checkbox>
      <Checkbox value="Hello">Hello</Checkbox>
    </Fieldset>
  );
}

export default Example;

import type { ExampleConfig } from "../..";
export const config: ExampleConfig = {
  index: 1,
  layout: "centered-fullwidth",
};
