import "@postenbring/hedwig-css";
import { Chip, ChipGroup } from "@postenbring/hedwig-react";

function Example() {
  return (
    <ChipGroup>
      <Chip type="toggle" icon={<StarOutline />} pressedIcon={<StarSolid />}>
        Favoritt
      </Chip>
      <Chip
        type="toggle"
        variant="neutral"
        icon={<StarOutline />}
        pressedIcon={<StarSolid />}
        defaultPressed
      >
        Favoritt
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
  index: 6,
  description:
    'Use <code>type="toggle"</code> for a pressable chip with an icon. Provide <code>icon</code> and optionally <code>pressedIcon</code>. Control it with <code>pressed</code> and <code>onPressedChange</code>, or use <code>defaultPressed</code> when uncontrolled.',
};
