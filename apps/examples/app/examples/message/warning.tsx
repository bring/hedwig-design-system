import "@postenbring/hedwig-css";
import { Message } from "@postenbring/hedwig-react";

function Example() {
  return (
    <Message variant="warning">
      <Message.Title>Warning message</Message.Title>
      <Message.Description>
        Something did not go as excpected. Yellow always means something negative.{" "}
      </Message.Description>
    </Message>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {};
