import { PrimaryButton } from "@postenbring/hedwig-react";

function Example() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--hds-spacing-24)" }}>
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          flexWrap: "wrap",
          gap: "var(--hds-spacing-24)",
        }}
      >
        <PrimaryButton size="large">Call to action</PrimaryButton>
        <PrimaryButton size="medium">Call to action</PrimaryButton>
        <PrimaryButton size="small">Call to action</PrimaryButton>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          flexWrap: "wrap",
          gap: "var(--hds-spacing-24)",
        }}
      >
        <PrimaryButton fill="outline" size="large">
          Call to action
        </PrimaryButton>
        <PrimaryButton fill="outline" size="medium">
          Call to action
        </PrimaryButton>
        <PrimaryButton fill="outline" size="small">
          Call to action
        </PrimaryButton>
      </div>
    </div>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  index: 0,
};
