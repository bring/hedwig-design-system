import "@postenbring/hedwig-css";
import { Figure } from "@postenbring/hedwig-react";

function Example() {
  return (
    <Figure>
      <img src="https://placedog.net/500/280" height={280} alt="A very good dog" />
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
