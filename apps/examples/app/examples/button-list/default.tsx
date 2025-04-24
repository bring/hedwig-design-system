import "@postenbring/hedwig-css";
import { Button, ButtonList } from "@postenbring/hedwig-react";

function Example() {
  return (
    <ButtonList>
      <Button>First button</Button>
      <Button variant="secondary">Second button</Button>
      <Button variant="tertiary">Third button</Button>
    </ButtonList>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  index: 0,
};
