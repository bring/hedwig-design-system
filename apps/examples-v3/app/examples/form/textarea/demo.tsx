import "@postenbring/hedwig-css";
import { Textarea } from "@postenbring/hedwig-react";

function Example() {
  return <Textarea label="Label" />;
}

export default Example;

import type { ExampleConfig } from "../..";
export const config: ExampleConfig = {
  index: 0,
  layout: "centered-fullwidth",
};
