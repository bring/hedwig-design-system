import { SecondaryButton } from "@postenbring/hedwig-react";

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
        <SecondaryButton size="large">Call to action</SecondaryButton>
        <SecondaryButton size="medium">Call to action</SecondaryButton>
        <SecondaryButton size="small">Call to action</SecondaryButton>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          flexWrap: "wrap",
          gap: "var(--hds-spacing-24)",
        }}
      >
        <SecondaryButton fill="outline" size="large">
          Call to action
        </SecondaryButton>
        <SecondaryButton fill="outline" size="medium">
          Call to action
        </SecondaryButton>
        <SecondaryButton fill="outline" size="small">
          Call to action
        </SecondaryButton>
      </div>
    </div>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  index: 1,
};
