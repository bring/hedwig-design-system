import { PrimaryButton } from "@postenbring/hedwig-react";

function Example() {
  return <PrimaryButton fullWidth="mobile">Submit</PrimaryButton>;
}

export default Example;

import type { ExampleConfig } from "../../examples";
export const config: ExampleConfig = {
  layout: "centered-fullwidth",
  breakpointIndicator: true,
  description: `Button will be fullwidth on mobile devices when <code>fullWidth="mobile"</code> is set`,
};
