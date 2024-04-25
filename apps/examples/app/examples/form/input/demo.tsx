import {
  Container,
  Input,
  PrimaryButton,
  Select,
  Textarea,
  VStack,
} from "@postenbring/hedwig-react";

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
          <Textarea label="Profile bio (optional)" />
          <Select label="Preferred animal">
            <option disabled selected value="">
              Choose an animal
            </option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="other">Other</option>
          </Select>
          <PrimaryButton>Submit</PrimaryButton>
        </VStack>
      </form>
    </Container>
  );
}

export default Example;

import type { ExampleConfig } from "../..";
export const config: ExampleConfig = {
  layout: "none",
};
