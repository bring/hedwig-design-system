import "@postenbring/hedwig-css";
import { ValidationMessage } from "@postenbring/hedwig-react";

const Example = () => (
  <>
    <ValidationMessage id="id-info" data-color="info">
      Info message
    </ValidationMessage>
    <ValidationMessage id="id-success" data-color="success">
      Success message
    </ValidationMessage>
    <ValidationMessage id="id-warning" data-color="warning">
      Warning message
    </ValidationMessage>
    <ValidationMessage id="id-error" data-color="error">
      Error message
    </ValidationMessage>
  </>
);

export default Example;

import type { ExampleConfig } from "../..";
export const config: ExampleConfig = {
  index: 0,
  layout: "centered-fullwidth",
};
