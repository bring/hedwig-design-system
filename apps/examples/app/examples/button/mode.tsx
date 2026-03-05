import "@postenbring/hedwig-css";
import { Button } from "@postenbring/hedwig-react";

function Example() {
  return (
    <div style={{ backgroundColor: "var(--hds-colors-darker)", padding: "50px" }}>
      <Button data-color-scheme="dark" variant="secondary">
        A button set to use darkmode
      </Button>
    </div>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  index: 4,
  description:
    "Buttons can be inverted for use on dark backgrounds. This is done by adding the `data-color-scheme` attribute with the value `dark` to the button.",
};
