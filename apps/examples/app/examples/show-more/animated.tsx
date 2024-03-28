import { AutoAnimateHeight, Box, ShowMoreButton } from "@postenbring/hedwig-react";
import { useRef, useState } from "react";

function Example() {
  const [expanded, setExpanded] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const showCount = expanded ? 15 : 3;

  return (
    <>
      <AutoAnimateHeight ref={contentRef} animationDuration="quick">
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
      </AutoAnimateHeight>

      <ShowMoreButton
        className="hds-mt-12-16"
        variant="show-more-show-less"
        expanded={expanded}
        onClick={() => {
          setExpanded((prev) => !prev);

          // Ensure the content is still in view after the amount shown is reduced
          if (expanded) {
            setTimeout(() => {
              contentRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
            }, 130 + 50); // Wait for the animation to finish
          }
        }}
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
