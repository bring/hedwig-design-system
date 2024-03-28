import { Box, Link } from "@postenbring/hedwig-react";

function Example() {
  return (
    <Box
      variant="warning"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "var(--hds-spacing-40)",
      }}
    >
      <Link href="#demo-link" variant="solid" size="medium">
        Call to action
      </Link>
      <Link href="#demo-link" variant="solid" size="small">
        Call to action
      </Link>
      <Link href="#demo-link" variant="solid" size="large">
        Call to action
      </Link>
    </Box>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  index: 2,
};
