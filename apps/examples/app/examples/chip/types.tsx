import "@postenbring/hedwig-css";
import { Chip, ChipGroup } from "@postenbring/hedwig-react";

function Example() {
  return (
    <ChipGroup>
      <Chip type="radio" name="types-radio" defaultChecked>
        Radio
      </Chip>
      <Chip type="checkbox" defaultChecked>
        Checkbox
      </Chip>
      <Chip type="removable">Removable</Chip>
      <Chip type="button">Button</Chip>
      <Chip type="toggle" icon={<StarOutline />} pressedIcon={<StarSolid />}>
        Toggle
      </Chip>
    </ChipGroup>
  );
}

const StarOutline = () => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z" />
  </svg>
);

const StarSolid = () => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z" />
  </svg>
);

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  index: 1,
  description:
    "Choose the kind of chip with the <code>type</code> prop: <code>radio</code>, <code>checkbox</code>, <code>removable</code>, <code>button</code> or <code>toggle</code>. Chips follow the theme (Posten/Bring) and color scheme of the page.",
};
