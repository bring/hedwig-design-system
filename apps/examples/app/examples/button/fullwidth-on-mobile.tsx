import { PrimaryButton } from "@postenbring/hedwig-react";

function Example() {
  return <PrimaryButton fullWidth="mobile">Primary</PrimaryButton>;
}

export default Example;

import type { ExampleConfig } from "../../examples";
export const config: ExampleConfig = {
  layout: "centered-fullwidth",
};
