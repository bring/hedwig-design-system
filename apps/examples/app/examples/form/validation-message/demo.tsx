import "@postenbring/hedwig-css";
import { ValidationMessage } from "@postenbring/hedwig-react";

const Example = () => (
  <>
    <ValidationMessage id="id-info" variant="info">
      Info message
    </ValidationMessage>
    <ValidationMessage id="id-success" variant="success">
      Success message
    </ValidationMessage>
    <ValidationMessage id="id-warning" variant="warning">
      Warning message
    </ValidationMessage>
    <ValidationMessage id="id-danger">Danger message</ValidationMessage>
  </>
);

export default Example;

import type { ExampleConfig } from "../..";
export const config: ExampleConfig = {
  index: 0,
  layout: "centered-fullwidth",
};
