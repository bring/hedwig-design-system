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
      <Link href="#demo-link" variant="no-underline" size="medium">
        Call to action
      </Link>
      <Link href="#demo-link" variant="no-underline" size="small">
        Call to action
      </Link>
      <Link href="#demo-link" variant="no-underline" size="large">
        Call to action
      </Link>
    </div>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  description: "Except when you hover, then a underline appears.",
  index: 3,
};
