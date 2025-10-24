import "@postenbring/hedwig-css";
import { ValidationMessage } from "@postenbring/hedwig-react";

const Example = () => (
  <>
    <ValidationMessage id="id" variant="info">
      Info message
    </ValidationMessage>
    <ValidationMessage id="id" variant="success">
      Success message
    </ValidationMessage>
    <ValidationMessage id="id" variant="warning">
      Warning message
    </ValidationMessage>
    <ValidationMessage id="id">Danger message</ValidationMessage>
  </>
);

export default Example;

import type { ExampleConfig } from "../..";
export const config: ExampleConfig = {
  index: 0,
  layout: "centered-fullwidth",
};
