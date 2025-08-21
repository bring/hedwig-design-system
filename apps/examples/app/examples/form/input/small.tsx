import "@postenbring/hedwig-css";
import { VStack, Input, Container, Textarea, Select, Button } from "@postenbring/hedwig-react";

function Example() {
  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }
  return (
    <Container variant="slim">
      <form onSubmit={onSubmit} style={{ padding: "var(--hds-spacing-20-24) 0" }}>
        <VStack gap="16-20">
          <Input label="Name" name="name" size="small" />
          <Input label="Email" type="email" name="name" size="small" />
          <Input
            label="Password"
            type="password"
            name="password"
            placeholder="At least 6 characters"
            size="small"
          />
          <Textarea label="Profile bio (optional)" size="small" />
          <Select label="Preferred animal" defaultValue="" size="small">
            <option disabled value="">
              Choose an animal
            </option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="other">Other</option>
          </Select>
          <Button size="small">Submit</Button>
        </VStack>
      </form>
    </Container>
  );
}

export default Example;

import type { ExampleConfig } from "../..";
export const config: ExampleConfig = {
  index: 1,
  layout: "centered-fullwidth",
};
