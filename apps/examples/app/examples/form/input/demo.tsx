import "@postenbring/hedwig-css";
import { Container, Input, Button, VStack } from "@postenbring/hedwig-react";

function Example() {
  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }
  return (
    <Container variant="slim">
      <form onSubmit={onSubmit} style={{ padding: "var(--hds-spacing-20-24) 0" }}>
        <VStack gap="16-20">
          <Input label="Name" name="name" />
          <Input label="Email" type="email" name="name" />
          <Input
            label="Password"
            type="password"
            name="password"
            placeholder="At least 6 characters"
          />
          <Button>Submit</Button>
        </VStack>
      </form>
    </Container>
  );
}

export default Example;

import type { ExampleConfig } from "../..";
export const config: ExampleConfig = {
  index: 0,
  layout: "none",
};
