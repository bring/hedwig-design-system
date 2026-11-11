import "@postenbring/hedwig-css";
import { Chip, ChipGroup } from "@postenbring/hedwig-react";

const options = ["Sporing", "Retur", "Rask levering", "Erstatningsgaranti", "Mottaker betaler"];

function Example() {
  return (
    <div style={{ display: "grid", gap: "1.5rem", maxWidth: "20rem" }}>
      <div>
        <p>Inline: single row, scrolls horizontally</p>
        <ChipGroup layout="inline">
          {options.map((option) => (
            <Chip key={option} type="checkbox">
              {option}
            </Chip>
          ))}
        </ChipGroup>
      </div>
      <div>
        <p>Wrap: multiple rows (default)</p>
        <ChipGroup layout="wrap">
          {options.map((option) => (
            <Chip key={option} type="checkbox">
              {option}
            </Chip>
          ))}
        </ChipGroup>
      </div>
    </div>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  index: 7,
  description:
    "<code>ChipGroup</code> spaces chips. <code>layout</code> is <code>wrap</code> (default) or <code>inline</code>, which is a single scrollable row. The width is constrained in this example.",
};
