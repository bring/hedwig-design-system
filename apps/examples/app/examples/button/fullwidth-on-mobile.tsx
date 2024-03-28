import { PrimaryButton } from "@postenbring/hedwig-react";

function Example() {
  return <PrimaryButton fullWidth="mobile">Submit</PrimaryButton>;
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  index: 2,
  layout: "centered-fullwidth",
  breakpointIndicator: true,
  description: `Button will be fullwidth on mobile screens when <code>fullWidth="mobile"</code> is set`,
};
