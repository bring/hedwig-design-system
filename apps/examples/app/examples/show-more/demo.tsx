import { useState } from "react";
import { ShowMoreButton, UnorderedList } from "@postenbring/hedwig-react";

function Example() {
  const [showMore, setShowMore] = useState(false);
  return (
    <div>
      <UnorderedList>
        {Array.from({ length: showMore ? 10 : 3 }).map((_, i) => (
          <li key={i}>Hei</li>
        ))}
      </UnorderedList>

      <ShowMoreButton
        text="Show more"
        onClick={() => {
          setShowMore(true);
        }}
      />
    </div>
  );
}

export default Example;

import type { ExampleConfig } from "../../examples";
export const config: ExampleConfig = {
  index: 0,
};
