import { AutoAnimateHeight, ShowMoreButton } from "@postenbring/hedwig-react";
import { useRef, useState } from "react";
import { flushSync } from "react-dom";

function Example() {
  const [expanded, setExpanded] = useState(false);
  const contentRef = useRef<HTMLUListElement>(null);

  const elements = Array.from({ length: expanded ? 15 : 3 }, (_, i) => (
    <li key={i}>Hallo {Math.random()}</li>
  ));

  return (
    <>
      <AutoAnimateHeight animationDuration="quick">
        <ul ref={contentRef}>{elements}</ul>
      </AutoAnimateHeight>

      <ShowMoreButton
        variant="show-more-show-less"
        expanded={expanded}
        onClick={() => {
          flushSync(() => {
            setExpanded((prev) => !prev);
          });

          if (expanded) {
            setTimeout(() => {
              contentRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
            }, 130); // Wait for the animation to finish
          }
        }}
        text={expanded ? "Vis færre hendelser" : "Vis flere hendelser"}
        className="hds-mt-12-16"
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
