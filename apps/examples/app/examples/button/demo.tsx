import { PrimaryButton } from "@postenbring/hedwig-react";

function Example() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--hds-spacing-8-12)" }}>
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
