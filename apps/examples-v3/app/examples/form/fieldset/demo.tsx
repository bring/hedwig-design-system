import "@postenbring/hedwig-css";
import { Checkbox, Fieldset } from "@postenbring/hedwig-react";

function Example() {
  return (
    <Fieldset legend="Default fieldset">
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
  index: 0,
  layout: "centered-fullwidth",
};
