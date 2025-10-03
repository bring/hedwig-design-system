import "@postenbring/hedwig-css";
import { ValidationMessage } from "@postenbring/hedwig-react";

function Example() {
  return (
    <ValidationMessage id="id">
      This is a validation message for use with form input components
    </ValidationMessage>
  );
}

export default Example;

import type { ExampleConfig } from "../..";
export const config: ExampleConfig = {
  index: 0,
  layout: "centered-fullwidth",
};
