import "@postenbring/hedwig-css";
import { Avatar, AvatarGroup } from "@postenbring/hedwig-react";

const people = [
  { name: "Anne Heier", initials: "AH" },
  { name: "Per Hansen", initials: "PH" },
  { name: "Kari Berg", initials: "KB" },
  { name: "Ola Nordmann", initials: "ON" },
  { name: "Lise Dahl", initials: "LD" },
  { name: "Jon Moe", initials: "JM" },
  { name: "Eva Strand", initials: "ES" },
];

function Example() {
  return (
    <AvatarGroup size="small" max={4} aria-label="Deltakere">
      {people.map((person) => (
        <Avatar key={person.name} aria-label={person.name}>
          {person.initials}
        </Avatar>
      ))}
    </AvatarGroup>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  index: 2,
  description:
    "With <code>max</code>, the last avatar shows how many are hidden, e.g. <code>+4</code>. The accessible name of that avatar can be changed with <code>overflowLabel</code>.",
};
