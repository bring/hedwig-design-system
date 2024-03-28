import { Link } from "@postenbring/hedwig-react";

function Example() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "var(--hds-spacing-40)",
      }}
    >
      <Link href="#demo-link" size="medium">
        Call to action
      </Link>
      <Link href="#demo-link" size="small">
        Call to action
      </Link>
      <Link href="#demo-link" size="large">
        Call to action
      </Link>
    </div>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  index: 0,
};
