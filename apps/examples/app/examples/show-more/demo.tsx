import "@postenbring/hedwig-css";
import { useState } from "react";
import { Box, Grid, ShowMoreButton } from "@postenbring/hedwig-react";

function Example() {
  const [showCount, setShowCount] = useState(3);
  return (
    <div className="hds-mt-24">
      <Grid asChild span={{ small: 4 }} gap="12-16">
        <ul
          style={{
            margin: 0,
            padding: 0,
            listStyle: "none",
          }}
        >
          {Array.from({ length: showCount }).map((_, i) => (
            <li key={i}>
              <Box>#{i}</Box>
            </li>
          ))}
        </ul>
      </Grid>

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
