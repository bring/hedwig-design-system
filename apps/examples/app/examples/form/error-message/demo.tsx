import "@postenbring/hedwig-css";
import { ErrorMessage } from "@postenbring/hedwig-react";

function Example() {
  return (
    <ErrorMessage id="id">This is an error message for use with form input components</ErrorMessage>
  );
}

export default Example;

import type { ExampleConfig } from "../..";
export const config: ExampleConfig = {
  index: 0,
  layout: "centered-fullwidth",
};
