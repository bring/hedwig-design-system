import "@postenbring/hedwig-css";
import { Container, SearchWrapper, VStack, Input, Button } from "@postenbring/hedwig-react";

function Example() {
  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }
  return (
    <Container variant="slim">
      <form onSubmit={onSubmit} style={{ padding: "var(--hds-spacing-20-24) 0" }}>
        <VStack gap="16-20">
          <SearchWrapper>
            <Input name="name" />
            <Button>Search</Button>
          </SearchWrapper>
          <SearchWrapper>
            <Input label="Søk her" name="name" />
            <Button>Search</Button>
          </SearchWrapper>
          <SearchWrapper>
            <Input label="Søk her" name="name" errorMessage="Noe gikk galt" />
            <Button>Search</Button>
          </SearchWrapper>
          <SearchWrapper>
            <Input name="name" errorMessage="Noe gikk galt" />
            <Button>Search</Button>
          </SearchWrapper>
        </VStack>
      </form>
    </Container>
  );
}

export default Example;

import type { ExampleConfig } from "../..";
export const config: ExampleConfig = {
  index: 0,
  layout: "centered-fullwidth",
};
