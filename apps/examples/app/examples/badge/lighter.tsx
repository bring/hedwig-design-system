import { Badge } from "@postenbring/hedwig-react";

function Example() {
  return (
    <div style={{ display: "flex", alignItems: "flex-end", gap: "var(--hds-spacing-8)" }}>
      <Badge>Lighter</Badge>
      <Badge size="smaller">Lighter</Badge>
    </div>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  index: 0,
};
