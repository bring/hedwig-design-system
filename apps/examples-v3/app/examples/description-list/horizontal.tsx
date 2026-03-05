import "@postenbring/hedwig-css";
import { DescriptionList } from "@postenbring/hedwig-react";

function Example() {
  return (
    <DescriptionList variant="horizontal">
      <dt>Vekt</dt>
      <dd>12 kg</dd>
      <dt>Antall kolli</dt>
      <dd>2</dd>
      <dt>Sendingsnummer</dt>
      <dd>7000001</dd>
      <dt>Avsender</dt>
      <dd>Fjellsport</dd>
    </DescriptionList>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = { index: 1 };
