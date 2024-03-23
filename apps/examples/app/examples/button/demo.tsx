import { PrimaryButton } from "@postenbring/hedwig-react";

function Example() {
  return (
    <div>
      <PrimaryButton size="large">Primary</PrimaryButton>
      <PrimaryButton size="large" fill="outline">
        Outline
      </PrimaryButton>
    </div>
  );
}

export default Example;

import type { ExampleConfig } from "../../examples";
export const config: ExampleConfig = {
  index: 0,
};
