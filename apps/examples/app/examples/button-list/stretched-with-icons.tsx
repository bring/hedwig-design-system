import "@postenbring/hedwig-css";
import { Button, ButtonList } from "@postenbring/hedwig-react";
import { GlobeIcon, EnvelopeIcon } from "../../assets/icon-examples";

function Example() {
  return (
    <ButtonList variant="stretched">
      <Button icon="trailing">
        First button <GlobeIcon />
      </Button>
      <Button variant="secondary" icon="trailing">
        Second button <GlobeIcon />
      </Button>
      <Button variant="tertiary" icon="leading">
        <EnvelopeIcon /> Third button
      </Button>
    </ButtonList>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  index: 2,
  layout: "centered-fullwidth",
};
