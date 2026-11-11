import "@postenbring/hedwig-css";
import { Chip, ChipGroup } from "@postenbring/hedwig-react";

function Example() {
  return (
    <div style={{ display: "grid", gap: "1rem" }}>
      <ChipGroup>
        <Chip variant="main" type="radio" name="variants-main" defaultChecked>
          Radio
        </Chip>
        <Chip variant="main" type="checkbox" defaultChecked>
          Checkbox
        </Chip>
        <Chip variant="main" type="removable">
          Removable
        </Chip>
        <Chip variant="main" type="button">
          Button
        </Chip>
      </ChipGroup>
      <ChipGroup>
        <Chip variant="neutral" type="radio" name="variants-neutral" defaultChecked>
          Radio
        </Chip>
        <Chip variant="neutral" type="checkbox" defaultChecked>
          Checkbox
        </Chip>
        <Chip variant="neutral" type="removable">
          Removable
        </Chip>
        <Chip variant="neutral" type="button">
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
    "The <code>variant</code> prop is either <code>main</code> (default, colored by the theme) or <code>neutral</code>. Top row is main, bottom row is neutral.",
};
