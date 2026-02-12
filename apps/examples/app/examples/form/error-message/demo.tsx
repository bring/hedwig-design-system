import "@postenbring/hedwig-css";
import { ErrorMessage } from "@postenbring/hedwig-react";

const Example = () => (
  <ErrorMessage id="id">This is an error message for use with form input components</ErrorMessage>
);

export default Example;

import type { ExampleConfig } from "../..";
export const config: ExampleConfig = {
  index: 0,
  layout: "centered-fullwidth",
  description: "⚠️ErrorMessage component is deprecated. Use ValidationMessage component instead.⚠️",
};
