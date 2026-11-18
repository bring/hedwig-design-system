import "@postenbring/hedwig-css";
import { Chip, ChipGroup } from "@postenbring/hedwig-react";

function Example() {
  return (
    <div style={{ display: "grid", gap: "1rem" }}>
      <ChipGroup>
        <Chip variant="primary" type="radio" name="variants-primary" defaultChecked>
          Radio
        </Chip>
        <Chip variant="primary" type="checkbox" defaultChecked>
          Checkbox
        </Chip>
        <Chip variant="primary" type="removable">
          Removable
        </Chip>
        <Chip variant="primary" type="button">
          Button
        </Chip>
      </ChipGroup>
      <ChipGroup>
        <Chip variant="secondary" type="radio" name="variants-secondary" defaultChecked>
          Radio
        </Chip>
        <Chip variant="secondary" type="checkbox" defaultChecked>
          Checkbox
        </Chip>
        <Chip variant="secondary" type="removable">
          Removable
        </Chip>
        <Chip variant="secondary" type="button">
          Button
        </Chip>
      </ChipGroup>
    </div>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  index: 2,
  description:
    "The <code>variant</code> prop is either <code>primary</code> (default, colored by the theme) or <code>secondary</code>. Top row is primary, bottom row is secondary.",
};
