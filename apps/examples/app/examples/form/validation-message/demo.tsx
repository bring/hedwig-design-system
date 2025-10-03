import "@postenbring/hedwig-css";
import { ValidationMessage } from "@postenbring/hedwig-react";

function Example() {
  return (
    <>
      <ValidationMessage id="id" type="info">
        Info message
      </ValidationMessage>
      <ValidationMessage id="id" type="success">
        Success message
      </ValidationMessage>
      <ValidationMessage id="id" type="warning">
        Warning message
      </ValidationMessage>
      <ValidationMessage id="id" type="danger">
        Danger message
      </ValidationMessage>
    </>
  );
}

export default Example;

import type { ExampleConfig } from "../..";
export const config: ExampleConfig = {
  index: 0,
  layout: "centered-fullwidth",
};
