import { AutoAnimateHeight, Box, Grid, ShowMoreButton } from "@postenbring/hedwig-react";
import { useRef, useState } from "react";

function Example() {
  const [expanded, setExpanded] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const showCount = expanded ? 15 : 3;

  return (
    <>
      <AutoAnimateHeight
        className="hds-mt-24"
        ref={contentRef}
        animationDuration="quick"
        // Ensure the content is still in view after the amount shown is reduced
        onTransitionEnd={() => {
          contentRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }}
      >
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
      </AutoAnimateHeight>

      <ShowMoreButton
        className="hds-mt-12-16"
        variant="show-more-show-less"
        expanded={expanded}
        onClick={() => setExpanded((prev) => !prev)}
        text={expanded ? "Show fewer boxes" : "Show more boxes"}
      />

      <div
        style={{
          height: "115vh",
          background:
            "linear-gradient(var(--hds-ui-colors-white), var(--hds-ui-colors-light-grey-fill))",
        }}
      />
    </>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  layout: "centered-fullwidth",
  description:
    "Animates the height differences when the content changes. If the content becomes out of view, it will scroll to the top of the content after the animation is complete",
};
