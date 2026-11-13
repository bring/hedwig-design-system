import "@postenbring/hedwig-css";
import { useState } from "react";
import { Chip, ChipGroup } from "@postenbring/hedwig-react";

function Example() {
  const [weight, setWeight] = useState("0-2");

  return (
    <fieldset style={{ border: 0, padding: 0, margin: 0 }}>
      <legend>Vekt</legend>
      <ChipGroup>
        {[
          ["0-2", "0-2 kg"],
          ["2-5", "2-5 kg"],
          ["5-10", "5-10 kg"],
          ["10-25", "10-25 kg"],
        ].map(([value, label]) => (
          <Chip
            key={value}
            type="radio"
            name="weight"
            value={value}
            checked={weight === value}
            onChange={(event) => setWeight(event.target.value)}
          >
            {label}
          </Chip>
        ))}
        <Chip type="radio" name="weight" value="25-30" disabled>
          25-30 kg
        </Chip>
      </ChipGroup>
    </fieldset>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  index: 3,
  description:
    'Use <code>type="radio"</code> to select one among several options. Give the chips the same <code>name</code>. Native input props like <code>disabled</code> are supported.',
};
