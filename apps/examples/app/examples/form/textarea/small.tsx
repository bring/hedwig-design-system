import "@postenbring/hedwig-css";
import { Textarea } from "@postenbring/hedwig-react";

const Example = () => <Textarea label="Label" size="small" />;

export default Example;

import type { ExampleConfig } from "../..";
export const config: ExampleConfig = {
  index: 1,
  layout: "centered-fullwidth",
};
