import "@postenbring/hedwig-css";
import { Figure } from "@postenbring/hedwig-react";

function Example() {
  return (
    <Figure>
      <img
        style={{ objectFit: "cover" }}
        src="https://placedog.net/1000/560"
        height={560 / 2}
        alt="A very good dog"
      />
      <figcaption>Dogs are the best</figcaption>
    </Figure>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  layout: "centered-vertical-padding",
  index: 0,
};
