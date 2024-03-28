import { useState } from "react";
import { Box, ShowMoreButton } from "@postenbring/hedwig-react";

function Example() {
  const [showCount, setShowCount] = useState(3);
  return (
    <div>
      <ul
        style={{
          padding: 0,
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          gap: "var(--hds-spacing-12-16)",
        }}
      >
        {Array.from({ length: showCount }).map((_, i) => (
          <li key={i} style={{ listStyle: "none" }}>
            <Box>#{i}</Box>
          </li>
        ))}
      </ul>

      <ShowMoreButton
        className="hds-mt-12-16"
        text="Show more"
        onClick={async () => {
          await new Promise((resolve) => setTimeout(resolve, 300));
          setShowCount((prev) => prev + 6);
        }}
      />

      <div
        style={{
          height: "100vh",
        }}
      />
    </div>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  index: 0,
  layout: "centered-fullwidth",
};
