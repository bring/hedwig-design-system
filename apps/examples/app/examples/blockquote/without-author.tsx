import "@postenbring/hedwig-css";
import { Blockquote } from "@postenbring/hedwig-react";

function Example() {
  return (
    <Blockquote>
      <p>... but they&rsquo;ll never take our freedom!</p>
    </Blockquote>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  description: "⚠️Component is deprecated, and will be deleted in a future release ⚠️",
  index: 2,
};
