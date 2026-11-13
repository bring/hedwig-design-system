import "@postenbring/hedwig-css";
import { useState } from "react";
import { Chip, ChipGroup } from "@postenbring/hedwig-react";

function Example() {
  const [cities, setCities] = useState(["Oslo", "Bergen", "Trondheim", "Stavanger"]);

  return (
    <ChipGroup>
      {cities.map((city) => (
        <Chip
          key={city}
          type="removable"
          removeLabel="Fjern"
          onRemove={() => setCities((current) => current.filter((c) => c !== city))}
        >
          {city}
        </Chip>
      ))}
    </ChipGroup>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  index: 5,
  description:
    'Use <code>type="removable"</code> for a selected value the user can remove. <code>onRemove</code> is called on click. The accessible name is <code>removeLabel</code> + label, e.g. "Fjern Oslo".',
};
