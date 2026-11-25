import "@postenbring/hedwig-css";
import { Blockquote } from "@postenbring/hedwig-react";

function Example() {
  return (
    <Blockquote>
      <p>... but they&rsquo;ll never take our freedom!</p>
      <footer>William Wallace</footer>
    </Blockquote>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  index: 0,
};
