import { Box, Link } from "@postenbring/hedwig-react";

function Example() {
  return (
    <Box
      style={{
        backgroundColor: "var(--hds-ui-colors-black)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "var(--hds-spacing-40)",
      }}
    >
      <Link href="#demo-link" variant="inverted" size="medium">
        Call to action
      </Link>
      <Link href="#demo-link" variant="inverted" size="small">
        Call to action
      </Link>
      <Link href="#demo-link" variant="inverted" size="large">
        Call to action
      </Link>
    </Box>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  index: 1,
};
