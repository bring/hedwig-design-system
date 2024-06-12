import "@postenbring/hedwig-css";
import { Message } from "@postenbring/hedwig-react";

function Example() {
  return (
    <Message variant="success">
      <Message.Title>Message header</Message.Title>
    </Message>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  index: 4,
};
