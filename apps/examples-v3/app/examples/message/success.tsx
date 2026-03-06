import "@postenbring/hedwig-css";
import { Message } from "@postenbring/hedwig-react";

function Example() {
  return (
    <Message variant="success">
      <Message.Title>Success message</Message.Title>
      <Message.Description>
        Something went according to expectations. Thats great!
      </Message.Description>
    </Message>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  index: 0,
  description: "⚠️Message component is deprecated. Use Alert component instead.⚠️",
};
