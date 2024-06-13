import "@postenbring/hedwig-css";
import { RadioGroup, Radiobutton } from "@postenbring/hedwig-react";

function Example() {
  return (
    <RadioGroup legend="Legend" name="group1">
      <Radiobutton variant="bounding-box" defaultChecked value="Hello">
        Hello
      </Radiobutton>
      <Radiobutton variant="bounding-box" value="Hello">
        Hello
      </Radiobutton>
      <Radiobutton variant="bounding-box" value="Hello">
        Hello
      </Radiobutton>
    </RadioGroup>
  );
}

export default Example;

import type { ExampleConfig } from "../..";
export const config: ExampleConfig = {
  index: 1,
  layout: "centered-fullwidth",
};
