import { AutoAnimateHeight, ShowMoreButton } from "@postenbring/hedwig-react";
import { useRef, useState } from "react";

function Example() {
  const [expanded, setExpanded] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const elements = Array.from({ length: expanded ? 15 : 3 }, (_, i) => (
    <li key={i}>Hallo {Math.random()}</li>
  ));

  return (
    <>
      <AutoAnimateHeight ref={contentRef} animationDuration="quick">
        <ul>{elements}</ul>
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
        text={expanded ? "Vis færre hendelser" : "Vis flere hendelser"}
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

import type { ExampleConfig } from "../../examples";
export const config: ExampleConfig = {
  layout: "centered-fullwidth",
  description:
    "Animates the height differences when the content changes. If the content becomes out of view, it will scroll to the top of the content after the animation is complete",
};
