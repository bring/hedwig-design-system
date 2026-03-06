import "@postenbring/hedwig-css";
import { Blockquote } from "@postenbring/hedwig-react";

function Example() {
  return (
    <Blockquote lang="no" variant="norwegian">
      <p>Jeg er ikke den smarteste personen i skuffen, eller whatever</p>
      <footer>Iselin</footer>
    </Blockquote>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  index: 1,
};
