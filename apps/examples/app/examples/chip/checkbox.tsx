import "@postenbring/hedwig-css";
import { Chip, ChipGroup } from "@postenbring/hedwig-react";

function Example() {
  return (
    <fieldset style={{ border: 0, padding: 0, margin: 0 }}>
      <legend>Tilleggstjenester</legend>
      <ChipGroup>
        <Chip type="checkbox" name="options" value="tracking" defaultChecked>
          Sporing
        </Chip>
        <Chip type="checkbox" name="options" value="return">
          Retur
        </Chip>
        <Chip type="checkbox" name="options" value="express">
          Rask levering
        </Chip>
        <Chip type="checkbox" name="options" value="insurance">
          Erstatningsgaranti
        </Chip>
        <Chip type="checkbox" name="options" value="secure" disabled>
          Sikker utlevering
        </Chip>
      </ChipGroup>
    </fieldset>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  index: 4,
  description: 'Use <code>type="checkbox"</code> to select one or more among several options.',
};
