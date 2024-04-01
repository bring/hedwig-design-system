import { Box, WhiteBadge } from "@postenbring/hedwig-react";

function Example() {
  return (
    <Box style={{ display: "flex", alignItems: "flex-end", gap: "var(--hds-spacing-8)" }}>
      <WhiteBadge>White</WhiteBadge>
      <WhiteBadge size="smaller">White</WhiteBadge>
    </Box>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  index: 2,
};
