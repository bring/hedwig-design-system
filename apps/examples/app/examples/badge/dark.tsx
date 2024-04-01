import { DarkBadge } from "@postenbring/hedwig-react";

function Example() {
  return (
    <div style={{ display: "flex", alignItems: "flex-end", gap: "var(--hds-spacing-8)" }}>
      <DarkBadge>Dark</DarkBadge>
      <DarkBadge size="smaller">Dark</DarkBadge>
    </div>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  index: 1,
};
