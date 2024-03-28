import { PrimaryButton } from "@postenbring/hedwig-react";

function Example() {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "var(--hds-spacing-8)",
      }}
    >
      <PrimaryButton fullWidth="mobile">Main action</PrimaryButton>
      <PrimaryButton fill="outline" fullWidth="mobile">
        Alternative action
      </PrimaryButton>
    </div>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  index: 3,
  layout: "centered-fullwidth",
  breakpointIndicator: true,
  description: `A main and alternative action button set that become fullwidth on mobile`,
};
