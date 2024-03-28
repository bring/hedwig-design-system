import { useState } from "react";
import { ShowMoreButton, UnorderedList } from "@postenbring/hedwig-react";

function Example() {
  const [showCount, setShowCount] = useState(3);
  return (
    <div>
      <UnorderedList>
        {Array.from({ length: showCount }).map((_, i) => (
          <li key={i}>Item #{i}</li>
        ))}
      </UnorderedList>

      <ShowMoreButton
        className="hds-mt-12-16"
        text="Show more"
        onClick={async () => {
          await new Promise((resolve) => setTimeout(resolve, 300));
          setShowCount((prev) => prev + 3);
        }}
      />
    </div>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  index: 0,
};
