import { WarningBadge } from "@postenbring/hedwig-react";

function Example() {
  return (
    <div style={{ display: "flex", alignItems: "flex-end", gap: "var(--hds-spacing-8)" }}>
      <WarningBadge>Warning</WarningBadge>
      <WarningBadge size="smaller">Warning</WarningBadge>
    </div>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  index: 3,
};
