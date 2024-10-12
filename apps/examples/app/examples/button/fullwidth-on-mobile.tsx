import "@postenbring/hedwig-css";
import { Button } from "@postenbring/hedwig-react";

function Example() {
  return <Button fullWidth="mobile">Submit</Button>;
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  index: 2,
  layout: "centered-fullwidth",
  breakpointIndicator: "top",
  description: `Button will be fullwidth on mobile screens when <code>fullWidth="mobile"</code> is set`,
};
