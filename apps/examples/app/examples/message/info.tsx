import "@postenbring/hedwig-css";
import { Message } from "@postenbring/hedwig-react";

function Example() {
  return (
    <Message variant="info">
      <Message.Title>Information message</Message.Title>
      <Message.Description>Some not that important information message.</Message.Description>
    </Message>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {};
