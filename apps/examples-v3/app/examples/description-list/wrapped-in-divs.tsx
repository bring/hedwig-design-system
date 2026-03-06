import "@postenbring/hedwig-css";
import { DescriptionList } from "@postenbring/hedwig-react";

function Example() {
  return (
    <DescriptionList variant="vertical">
      <div>
        <dt>Vekt</dt>
        <dd>12 kg</dd>
      </div>
      <div>
        <dt>Antall kolli</dt>
        <dd>2</dd>
      </div>
      <div>
        <dt>Sendingsnummer</dt>
        <dd>7000001</dd>
      </div>
      <div>
        <dt>Avsender</dt>
        <dd>Fjellsport</dd>
      </div>
    </DescriptionList>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  description: `Wrapping the <code>dt</code> and <code>dd</code> in <code>div</code> is semanticly allowed.
  <br />
  <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl#wrapping_name-value_groups_in_div_elements" target="_blank" rel="noopener noreferrer">See MDN ↗</a>
`,
  index: 2,
};
