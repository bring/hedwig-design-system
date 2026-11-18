import "@postenbring/hedwig-css";
import { useState } from "react";
import { Chip, ChipGroup } from "@postenbring/hedwig-react";

function Example() {
  const [weight, setWeight] = useState("0-2");

  return (
    <form style={{ display: "grid", gap: "1.5rem", maxWidth: "40rem" }}>
      <h2 className="hds-text-h3">Sende i Norge</h2>

      <fieldset style={{ border: 0, padding: 0, margin: 0 }}>
        <legend>Hvor mye veier pakken?</legend>
        <ChipGroup layout="inline">
          {["0-2", "2-5", "5-10", "10-25"].map((value) => (
            <Chip
              key={value}
              type="radio"
              name="weight"
              value={value}
              checked={weight === value}
              onChange={(event) => setWeight(event.target.value)}
            >
              {value} kg
            </Chip>
          ))}
          <Chip type="radio" name="weight" value="25-30" disabled>
            25-30 kg
          </Chip>
        </ChipGroup>
      </fieldset>

      <fieldset style={{ border: 0, padding: 0, margin: 0 }}>
        <legend>Tilleggstjenester</legend>
        <ChipGroup>
          <Chip type="checkbox" name="extras" value="tracking">
            Sporing
          </Chip>
          <Chip type="checkbox" name="extras" value="return">
            Retur
          </Chip>
          <Chip type="checkbox" name="extras" value="from-locker">
            Send fra pakkeboks
          </Chip>
          <Chip type="checkbox" name="extras" value="from-mailbox">
            Send fra egen postkasse
          </Chip>
          <Chip type="checkbox" name="extras" value="express">
            Rask levering
          </Chip>
          <Chip type="checkbox" name="extras" value="insurance">
            Erstatningsgaranti
          </Chip>
          <Chip type="checkbox" name="extras" value="recipient-pays">
            Mottaker betaler
          </Chip>
          <Chip type="checkbox" name="extras" value="secure" disabled>
            Sikker utlevering
          </Chip>
        </ChipGroup>
      </fieldset>
    </form>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  index: 8,
  description:
    "Radio chips for weight and checkbox chips for additional services in a shipping form. Chips follow the Posten/Bring theme and color scheme.",
};
